<?php

use App\Http\Controllers\StripeProductController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\WorkOS\Http\Middleware\ValidateSessionWithWorkOS;

// Route::get('/welcome', function () {
//     return Inertia::render('welcome');
// })->name('home');

Route::get('/', function () {
    return Inertia::render('landing-demo');
})->name('landing-demo');

Route::get('/giveaway', function () {
    return Inertia::render('giveaway');
})->name('giveaway');

Route::get('/privacy', function () {
    return Inertia::render('privacy');
})->name('privacy');

Route::get('/terms', function () {
    return Inertia::render('terms');
})->name('terms');

Route::get('/cookies', function () {
    return Inertia::render('cookies');
})->name('cookies');

Route::middleware([
    'auth',
    ValidateSessionWithWorkOS::class,
])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::get('products', function () {
        return Inertia::render('products');
    })->name('products');

    Route::resource('stripe-products', StripeProductController::class)->names('products');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
