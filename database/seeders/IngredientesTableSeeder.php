<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;


class IngredientesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('ingredientes')->insert([
            ['nombre' => 'Ribeye'],
            ['nombre' => 'Sal gruesa'],
            ['nombre' => 'Pimienta negra'],
            ['nombre' => 'Aceite de oliva'],
            ['nombre' => 'Costillas de cerdo'],
            ['nombre' => 'Salsa BBQ'],
            ['nombre' => 'Miel'],
            ['nombre' => 'Ajo'],
            ['nombre' => 'Lechuga romana'],
            ['nombre' => 'Tomates cherry'],
            ['nombre' => 'Cebolla roja'],
            ['nombre' => 'Aderezo ranch'],
            ['nombre' => 'Crutones'],
            ['nombre' => 'Huevos'],
            ['nombre' => 'Tortillas de maíz'],
            ['nombre' => 'Salsa de tomate'],
            ['nombre' => 'Chiles verdes'],
            ['nombre' => 'Tocino'],
            ['nombre' => 'Harina de maíz'],
            ['nombre' => 'Leche'],
            ['nombre' => 'Azúcar'],
            ['nombre' => 'Mantequilla'],
            ['nombre' => 'Tira de asado'],
            ['nombre' => 'Chorizo'],
            ['nombre' => 'Morcilla'],
            ['nombre' => 'Pimiento rojo'],
            ['nombre' => 'Pimiento verde'],
            ['nombre' => 'Papas'],
            ['nombre' => 'Romero'],
            ['nombre' => 'Col'],
            ['nombre' => 'Zanahoria'],
            ['nombre' => 'Mayonesa'],
            ['nombre' => 'Vinagre'],
            ['nombre' => 'Piña'],
            ['nombre' => 'Cilantro'],
            ['nombre' => 'Queso cheddar'],
            ['nombre' => 'Jalapeños'],
            ['nombre' => 'Frijoles refritos'],
            ['nombre' => 'Guacamole'],
            ['nombre' => 'Caldo de pollo'],
            ['nombre' => 'Tomate'],
            ['nombre' => 'Aguacate'],
            ['nombre' => 'Queso fresco'],
            ['nombre' => 'Venado'],
            ['nombre' => 'Tomillo'],
            ['nombre' => 'Harina de trigo integral'],
            ['nombre' => 'Levadura'],
            ['nombre' => 'Remolacha'],
            ['nombre' => 'Vinagre balsámico'],
            ['nombre' => 'Whisky'],
            ['nombre' => 'Pimentón'],
            ['nombre' => 'Salsa brava'],
            ['nombre' => 'Cayena'],
            ['nombre' => 'Lentejas'],
            ['nombre' => 'Harina de centeno'],
            ['nombre' => 'Cebolla verde'],
            ['nombre' => 'Mostaza'],
            ['nombre' => 'Perejil'],
            ['nombre' => 'Pechuga de pollo'],
            ['nombre' => 'Sandía'],
            ['nombre' => 'Melón'],
            ['nombre' => 'Uvas'],
            ['nombre' => 'Couscous'],
            ['nombre' => 'Pepinos'],
            ['nombre' => 'Limón'],
            ['nombre' => 'Masa de hojaldre'],
            ['nombre' => 'Queso feta'],
            ['nombre' => 'Nueces'],
            ['nombre' => 'Vino tinto'],
            ['nombre' => 'Laurel'],
            ['nombre' => 'Col rizada']
        ]);
    }
}
