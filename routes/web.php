<?php

use App\Http\Controllers\EmailSubmissionController;
use App\Http\Controllers\StripeProductController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\WorkOS\Http\Middleware\ValidateSessionWithWorkOS;

// Route::get('/welcome', function () {
//     return Inertia::render('welcome');
// })->name('home');

// Route::get('/', function () {
//     return Inertia::render('landing-demo');
// })->name('landing-demo');

Route::get('/giveaway/k8s', function () {
    return Inertia::render('giveaway/k8s/opt-in');
})->name('giveaway.k8s.opt-in');

Route::post('/email/submit', EmailSubmissionController::class)->name('email.submit');

Route::get('/giveaway/k8s/thanks', function () {
    return Inertia::render('giveaway/k8s/thanks');
})->name('giveaway.k8s.thanks');

Route::get('/privacy', function () {
    return Inertia::render('privacy');
})->name('privacy');

Route::get('/terms', function () {
    return Inertia::render('terms');
})->name('terms');

Route::get('/cookies', function () {
    return Inertia::render('cookies');
})->name('cookies');

// Route::middleware([
//     'auth',
//     ValidateSessionWithWorkOS::class,
// ])->group(function () {
//     Route::get('dashboard', function () {
//         return Inertia::render('dashboard');
//     })->name('dashboard');
//
//     Route::get('products', function () {
//         return Inertia::render('products');
//     })->name('products');
//
//     Route::resource('stripe-products', StripeProductController::class)->names('products');
// });

// For liveness probe
Route::get('/healthz', function () {
    return response()->json(['status' => 'healthy', 'code' => 200], 200);
});

// require __DIR__.'/settings.php';
// require __DIR__.'/auth.php';
