<?php

namespace Database\Seeders;

use App\Models\Lead;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class LeadSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create some specific sample leads
        Lead::factory()->create([
            'route' => 'giveaway.k8s',
        ]);


        // Create additional random leads
        // Lead::factory()->count(20)->create();
    }
}
