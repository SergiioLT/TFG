<?php

namespace App\Http\Controllers;

use App\Models\Oferta;
use App\Models\Reserva;
use App\Models\OfertaPersonalizada;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Carbon\Carbon;
use GuzzleHttp\Psr7\Message;

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

    public function shareOnTwitter(Request $request)
    {
        $user = Auth::user();

        $lastShareOffer = OfertaPersonalizada::where('user_id', $user->id)
            ->where('tipo', 'compartir')
            ->where('created_at', '>=', Carbon::now()->subMonth())
            ->first();

        if (!$lastShareOffer) {
            // Generar una oferta personalizada de tipo "compartir"
            $oferta = OfertaPersonalizada::create([
                'user_id' => $user->id,
                'tipo' => 'compartir',
                'valor' => 20.00, // Ejemplo de valor de la oferta
                'valido_desde' => Carbon::now(),
                'valido_hasta' => Carbon::now()->addDays(7),
                'utilizado' => false,
            ]);
        }

        $pageUrl = url('/');

        $tweetText = "Visita nuestro restaurante y disfruta de ofertas especiales: " . $pageUrl;
        $twitterUrl = "https://twitter.com/intent/tweet?text=" . urlencode($tweetText);

        // Guardar en la sesión
        $request->session()->put('twitter_url', $twitterUrl);

        // Redirigir a una ruta que maneja la apertura de la URL
        return response()->json(['twitterUrl' => $twitterUrl]);
    }
}
