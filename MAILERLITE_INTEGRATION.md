# MailerLite Integration

This project includes a MailerLite service for managing newsletter subscribers through the MailerLite API.

## Setup

### 1. Environment Variables

Add your MailerLite API key to your `.env` file:

```env
MAILERLITE_API_KEY=your_api_key_here
```

You can get your API key from the [MailerLite dashboard](https://dashboard.mailerlite.com/integrations/api).

### 2. Configuration

The service is configured in `config/services.php`:

```php
'mailerlite' => [
    'api_key' => env('MAILERLITE_API_KEY'),
],
```

## Usage

### Basic Service Usage

```php
use App\Services\MailerLiteService;

$mailerLiteService = new MailerLiteService();

// Create a subscriber
$result = $mailerLiteService->createSubscriber(
    email: 'user@example.com',
    fields: ['name' => 'John Doe'],
    groups: ['newsletter'],
    status: true
);
```

### Using the Action Class

```php
use App\Actions\CreateNewsletterSubscriber;

$action = new CreateNewsletterSubscriber($mailerLiteService);

$result = $action->execute([
    'email' => 'user@example.com',
    'name' => 'John Doe',
    'country' => 'USA',
    'groups' => ['newsletter', 'updates']
]);
```

### Using the Controller

The `NewsletterController` provides HTTP endpoints for newsletter subscription:

```php
// POST /newsletter/subscribe
{
    "email": "user@example.com",
    "name": "John Doe",
    "country": "USA",
    "groups": ["newsletter"],
    "status": true
}
```

## API Endpoints

### Create Subscriber

- **URL**: `POST /newsletter/subscribe`
- **Body**:
  - `email` (required): Subscriber email address
  - `name` (optional): Subscriber name
  - `country` (optional): Subscriber country
  - `groups` (optional): Array of group IDs
  - `status` (optional): Subscription status (default: true)

### Check Subscription Status

- **URL**: `GET /newsletter/status?email=user@example.com`
- **Query Parameters**:
  - `email` (required): Email address to check

## Service Methods

### MailerLiteService

- `createSubscriber(string $email, array $fields = [], array $groups = [], bool $status = true)`: Create a new subscriber
- `getSubscriber(string $email)`: Get subscriber by email
- `updateSubscriber(string $subscriberId, array $data)`: Update subscriber information
- `deleteSubscriber(string $subscriberId)`: Delete a subscriber

## Error Handling

The service includes comprehensive error handling and logging:

- API errors are logged with context
- Validation errors return appropriate HTTP status codes
- Exceptions are caught and logged for debugging

## Testing

To test the service, you can use the provided controller endpoints or create unit tests:

```php
use App\Services\MailerLiteService;
use Tests\TestCase;

class MailerLiteServiceTest extends TestCase
{
    public function test_can_create_subscriber()
    {
        $service = new MailerLiteService();
        
        $result = $service->createSubscriber('test@example.com');
        
        $this->assertIsArray($result);
        // Add more assertions based on expected response
    }
}
```

## Dependencies

- Laravel Framework (^12.0)
- Symfony HTTP Client (^7.3) - Already included in the project

## Notes

- The service uses the MailerLite v2 API
- All API calls are authenticated using Bearer token authentication
- Responses are logged for debugging and monitoring
- The service handles common error scenarios gracefully
