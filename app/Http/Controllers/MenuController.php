<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Menu;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;


class MenuController extends Controller
{
    public function index(Request $request)
    {
        $category = $request->input('category', 'desayunos'); // Valor por defecto 'desayuno' si no se proporciona 'category'
        $menus = Menu::with(['platos.ingredientes.alergenos'])->get();
        return Inertia::render('Productos', ['menus' => $menus, 'category' => $category]);
    }
}
