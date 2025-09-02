<?php

namespace App\Http\Controllers;

use App\Services\MailerLiteService;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Log;

class EmailSubmissionController extends Controller
{
    public function __construct(
        private MailerLiteService $mailerLiteService
    ) {}

    /**
     * Handle the incoming email submission request.
     */
    public function __invoke(Request $request): RedirectResponse
    {
        // Validate the request
        $validated = $request->validate([
            'name' => 'required|string|min:2|max:255',
            'email' => 'required|email|max:255',
            'mail_group' => 'required|string|max:255',
            'redirect_url' => 'nullable|string|max:500',
        ]);

        try {
            // Create subscriber in MailerLite
            $fields = ['name' => $validated['name']];
            $groups = [config('services.mailerlite.group_ids.' . $validated['mail_group'])];

            $result = $this->mailerLiteService->createSubscriber(
                email: $validated['email'],
                fields: $fields,
                groups: $groups
            );

            // Log the successful submission
            Log::info('Email submission successful', [
                'email' => $validated['email'],
                'name' => $validated['name'],
                'mail_group' => $validated['mail_group'],
                'mailerlite_response' => $result,
            ]);

            // If redirect URL is provided, redirect to it with success message
            if (!empty($validated['redirect_url'])) {
                return redirect($validated['redirect_url'])->with('success', 'Your free guide is on its way.');
            }

            // Otherwise redirect back with success message
            return redirect()->back()->with('success', 'Success!');

        } catch (\Exception $e) {
            // Log the error
            Log::error('Email submission failed', [
                'error' => $e->getMessage(),
                'request_data' => $request->all(),
            ]);

            // Check if it's a MailerLite API error
            if (str_contains($e->getMessage(), 'MailerLite')) {
                return redirect()->back()->withErrors(['error' => 'Failed to subscribe to newsletter. Please try again.']);
            }

            return redirect()->back()->withErrors(['error' => 'Something went wrong. Please try again.']);
        }
    }
}
