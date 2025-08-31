<?php

namespace Database\Seeders;

use App\Models\StripeProduct;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class StripeProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create some sample digital products
        // StripeProduct::factory(20)->create();

        // Create some specific digital products for testing
        StripeProduct::factory()->create([
            'stripe_id' => 'prod_SxKpdbzKmBEaFz',
            'name' => 'Lab: 8 Simple Steps to K8s',
            'description' => 'Learn how to create and run your first Kubernetes cluster application in under 8 minutes!',
            'image' => 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400',
            'price' => 0.00,
            'currency' => 'usd',
            'active' => true,
        ]);

        StripeProduct::factory()->create([
            'stripe_id' => 'prod_SxKUka3IoX2bGb',
            'name' => 'Kubernetes Basics Course',
            'description' => 'Learn the fundamentals of Kubernetes in this beginner-friendly course. Covers core concepts like pods, deployments, services, and scaling applications, with hands-on exercises to help you confidently run workloads in a Kubernetes cluster.',
            'image' => 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400',
            'price' => 29.99,
            'currency' => 'usd',
            'active' => true,
        ]);

    }
}
