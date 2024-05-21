<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     *
     * @return string|null
     */
    public function version(Request $request): ?string
    {
        return parent::version($request) ?: md5_file(public_path('build/manifest.json'));
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return array_merge(parent::share($request), [
            'auth' => [
                'user' => $request->user(),
            ],
            'flash' => function () use ($request) {
                return [
                    'success' => $request->session()->get('success'),
                    'existing_reserva' => $request->session()->get('existing_reserva'),
                    'message' => $request->session()->get('message'),
                    'conflict' => $request->session()->get('conflict'),
                    'error' => $request->session()->get('error'),
                ];
            },
        ]);
    }
}
