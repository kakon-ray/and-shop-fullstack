@extends('layouts.admin.guest')
@section('content')

    <div className="container">
        <div className="row">
            @if(session()->has('error')) 
    <p className="alert alert-danger small">{{session('error')}}</p>
    @endif

    @if(session()->has('success')) 
    <p className="alert alert-success small text-center">{{session('success')}}</p>
    @endif
    <div className="text-center">
        <h4 className="py-4">Forgot Password?</h4>
        <form method="POST" action="{{ route('admin.password.reset.submit') }}">
            @csrf
           
            <!-- Email Address -->
            <div>
                <x-text-input id="email" className="block mt-1 w-full" type="email" name="email" :value="old('email')" required autofocus autocomplete="username" />
                <x-input-error :messages="$errors->get('email')" className="mt-2" />
            </div>
    
            <div className="flex items-center justify-center mt-4">
                <x-primary-button>
                    Password Reset
                </x-primary-button>
            </div>
        </form>
    </div>
        </div>
    </div>
    @endsection
