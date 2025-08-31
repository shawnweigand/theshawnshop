<?php

namespace Database\Factories;

use App\Models\StripeProduct;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\StripeProduct>
 */
class StripeProductFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = StripeProduct::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'stripe_id' => 'prod_' . $this->faker->regexify('[A-Za-z0-9]{14}'),
            'name' => $this->faker->words(3, true),
            'description' => $this->faker->paragraph(),
            'image' => $this->faker->optional()->randomElement([
                'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
                'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400',
                'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400',
                'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400',
                'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400',
                'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400',
            ]),
            'price' => $this->faker->randomFloat(2, 5, 500),
            'currency' => $this->faker->randomElement(['usd', 'eur', 'gbp']),
            'active' => $this->faker->boolean(80), // 80% chance of being active
        ];
    }

    /**
     * Indicate that the product is active.
     */
    public function active(): static
    {
        return $this->state(fn (array $attributes) => [
            'active' => true,
        ]);
    }

    /**
     * Indicate that the product is inactive.
     */
    public function inactive(): static
    {
        return $this->state(fn (array $attributes) => [
            'active' => false,
        ]);
    }


}
