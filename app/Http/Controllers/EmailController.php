<?php

namespace App\Http\Controllers;

use App\Data\EmailData;
use App\Models\Email;
use App\Models\Lead;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Inertia\Inertia;
use Inertia\Response;

class EmailController extends Controller
{
    /**
     * Display a listing of the emails.
     */
    public function index(): Response
    {
        $emails = Email::with('leads')->paginate(15);

        return Inertia::render('Emails/Index', [
            'emails' => $emails,
        ]);
    }

    /**
     * Show the form for creating a new email.
     */
    public function create(): Response
    {
        return Inertia::render('Emails/Create');
    }

    /**
     * Store a newly created email in storage.
     */
    public function store(EmailData $data): JsonResponse
    {
        $email = Email::create($data->toArray());

        return response()->json([
            'message' => 'Email created successfully',
            'email' => $email,
        ], 201);
    }

    /**
     * Display the specified email.
     */
    public function show(Email $email): Response
    {
        $email->load('leads');

        return Inertia::render('Emails/Show', [
            'email' => $email,
        ]);
    }

    /**
     * Show the form for editing the specified email.
     */
    public function edit(Email $email): Response
    {
        $email->load('leads');

        return Inertia::render('Emails/Edit', [
            'email' => $email,
        ]);
    }

    /**
     * Update the specified email in storage.
     */
    public function update(EmailData $data, Email $email): JsonResponse
    {
        $email->update($data->toArray());

        return response()->json([
            'message' => 'Email updated successfully',
            'email' => $email,
        ]);
    }

    /**
     * Remove the specified email from storage.
     */
    public function destroy(Email $email): JsonResponse
    {
        $email->delete();

        return response()->json([
            'message' => 'Email deleted successfully',
        ]);
    }

    /**
     * Attach leads to an email.
     */
    public function attachLeads(Request $request, Email $email): JsonResponse
    {
        $request->validate([
            'lead_ids' => 'required|array',
            'lead_ids.*' => 'exists:leads,id',
        ]);

        $email->leads()->attach($request->lead_ids);

        return response()->json([
            'message' => 'Leads attached successfully',
        ]);
    }

    /**
     * Detach leads from an email.
     */
    public function detachLeads(Request $request, Email $email): JsonResponse
    {
        $request->validate([
            'lead_ids' => 'required|array',
            'lead_ids.*' => 'exists:leads,id',
        ]);

        $email->leads()->detach($request->lead_ids);

        return response()->json([
            'message' => 'Leads detached successfully',
        ]);
    }

    /**
     * Sync leads for an email (replace all existing relationships).
     */
    public function syncLeads(Request $request, Email $email): JsonResponse
    {
        $request->validate([
            'lead_ids' => 'array',
            'lead_ids.*' => 'exists:leads,id',
        ]);

        $email->leads()->sync($request->lead_ids ?? []);

        return response()->json([
            'message' => 'Leads synced successfully',
        ]);
    }
}
