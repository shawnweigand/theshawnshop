<?php

namespace App\Data;

use Spatie\LaravelData\Data;

class LeadData extends Data
{
    public function __construct(
        public string $route,
    ) {
    }
}
