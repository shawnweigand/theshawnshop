<?php

use App\Actions\Services\MailerLite\CreateSubscriber;
use Illuminate\Support\Facades\Route;
use Laravel\WorkOS\Http\Requests\AuthKitAuthenticationRequest;
use Laravel\WorkOS\Http\Requests\AuthKitLoginRequest;
use Laravel\WorkOS\Http\Requests\AuthKitLogoutRequest;

Route::get('login', function (AuthKitLoginRequest $request) {
    return $request->redirect();
})->middleware(['guest'])->name('login');

Route::get('authenticate', function (AuthKitAuthenticationRequest $request) {
    $authenticate = function () use ($request) {
        $user = $request->authenticate();
        if ($user->wasRecentlyCreated) {
            $groupId = config('services.mailerlite.group_ids.theshawnshop');
            if ($groupId) {
                CreateSubscriber::run($user->email, ['name' => $user->name], [(int) $groupId]);
            }
        }
    };

    return tap(to_route('dashboard'), $authenticate);
})->middleware(['guest']);

Route::post('logout', function (AuthKitLogoutRequest $request) {
    return $request->logout();
})->middleware(['auth'])->name('logout');
