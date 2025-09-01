<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Email extends Model
{
    use HasFactory;

    protected $fillable = [
        'first_name',
        'email',
    ];

    /**
     * The leads that belong to this email.
     */
    public function leads(): BelongsToMany
    {
        return $this->belongsToMany(Lead::class);
    }
}
