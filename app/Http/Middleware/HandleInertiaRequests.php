<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;

/**
 * If your starter kit already has this file, do NOT replace it.
 * Just add the 'flash' entry to its share() method.
 */
class HandleInertiaRequests extends Middleware
{
    protected $rootView = 'app';

    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    public function share(Request $request): array
    {
        return [
            ...parent::share($request),
            // Makes the success message available as usePage().props.flash.success
            'flash' => [
                'success' => fn () => $request->session()->get('success'),
            ],
        ];
    }
}
