<?php

namespace App\Http\Controllers\Admin\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Response;
use Inertia\Inertia;

use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Session;
class LoginController extends Controller
{
    public function create(){
        return Inertia::render('admin/pages/Auth/Login');
    }
    public function dashboard(){
        return view('admin.dashboard.dashboard');
    }

    public function store(Request $request){

        // dd($request->all());
        $request->validate([
            'email' => 'required',
            'password' => 'required',
        ]);

        if(Auth::guard('admin')->attempt(['email'=>$request->email,'password'=>$request->password])){
            
            Session::flash('success', 'Login Successed');
            return Redirect::back();
        }else{
            // return back()->with('error','Invalid Username and Passsword');
            $arr = array('status'=>400,'msg'=>'Login Faild');
            return response()->json($arr);
            
        }

    }
    public function logout(Request $request){
        Auth::guard('admin')->logout();
        return redirect('admin/login');
    }
}
