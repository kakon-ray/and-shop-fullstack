<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\Auth\AdminRegistationController;
use App\Http\Controllers\Admin\Auth\LoginController;
use App\Http\Controllers\Admin\Auth\ForgetController;
use App\Http\Controllers\Admin\Dashboard\CategoryContoller;
use App\Http\Controllers\Admin\Dashboard\DashboardController;

Route::middleware(['AdminAuth'])->group(function (){

    Route::name('admin.')->prefix('admin')->group(function () {
        Route::get('logout', [LoginController::class, 'logout'])->name('logout');
        Route::get('dashboard', [DashboardController::class, 'dashboard'])->name('dashboard');

        Route::name('category.')->prefix('category')->group(function () {
            Route::get('manage', [CategoryContoller::class, 'manage_category'])->name('manage');
            Route::get('add', [CategoryContoller::class, 'add_category'])->name('add');
            Route::get('edit/{id}', [CategoryContoller::class, 'edit_category'])->name('edit');
            Route::post('add-submit', [CategoryContoller::class, 'add_category_submit'])->name('add.submit');
            Route::post('edit-submit', [CategoryContoller::class, 'edit_category_submit'])->name('edit.submit');
            Route::get('delete/{id}', [CategoryContoller::class, 'delete_category_submit'])->name('delete.submit');
        });

        Route::name('subcategory.')->prefix('subcategory')->group(function () {
            Route::get('manage', [CategoryContoller::class, 'manage_subcategory'])->name('manage');
            Route::get('add', [CategoryContoller::class, 'add_subcategory'])->name('add');
            Route::get('edit/{id}', [CategoryContoller::class, 'edit_subcategory'])->name('edit');
            Route::post('add-submit', [CategoryContoller::class, 'add_subcategory_submit'])->name('add.submit');
            Route::post('edit-submit', [CategoryContoller::class, 'edit_subcategory_submit'])->name('edit.submit');
            Route::get('delete/{id}', [CategoryContoller::class, 'delete_subcategory_submit'])->name('delete.submit');
        });
    });

 

});