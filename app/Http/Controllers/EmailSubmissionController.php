<?php

namespace App\Http\Controllers;

use App\Data\EmailData;
use App\Models\Email;
use App\Models\Lead;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class EmailSubmissionController extends Controller
{
    /**
     * Handle the incoming email submission request.
     */
    public function __invoke(Request $request): RedirectResponse
    {
        // Validate the request
        $validated = $request->validate([
            'name' => 'required|string|min:2|max:255',
            'email' => 'required|email|max:255',
            'lead_route' => 'required|string|max:255',
            'redirect_url' => 'nullable|string|max:500',
        ]);

        try {

            // Start a database transaction
            DB::beginTransaction();

            // Create or find the email
            $email = Email::firstOrCreate(
                ['email' => $validated['email']],
                [
                    'first_name' => $validated['name'],
                    'email' => $validated['email'],
                ]
            );

            // If the email already existed, update the first name if it's different
            if ($email->wasRecentlyCreated === false && $email->first_name !== $validated['name']) {
                $email->update(['first_name' => $validated['name']]);
            }

            // Create or find the lead for the specified route
            $lead = Lead::firstOrCreate(
                ['route' => $validated['lead_route']],
                ['route' => $validated['lead_route']]
            );

            // Attach the email to the lead (many-to-many relationship)
            $email->leads()->syncWithoutDetaching([$lead->id]);

            // Commit the transaction
            DB::commit();

            // Log the successful submission
            Log::info('Email submission successful', [
                'email' => $validated['email'],
                'name' => $validated['name'],
                'lead_route' => $lead->route,
            ]);

            // If redirect URL is provided, redirect to it with success message
            if (!empty($validated['redirect_url'])) {
                return redirect($validated['redirect_url'])->with('success', 'Your free guide is on its way.');
            }

            // Otherwise redirect back with success message
            return redirect()->back()->with('success', 'Success!');

        } catch (\Exception $e) {
            // Rollback the transaction on error
            DB::rollBack();

            // Log the error
            Log::error('Email submission failed', [
                'error' => $e->getMessage(),
                'request_data' => $request->all(),
            ]);

            return redirect()->back()->withErrors(['error' => 'Something went wrong. Please try again.']);
        }
    }
}
