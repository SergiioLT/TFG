<?php

namespace App\Http\Controllers;

use App\Models\Oferta;
use App\Models\Reserva;
use App\Models\OfertaPersonalizada;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Carbon\Carbon;

class OfertaController extends Controller
{
    public function index()
    {
        $ofertas = Oferta::all();
        $ofertasPersonalizadas = OfertaPersonalizada::where('user_id', Auth::id())->get();

        // Contar las reservas no utilizadas
        $reservasNoUtilizadas = Reserva::where('user_id', Auth::id())
            ->where('utilizado', false)
            ->where('estado', 'aceptado')
            ->count();

        return Inertia::render('Ofertas', [
            'ofertas' => $ofertas,
            'ofertasPersonalizadas' => $ofertasPersonalizadas,
            'reservasNoUtilizadas' => $reservasNoUtilizadas,
        ]);
    }

    public function utilizarCupon(Request $request)
    {
        $cupon = OfertaPersonalizada::find($request->id);

        if ($cupon && !$cupon->utilizado) {
            $cupon->utilizado = true;
            $cupon->save();
        }

        return redirect()->back();
    }
}
