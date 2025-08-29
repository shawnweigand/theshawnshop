<?php

namespace App\Data;

use Spatie\LaravelData\Data;
use Spatie\LaravelData\Attributes\MapName;

class StripeProductData extends Data
{
    public function __construct(
        public int $id,
        public string $stripe_id,
        public string $name,
        public ?string $description,
        public ?string $image,
        public float $price,
        public string $currency,
        public bool $active,
        public string $created_at,
        public string $updated_at,
    ) {
    }

    public static function fromModel(\App\Models\StripeProduct $product): self
    {
        return new self(
            id: $product->id,
            stripe_id: $product->stripe_id,
            name: $product->name,
            description: $product->description,
            image: $product->image,
            price: $product->price,
            currency: $product->currency,
            active: $product->active,
            created_at: $product->created_at,
            updated_at: $product->updated_at,
        );
    }

    public function getFormattedPrice(): ?string
    {
        if (!$this->price) {
            return null;
        }

        return '$' . number_format($this->price, 2);
    }


}
