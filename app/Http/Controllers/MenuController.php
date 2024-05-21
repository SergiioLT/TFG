<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Menu;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;


class MenuController extends Controller
{
    public function index()
    {
        $menus = Menu::with(['platos.ingredientes.alergenos'])->get();
        Log::debug('Menus data:', $menus->toArray());
        return Inertia::render('Productos', ['menus' => $menus]);
    }
}
