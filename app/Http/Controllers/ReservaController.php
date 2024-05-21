<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Reserva;
use App\Models\OfertaPersonalizada;
use Illuminate\Http\Request;
use Carbon\Carbon;

use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;

class ReservaController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'fecha_hora' => 'required|date',
            'numero_personas' => 'required|integer|min:1',
            'user_id' => 'required|exists:users,id',
        ]);

        // Contar las reservas pendientes del usuario
        $reservasPendientesCount = Reserva::where('user_id', $request->user_id)
            ->where('estado', 'pendiente')
            ->count();

        if ($reservasPendientesCount >= 2) {
            return back()->with('error', 'Has alcanzado el máximo de reservas pendientes.');
        }

        $reserva = new Reserva();
        $reserva->fecha_hora = $request->fecha_hora;
        $reserva->numero_personas = $request->numero_personas;
        $reserva->user_id = $request->user_id;
        $reserva->estado = 'pendiente';
        $reserva->save();

        $this->verificarYGenerarCuponDeReservas($request->user_id);

        return redirect()->route('reservas.index')->with('success', 'Reserva realizada con éxito.');
    }

    public function index(Request $request)
    {
        $userReservas = [];
        if ($request->user()) {
            $userReservas = $request->user()->reservas()
                ->where('estado', 'pendiente')  // Filtrar por estado pendiente
                ->get();
        }

        return Inertia::render('Reservas', [
            'reservas' => $userReservas,
            'existing_reserva' => session('existing_reserva'),
            'message' => session('message'),
            'conflict' => session('conflict'),
        ]);
    }

    public function destroy($id)
    {
        $reserva = Reserva::find($id);

        if ($reserva->user_id !== auth()->id()) {
            abort(403);
        }

        $reserva->delete();

        return redirect()->back()->with('message', 'Reserva cancelada con éxito.');
    }

    protected function verificarYGenerarCuponDeReservas($userId)
    {
        $cantidadNecesaria = 5; // Define cuántas reservas son necesarias para un cupón
        $reservasNoUtilizadas = Reserva::where('user_id', $userId)
            ->where('utilizado', false)
            ->where('estado', 'aceptado')  // Contar solo reservas aceptadas
            ->get();

        $totalReservasNoUtilizadas = $reservasNoUtilizadas->count();

        if ($totalReservasNoUtilizadas >= $cantidadNecesaria) {
            // Generar cupón
            OfertaPersonalizada::create([
                'user_id' => $userId,
                'tipo' => 'reserva',
                'valor' => 10.00, // Ajusta el valor según necesites
                'valido_desde' => Carbon::now(),
                'valido_hasta' => Carbon::now()->addDays(30), // Válidos por 30 días
                'utilizado' => false
            ]);

            // Marcar las reservas utilizadas para el cupón
            $reservasNoUtilizadas->take($cantidadNecesaria)->each(function ($reserva) {
                $reserva->utilizado = true;
                $reserva->save();
            });
        }
    }

    public function adminIndex()
    {
        $reservas = Reserva::with('user')->get();  // Obtener todas las reservas junto con la información del usuario
        return Inertia::render('AdminDashboard', [
            'reservas' => $reservas
        ]);
    }

    public function accept(Reserva $reserva)
    {
        $reserva->estado = 'aceptado';
        $reserva->save();

        return redirect()->back()->with('success', 'Reserva aceptada.');
    }
}
