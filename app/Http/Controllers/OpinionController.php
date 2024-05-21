<?php

namespace App\Http\Controllers;

use App\Models\Opinion;
use App\Models\OfertaPersonalizada;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Carbon\Carbon;



class OpinionController extends Controller
{
    public function index()
    {
        $opiniones = Opinion::with('user')->get();
        return Inertia::render('Inicio', ['opiniones' => $opiniones]); // Asegúrate de que el nombre del componente sea el correcto
    }

    public function store(Request $request)
    {
        $request->validate([
            'puntuacion' => 'required|integer|between:0,5',
            'mensaje' => 'required|string'
        ]);

        $opinion = new Opinion();
        $opinion->user_id = auth()->user()->id;
        $opinion->puntuacion = $request->puntuacion;
        $opinion->mensaje = $request->mensaje;
        $opinion->fecha_hora = now();
        $opinion->save();

        $this->generarCuponPorOpinion(auth()->user()->id);

        return redirect()->route('inicio')->with('success', 'Opinión guardada correctamente!');
    }

    protected function generarCuponPorOpinion($userId)
    {
        $inicioMes = Carbon::now()->startOfMonth();
        $finMes = Carbon::now()->endOfMonth();

        $cuponExistente = OfertaPersonalizada::where('user_id', $userId)
            ->where('tipo', 'reseña')
            ->whereBetween('valido_desde', [$inicioMes, $finMes])
            ->first();

        if (!$cuponExistente) {
            OfertaPersonalizada::create([
                'user_id' => $userId,
                'tipo' => 'reseña',
                'valor' => 5.00,
                'valido_desde' => $inicioMes,
                'valido_hasta' => $finMes,
                'utilizado' => false
            ]);
        }
    }
}
