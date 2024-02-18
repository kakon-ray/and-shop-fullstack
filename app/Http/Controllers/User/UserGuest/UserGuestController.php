<?php

namespace App\Http\Controllers\User\UserGuest;

use App\Http\Controllers\Controller;
use App\Models\Laptop;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Session;


class UserGuestController extends Controller
{
    public function home()
    {
        return Inertia::render('user/pages/home/Home');
    }
    public function shop()
    {
        return Inertia::render('user/pages/shop/Shop');
    }

}
