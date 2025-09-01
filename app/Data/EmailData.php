<?php

namespace App\Data;

use Spatie\LaravelData\Data;
use Spatie\LaravelData\Attributes\Validation\Email as EmailRule;
use Spatie\LaravelData\Attributes\Validation\Max;
use Spatie\LaravelData\Attributes\Validation\Min;
use Spatie\LaravelData\Attributes\Validation\Required;
use Spatie\LaravelData\Attributes\Validation\StringType;

class EmailData extends Data
{
    public function __construct(
        public string $first_name,
        public string $email,
    ) {
    }

    public static function rules(): array
    {
        return [
            'first_name' => [Required::class, StringType::class, Min::class . ':2', Max::class . ':255'],
            'email' => [Required::class, EmailRule::class, Max::class . ':255'],
        ];
    }
}
