<?php

namespace App\Http\Controllers\User\Dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function dashboard(){
        return view('user.dashboard.dashboard');
    }

    public function cart()
    {
        return Inertia::render('user/pages/cart/Cart');
    }
    public function wishlist()
    {
        return Inertia::render('user/pages/wishList/WishList');
    }
}
