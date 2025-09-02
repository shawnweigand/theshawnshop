<?php

namespace App\Actions;

use App\Services\MailerLiteService;
use Exception;
use Illuminate\Support\Facades\Log;

class CreateNewsletterSubscriber
{
    public function __construct(
        private MailerLiteService $mailerLiteService
    ) {}

    /**
     * Create a newsletter subscriber
     *
     * @param array $data
     * @return array
     * @throws Exception
     */
    public function execute(array $data): array
    {
        try {
            // Validate required data
            if (empty($data['email'])) {
                throw new Exception('Email is required');
            }

            // Prepare subscriber fields
            $fields = [];
            if (!empty($data['name'])) {
                $fields['name'] = $data['name'];
            }
            if (!empty($data['country'])) {
                $fields['country'] = $data['country'];
            }

            // Create subscriber in MailerLite
            $result = $this->mailerLiteService->createSubscriber(
                email: $data['email'],
                fields: $fields,
                groups: $data['groups'] ?? [],
                status: $data['status'] ?? true
            );

            Log::info('Newsletter subscriber created successfully', [
                'email' => $data['email'],
                'subscriber_id' => $result['data']['id'] ?? null
            ]);

            return [
                'success' => true,
                'data' => $result,
                'message' => 'Subscriber created successfully'
            ];

        } catch (Exception $e) {
            Log::error('Failed to create newsletter subscriber', [
                'email' => $data['email'] ?? 'unknown',
                'error' => $e->getMessage()
            ]);

            return [
                'success' => false,
                'message' => 'Failed to create subscriber: ' . $e->getMessage()
            ];
        }
    }
}
