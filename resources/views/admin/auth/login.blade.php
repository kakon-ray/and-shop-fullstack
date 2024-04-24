@extends('layouts.admin.guest')
@section('content')

    @if(session()->has('error')) 
    <p className="alert alert-danger small">{{session('error')}}</p>
    @endif

    <form method="POST" id="submitloginform" action="{{ route('admin.login') }}">
        @csrf

        <!-- Email Address -->
        <div>
            <x-input-label for="email" :value="__('Email')" />
            <x-text-input id="email" className="block mt-1 w-full" type="email" name="email" :value="old('email')" required autofocus autocomplete="username" />
            <x-input-error :messages="$errors->get('email')" className="mt-2" />
        </div>

        <!-- Password -->
        <div className="mt-4">
            <x-input-label for="password" :value="__('Password')" />

            <x-text-input id="password" className="block mt-1 w-full"
                            type="password"
                            name="password"
                            required autocomplete="current-password" />

            <x-input-error :messages="$errors->get('password')" className="mt-2" />
        </div>

        <!-- Remember Me -->
        <div className="block mt-4">
            <label for="remember_me" className="inline-flex items-center">
                <input id="remember_me" type="checkbox" className="rounded dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-indigo-600 shadow-sm focus:ring-indigo-500 dark:focus:ring-indigo-600 dark:focus:ring-offset-gray-800" name="remember">
                <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">{{ __('Remember me') }}</span>
            </label>
        </div>

        <div className="flex items-center justify-end mt-4">
            @if (Route::has('admin.password.reset'))
                <a className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800" href="{{ route('admin.password.reset') }}">
                    Forgot your password?
                </a>
            @endif

            <x-primary-button className="ml-3">
                {{ __('Log in') }}
            </x-primary-button>
        </div>
    </form>
    @endsection
