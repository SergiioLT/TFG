<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;


class AlergenosTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('alergenos')->insert([
            ['nombre' => 'Gluten'],
            ['nombre' => 'Lácteos'],
            ['nombre' => 'Huevos'],
            ['nombre' => 'Nueces']
        ]);
    }
}
