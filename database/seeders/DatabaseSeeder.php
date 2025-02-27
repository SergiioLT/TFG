<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();


        User::factory()->create([
            'name' => 'Admin User',
            'email' => 'admin@test.com',
            'password' => Hash::make('123'),
        ]);

        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);

        User::factory()->create([
            'name' => 'Sergio Lucena',
            'email' => 'test@test.com',
            'password' => Hash::make('123'),
        ]);
        User::factory()->create([
            'name' => 'Manu Casas',
            'email' => 'aniversario@test.com',
            'password' => Hash::make('123'),
        ]);
        User::factory()->create([
            'name' => 'Angel Ortiz',
            'email' => 'reserva@test.com',
            'password' => Hash::make('123'),
        ]);
        User::factory()->create([
            'name' => 'Eliza Tellez',
            'email' => 'vuelta@test.com',
            'password' => Hash::make('123'),
        ]);

        $this->call(MenusTableSeeder::class);
        $this->call(PlatosTableSeeder::class);
        $this->call(IngredientesTableSeeder::class);
        $this->call(AlergenosTableSeeder::class);
        $this->call(PlatoIngredientesTableSeeder::class);
        $this->call(IngredienteAlergenosTableSeeder::class);
        $this->call(OfertasTableSeeder::class);
    }
}
