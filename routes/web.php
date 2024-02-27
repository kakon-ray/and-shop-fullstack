<?php

use App\Http\Controllers\User\Dashboard\DashboardController;
use App\Http\Controllers\User\UserGuest\UserGuestController;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', [UserGuestController::class, 'home'])->name('home');
Route::get('/shop', [UserGuestController::class, 'shop'])->name('shop');
Route::get('/about', [UserGuestController::class, 'about'])->name('about');
Route::get('/blog', [UserGuestController::class, 'blog'])->name('blog');
Route::get('/contact', [UserGuestController::class, 'contact'])->name('contact');
Route::get('/cart', [DashboardController::class, 'cart'])->name('cart');
Route::get('/wishlist', [DashboardController::class, 'wishlist'])->name('wishlist');


// dashboard page
Route::get('/dashboard', [DashboardController::class, 'dashboard'])->name('dashboard');
Route::get('/cartlist', [DashboardController::class, 'cartlist'])->name('cartlist');

Route::name('user.')->prefix('user')->group(function () {
    Route::middleware('auth','verified')->group(function () {
    });
});







Route::get('/linkstorage', function () {
    $targetFolder = storage_path('app/public');
    $linkFolder = $_SERVER['DOCUMENT_ROOT'].'/storage';
    symlink($targetFolder, $linkFolder);
 });

 Route::get('/route-cache', function() {
    $exitCode = Artisan::call('route:cache');
    return 'Routes cache cleared';
});

Route::get('/config-cache', function() {
    $exitCode = Artisan::call('config:cache');
    return 'Config cache cleared';
});

Route::get('/clear-cache', function() {
    $exitCode = Artisan::call('cache:clear');
    return 'Application cache cleared';
});

Route::get('/view-clear', function() {
    $exitCode = Artisan::call('view:clear');
    return 'View cache cleared';
});

require __DIR__.'/auth.php';
require __DIR__.'/admin_auth.php';
