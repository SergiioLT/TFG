<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use App\Http\Controllers\MenuController;
use App\Http\Controllers\OfertaController;
use App\Http\Controllers\OpinionController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ReservaController;
use App\Models\Opinion;
use Illuminate\Http\Request;


use Inertia\Inertia;


Route::get('/', function () {
    $opiniones = Opinion::with('user')->get();  // Carga las opiniones y los datos de los usuarios
    return Inertia::render('Inicio', [
        'opiniones' => $opiniones
    ]); // Asegúrate de que 'Welcome' sea el nombre correcto del componente
})->name('Inicio');

Route::get('/inicio', function () {
    $opiniones = Opinion::with('user')->get();  // Carga las opiniones y los datos de los usuarios
    return Inertia::render('Inicio', [
        'opiniones' => $opiniones
    ]);
})->name('Inicio');


Route::get('/ofertas', [OfertaController::class, 'index'])->name('ofertas.index');
Route::post('/utilizar-cupon', [OfertaController::class, 'utilizarCupon']);
Route::post('/share/twitter', [OfertaController::class, 'shareOnTwitter'])->middleware('auth');


Route::get('/Encuentranos', function () {
    return Inertia::render('Encuentranos');
})->name('Encuentranos');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/reservas', [ReservaController::class, 'index'])
    ->name('reservas.index');

Route::post('/reservas', [ReservaController::class, 'store'])->middleware('auth');
Route::delete('/reservas/{reserva}', [ReservaController::class, 'destroy'])->middleware('auth');


Route::get('/menus', [MenuController::class, 'index'])->name('menus.index');

Route::get('/inicio', [OpinionController::class, 'index'])->name('inicio');
Route::post('/inicio', [OpinionController::class, 'store'])->name('opiniones.store');

Route::middleware(['auth'])->group(function () {
    Route::get('/admin-dashboard', [ReservaController::class, 'adminIndex'])->name('admin.dashboard');
    Route::post('/reservas/{reserva}/accept', [ReservaController::class, 'accept'])->name('reservas.accept');
});

require __DIR__ . '/auth.php';
