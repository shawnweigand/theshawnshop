<?php

namespace App\Http\Controllers;

use App\Actions\CreateNewsletterSubscriber;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Validation\ValidationException;

class NewsletterController extends Controller
{
    public function __construct(
        private CreateNewsletterSubscriber $createSubscriberAction
    ) {}

    /**
     * Subscribe a user to the newsletter
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function subscribe(Request $request): JsonResponse
    {
        try {
            // Validate the request
            $validated = $request->validate([
                'email' => 'required|email',
                'name' => 'nullable|string|max:255',
                'country' => 'nullable|string|max:100',
                'groups' => 'nullable|array',
                'groups.*' => 'string',
                'status' => 'nullable|boolean'
            ]);

            // Execute the action
            $result = $this->createSubscriberAction->execute($validated);

            if ($result['success']) {
                return response()->json([
                    'success' => true,
                    'message' => 'Successfully subscribed to newsletter!',
                    'data' => $result['data']
                ], 201);
            }

            return response()->json([
                'success' => false,
                'message' => $result['message']
            ], 400);

        } catch (ValidationException $e) {
            return response()->json([
                'success' => false,
                'message' => 'Validation failed',
                'errors' => $e->errors()
            ], 422);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'An error occurred while subscribing to the newsletter'
            ], 500);
        }
    }

    /**
     * Get subscription status
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function status(Request $request): JsonResponse
    {
        try {
            $request->validate([
                'email' => 'required|email'
            ]);

            $email = $request->input('email');

            // You can add logic here to check subscription status
            // For now, just return a simple response
            return response()->json([
                'success' => true,
                'message' => 'Subscription status checked',
                'email' => $email
            ]);

        } catch (ValidationException $e) {
            return response()->json([
                'success' => false,
                'message' => 'Validation failed',
                'errors' => $e->errors()
            ], 422);
        }
    }
}
