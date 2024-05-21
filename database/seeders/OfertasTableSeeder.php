<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class OfertasTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $ofertas = [
            [
                'titulo' => '2x1 en Filete de Ribeye al Grill',
                'descripcion' => 'Compra un Filete de Ribeye al Grill y obtén otro gratis.',
                'tipo_oferta' => 'flash',
                'valor' => 50.00, // Representa el 2x1 como un 50% de valor si compras dos
                'fecha_inicio' => Carbon::now(),
                'fecha_fin' => Carbon::now()->addDays(10),
            ],
            [
                'titulo' => 'descuento del Fin de Semana en Banquete del Sheriff',
                'descripcion' => 'descuento del 15% en el Banquete del Sheriff durante el fin de semana.',
                'tipo_oferta' => 'flash',
                'valor' => 15.00,
                'fecha_inicio' => Carbon::parse('next Friday'),
                'fecha_fin' => Carbon::parse('next Sunday')->endOfDay(),
            ],
            [
                'titulo' => 'Comprar 2 Hamburguesas Clásicas, 10% valor',
                'descripcion' => 'Compra dos Hamburguesas Clásicas y obtén un 10% de valor.',
                'tipo_oferta' => 'flash',
                'valor' => 10.00,
                'fecha_inicio' => Carbon::now(),
                'fecha_fin' => Carbon::now()->addDays(15),
            ],
            [
                'titulo' => 'Desayuno del Pistolero a 12.99',
                'descripcion' => 'Disfruta del Desayuno del Pistolero por solo 12.99.',
                'tipo_oferta' => 'flash',
                'valor' => 13.34, // valor para ajustar el precio a 12.99
                'fecha_inicio' => Carbon::now(),
                'fecha_fin' => Carbon::now()->addDays(30),
            ],
            [
                'titulo' => 'Oferta Especial de Sushi Variado',
                'descripcion' => 'valor del 20% en el Sushi Variado los miércoles.',
                'tipo_oferta' => 'flash',
                'valor' => 20.00,
                'fecha_inicio' => Carbon::parse('next Wednesday'),
                'fecha_fin' => Carbon::parse('next Wednesday')->endOfDay()->addWeeks(4),
            ],
            [
                'titulo' => 'Asado del Vaquero a 20.99',
                'descripcion' => 'Disfruta del Asado del Vaquero por solo 20.99.',
                'tipo_oferta' => 'flash',
                'valor' => 16.00, // valor para ajustar el precio a 20.99
                'fecha_inicio' => Carbon::now(),
                'fecha_fin' => Carbon::now()->addDays(30),
            ],
            [
                'titulo' => 'Fiesta de la Frontera con 10% descuento',
                'descripcion' => 'Obtén un 10% de descuento en la Fiesta de la Frontera.',
                'tipo_oferta' => 'flash',
                'valor' => 10.00,
                'fecha_inicio' => Carbon::now(),
                'fecha_fin' => Carbon::now()->addMonths(1),
            ],
            [
                'titulo' => 'Cena de la Caravana a 18.99',
                'descripcion' => 'Disfruta de la Cena de la Caravana por solo 18.99.',
                'tipo_oferta' => 'flash',
                'valor' => 13.65, // valor para ajustar el precio a 18.99
                'fecha_inicio' => Carbon::now(),
                'fecha_fin' => Carbon::now()->addDays(30),
            ],
            [
                'titulo' => 'Noche en el Saloon con 20% descuento',
                'descripcion' => 'Obtén un 20% de descuento en Noche en el Saloon.',
                'tipo_oferta' => 'flash',
                'valor' => 20.00,
                'fecha_inicio' => Carbon::parse('next Friday'),
                'fecha_fin' => Carbon::parse('next Saturday')->endOfDay()->addWeeks(4),
            ],
            [
                'titulo' => 'Olla del Minero a 12.99',
                'descripcion' => 'Disfruta de la Olla del Minero por solo 12.99.',
                'tipo_oferta' => 'flash',
                'valor' => 18.76, // valor para ajustar el precio a 12.99
                'fecha_inicio' => Carbon::now(),
                'fecha_fin' => Carbon::now()->addMonths(2),
            ],
            [
                'titulo' => 'Picnic del Desierto con 15% descuento',
                'descripcion' => 'Obtén un 15% de descuento en el Picnic del Desierto.',
                'tipo_oferta' => 'flash',
                'valor' => 15.00,
                'fecha_inicio' => Carbon::now(),
                'fecha_fin' => Carbon::now()->addMonths(1),
            ],
            [
                'titulo' => 'Cosecha del Granjero a 19.99',
                'descripcion' => 'Disfruta de la Cosecha del Granjero por solo 19.99.',
                'tipo_oferta' => 'flash',
                'valor' => 16.68, // valor para ajustar el precio a 19.99
                'fecha_inicio' => Carbon::now(),
                'fecha_fin' => Carbon::now()->addMonths(2),
            ],
            [
                'titulo' => 'Guiso del Trampero con 10% descuento',
                'descripcion' => 'Obtén un 10% de descuento en el Guiso del Trampero.',
                'tipo_oferta' => 'flash',
                'valor' => 10.00,
                'fecha_inicio' => Carbon::now(),
                'fecha_fin' => Carbon::now()->addMonths(1),
            ],
            [
                'titulo' => 'Desayuno del Pistolero a 12.99',
                'descripcion' => 'Disfruta del Desayuno del Pistolero por solo 12.99.',
                'tipo_oferta' => 'flash',
                'valor' => 13.34, // valor para ajustar el precio a 12.99
                'fecha_inicio' => Carbon::now(),
                'fecha_fin' => Carbon::now()->addDays(30),
            ],
            [
                'titulo' => 'Banquete del Sheriff con 15% descuento',
                'descripcion' => 'Obtén un 15% de descuento en el Banquete del Sheriff.',
                'tipo_oferta' => 'flash',
                'valor' => 15.00,
                'fecha_inicio' => Carbon::now(),
                'fecha_fin' => Carbon::now()->addMonths(1),
            ],
            [
                'titulo' => 'Fiesta de la Frontera a 16.99',
                'descripcion' => 'Disfruta de la Fiesta de la Frontera por solo 16.99.',
                'tipo_oferta' => 'flash',
                'valor' => 15.01, // valor para ajustar el precio a 16.99
                'fecha_inicio' => Carbon::now(),
                'fecha_fin' => Carbon::now()->addMonths(2),
            ],
        ];

        DB::table('ofertas')->insert($ofertas);
    }
}
