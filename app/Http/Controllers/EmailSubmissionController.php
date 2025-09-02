<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Log;

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
            'mail_group' => 'required|string|max:255',
            'redirect_url' => 'nullable|string|max:500',
        ]);

        try {
            // Log the successful submission
            Log::info('Email submission successful', [
                'email' => $validated['email'],
                'name' => $validated['name'],
                'mail_group' => $validated['mail_group'],
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

            return redirect()->back()->withErrors(['error' => 'Something went wrong. Please try again.']);
        }
    }
}
