<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;


class IngredienteAlergenosTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('ingrediente_alergenos')->insert([
            ['ingrediente_id' => 13, 'alergeno_id' => 1],  // Crutones - Gluten
            ['ingrediente_id' => 46, 'alergeno_id' => 1],  // Harina de trigo integral - Gluten
            ['ingrediente_id' => 55, 'alergeno_id' => 1],  // Harina de centeno - Gluten
            ['ingrediente_id' => 66, 'alergeno_id' => 1],  // Masa de hojaldre - Gluten
            ['ingrediente_id' => 63, 'alergeno_id' => 1],  // Couscous - Gluten
            ['ingrediente_id' => 20, 'alergeno_id' => 2],  // Leche - Lácteos
            ['ingrediente_id' => 22, 'alergeno_id' => 2],  // Mantequilla - Lácteos
            ['ingrediente_id' => 36, 'alergeno_id' => 2],  // Queso cheddar - Lácteos
            ['ingrediente_id' => 43, 'alergeno_id' => 2],  // Queso fresco - Lácteos
            ['ingrediente_id' => 67, 'alergeno_id' => 2],  // Queso feta - Lácteos
            ['ingrediente_id' => 14, 'alergeno_id' => 3],  // Huevos - Huevos
            ['ingrediente_id' => 32, 'alergeno_id' => 3],  // Mayonesa - Huevos
            ['ingrediente_id' => 68, 'alergeno_id' => 4]   // Nueces - Nueces (nuevo alérgeno si necesario)
        ]);
    }
}
