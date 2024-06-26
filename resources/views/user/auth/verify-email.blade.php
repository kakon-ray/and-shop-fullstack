@extends('layouts.user.guest')
@section('content')

    <div className="mb-4 text-sm text-center text-gray-600 dark:text-gray-400">
        {{ __('লগিন করতে আপনকে ইমেইল ভেরিফিকেশন করতে হবে। ইমেইল ভেরিফিকেশন লিংক অলরেডি পাঠানো হয়েছে । আপনার ইমেইল চেক করুন।') }}
    </div>

    @if (session('status') == 'verification-link-sent')
        <div className="mb-4 font-medium text-sm text-green-600 dark:text-green-400">
            {{ __('A new verification link has been sent to the email address you provided during registration.') }}
        </div>
    @endif

    <div className="mt-4 flex items-center justify-between">
        <form method="POST" action="{{ route('verification.send') }}">
            @csrf

            <div>
                <x-primary-button>
                    {{ __('Resend Verification Email') }}
                </x-primary-button>
            </div>
        </form>

        <form method="POST" action="{{ route('logout') }}">
            @csrf

            <button type="submit" className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800">
                {{ __('Log Out') }}
            </button>
        </form>
    </div>
    @endsection
