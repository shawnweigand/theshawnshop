<?php

use App\Http\Controllers\EmailSubmissionController;
use App\Http\Controllers\StripeProductController;
use App\Services\MailerLiteService;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\WorkOS\Http\Middleware\ValidateSessionWithWorkOS;

// Route::get('/welcome', function () {
//     return Inertia::render('welcome');
// })->name('home');

Route::get('/', function () {
    return Inertia::render('home');
})->name('home');

Route::get('/hero-landing', function () {
    return Inertia::render('hero-landing');
})->name('hero-landing');

// Route::get('/', function () {
//     return redirect()->route('giveaway.az104.opt-in');
// })->name('home');

Route::post('/email/submit', EmailSubmissionController::class)->name('email.submit');

// K8s Giveaway
Route::get('/giveaway/k8s', function () {
    return Inertia::render('giveaway/k8s/opt-in');
})->name('giveaway.k8s.opt-in');
Route::get('/giveaway/k8s/thanks', function () {
    return Inertia::render('giveaway/k8s/thanks');
})->name('giveaway.k8s.thanks');
Route::get('/giveaway/k8s/550e8400-e29b-41d4-a716-446655440000', function () {
    return redirect()->route('8-steps-to-k8s');
    // return Inertia::render('giveaway/k8s/page');
})->name('giveaway.k8s.page');

// K8s Roadmap
Route::get('/giveaway/k8s/E9D45393-36AA-4BE2-9C27-38CF9DF14402', function () {
    return redirect()->route('k8s-roadmap');
    // return Inertia::render('giveaway/k8s/roadmap');
})->name('giveaway.k8s.roadmap');

// AZ-104 Giveaway
Route::get('/giveaway/az104', function () {
    return Inertia::render('giveaway/az104/opt-in');
})->name('giveaway.az104.opt-in');
Route::get('/giveaway/az104/thanks', function () {
    return Inertia::render('giveaway/az104/thanks');
})->name('giveaway.az104.thanks');
Route::get('/giveaway/az104/ACED2B2F-8237-4BCB-BCB3-D74AF35F1559', function () {
    return redirect()->route('az-104');
    // return Inertia::render('giveaway/az104/page');
})->name('giveaway.az104.page');

// Terraform Explained Giveaway
Route::get('/giveaway/explained', function () {
    return Inertia::render('giveaway/tf-explained/opt-in');
})->name('giveaway.tf-explained.opt-in');
Route::get('/giveaway/explained/thanks', function () {
    return Inertia::render('giveaway/tf-explained/thanks');
})->name('giveaway.tf-explained.thanks');
Route::get('/giveaway/explained/{email}', function ($email) {
    return redirect()->route('terraform-explained');
    $mailerlite = new MailerLiteService();
    $subscriber = $mailerlite->getSubscriber($email);
    // check if the subscriber groups contains one that has the target group id
    $subscriber_in_group = in_array(config('services.mailerlite.group_ids.giveaway.tf-explained'), array_column($subscriber['groups'], 'id'));
    if (!$subscriber || !$subscriber['email'] || !$subscriber['fields']['name'] || !$subscriber_in_group) {
        return redirect()->route('giveaway.tf-explained.opt-in')->with('error', 'Invalid subscriber. Please sign up using the form.');
    }
    return Inertia::render('giveaway/tf-explained/page', [
        'subscriber' => $subscriber
    ]);
})->name('giveaway.tf-explained.page');

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

    Route::get('k8s-roadmap', function () {
        return Inertia::render('items/k8s-roadmap');
    })->name('k8s-roadmap');

    Route::get('az-104', function () {
        return Inertia::render('items/az-104');
    })->name('az-104');

    Route::get('8-steps-to-k8s', function () {
        return Inertia::render('items/8-steps-to-k8s');
    })->name('8-steps-to-k8s');

    Route::get('terraform-explained', function () {
        return Inertia::render('items/terraform-explained');
    })->name('terraform-explained');

    Route::get('microservices-docker', function () {
        return Inertia::render('items/microservices-docker');
    })->name('microservices-docker');

    Route::get('products', function () {
        return Inertia::render('products');
    })->name('products');

    Route::resource('stripe-products', StripeProductController::class)->names('products');
});

// For liveness probe
// Route::get('/healthz', function () {
//     return response()->json(['status' => 'healthy', 'code' => 200], 200);
// });

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
