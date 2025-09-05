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

Route::get('/', function () {
    return redirect()->route('giveaway.k8s.opt-in');
})->name('home');

Route::get('/giveaway/k8s', function () {
    return Inertia::render('giveaway/k8s/opt-in');
})->name('giveaway.k8s.opt-in');

Route::post('/email/submit', EmailSubmissionController::class)->name('email.submit');

Route::get('/giveaway/k8s/thanks', function () {
    return Inertia::render('giveaway/k8s/thanks');
})->name('giveaway.k8s.thanks');

Route::get('/giveaway/k8s/550e8400-e29b-41d4-a716-446655440000', function () {
    return Inertia::render('giveaway/k8s/page');
})->name('giveaway.k8s.page');

Route::get('/giveaway/k8s/E9D45393-36AA-4BE2-9C27-38CF9DF14402', function () {
    return Inertia::render('giveaway/k8s/roadmap');
})->name('giveaway.k8s.roadmap');

Route::get('/giveaway/az104', function () {
    return Inertia::render('giveaway/az104/opt-in');
})->name('giveaway.az104.opt-in');

Route::get('/giveaway/az104/thanks', function () {
    return Inertia::render('giveaway/az104/thanks');
})->name('giveaway.az104.thanks');

Route::get('/giveaway/az104/ACED2B2F-8237-4BCB-BCB3-D74AF35F1559', function () {
    return Inertia::render('giveaway/az104/page');
})->name('giveaway.az104.page');

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
