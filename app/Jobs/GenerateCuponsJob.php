<?php

namespace App\Jobs;

use App\Models\Reserva;
use App\Models\OfertaPersonalizada;
use Carbon\Carbon;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class GenerateCuponsJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     */
    public function __construct()
    {
        //
    }

    /**
     * Execute the job.
     */
    public function handle()
    {
        // Obtener todas las reservas hechas hace exactamente un año
        $reservas = Reserva::whereDate('fecha_hora', Carbon::now()->subYear()->toDateString())->get();

        foreach ($reservas as $reserva) {
            // Convertir fecha_hora a objeto Carbon
            $fecha_hora = Carbon::parse($reserva->fecha_hora);

            // Verificar si el usuario ya tiene un cupón por esta reserva
            $cuponExistente = OfertaPersonalizada::where('user_id', $reserva->user_id)
                ->where('tipo', 'aniversario')
                ->whereDate('valido_desde', $fecha_hora->toDateString())
                ->exists();

            if (!$cuponExistente) {
                // Crear el cupón
                OfertaPersonalizada::create([
                    'user_id' => $reserva->user_id,
                    'tipo' => 'aniversario',
                    'valor' => 50.00, // Valor del cupón
                    'valido_desde' => Carbon::now(),
                    'valido_hasta' => Carbon::now()->addMonth(),
                    'utilizado' => false,
                ]);
            }
        }
    }
}
