<?php

use App\Http\Controllers\User\Dashboard\DashboardController;
use App\Http\Controllers\User\UserGuest\UserGuestController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', [UserGuestController::class, 'home'])->name('home');
Route::get('/shop', [UserGuestController::class, 'shop'])->name('shop');
Route::get('/about', [UserGuestController::class, 'about'])->name('about');
Route::get('/blog', [UserGuestController::class, 'blog'])->name('blog');
Route::get('/contact', [UserGuestController::class, 'contact'])->name('contact');
Route::get('/cart', [DashboardController::class, 'cart'])->name('cart');
Route::get('/wishlist', [DashboardController::class, 'wishlist'])->name('wishlist');

Route::name('user.')->prefix('user')->group(function () {
    Route::middleware('auth','verified')->group(function () {
        Route::get('/dashboard', [DashboardController::class, 'dashboard'])->name('dashboard');
    });
});

require __DIR__.'/auth.php';
require __DIR__.'/admin_auth.php';
