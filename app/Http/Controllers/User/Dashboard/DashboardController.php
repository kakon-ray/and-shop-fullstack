<?php

namespace App\Http\Controllers\User\Dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{

    // user general auth page

    public function cart()
    {
        return Inertia::render('user/pages/cart/Cart');
    }
    public function wishlist()
    {
        return Inertia::render('user/pages/wishList/WishList');
    }



    // User Dashboard Page

    public function dashboard()
    {
        return Inertia::render('user/dashboard/Dashboard/Dashboard');
    }
    public function cartlist()
    {
        return Inertia::render('user/dashboard/CartList/CartList');
    }
}
