<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;


class PlatoIngredientesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('plato_ingredientes')->insert([
            // Banquete del SHeriff
            ['plato_id' => 1, 'ingrediente_id' => 1],
            ['plato_id' => 1, 'ingrediente_id' => 2],
            ['plato_id' => 1, 'ingrediente_id' => 3],
            ['plato_id' => 1, 'ingrediente_id' => 4],
            ['plato_id' => 2, 'ingrediente_id' => 5],
            ['plato_id' => 2, 'ingrediente_id' => 6],
            ['plato_id' => 2, 'ingrediente_id' => 7],
            ['plato_id' => 2, 'ingrediente_id' => 8],
            ['plato_id' => 3, 'ingrediente_id' => 9],
            ['plato_id' => 3, 'ingrediente_id' => 10],
            ['plato_id' => 3, 'ingrediente_id' => 11],
            ['plato_id' => 3, 'ingrediente_id' => 12],
            ['plato_id' => 3, 'ingrediente_id' => 13],
            // Desayuno del vaquero
            ['plato_id' => 4, 'ingrediente_id' => 14],
            ['plato_id' => 4, 'ingrediente_id' => 15],
            ['plato_id' => 4, 'ingrediente_id' => 16],
            ['plato_id' => 5, 'ingrediente_id' => 18],
            ['plato_id' => 6, 'ingrediente_id' => 19],
            ['plato_id' => 6, 'ingrediente_id' => 20],
            ['plato_id' => 6, 'ingrediente_id' => 21],
            ['plato_id' => 6, 'ingrediente_id' => 22],
            // Asado del Vaquero
            ['plato_id' => 7, 'ingrediente_id' => 23], // Parrillada Mixta - Tira de asado
            ['plato_id' => 7, 'ingrediente_id' => 24], // Parrillada Mixta - Chorizo
            ['plato_id' => 7, 'ingrediente_id' => 25], // Parrillada Mixta - Morcilla
            ['plato_id' => 7, 'ingrediente_id' => 26], // Parrillada Mixta - Pimiento rojo
            ['plato_id' => 7, 'ingrediente_id' => 27], // Parrillada Mixta - Pimiento verde
            ['plato_id' => 8, 'ingrediente_id' => 28], // Papas al Romero - Papas
            ['plato_id' => 8, 'ingrediente_id' => 29], // Papas al Romero - Romero
            ['plato_id' => 9, 'ingrediente_id' => 30], // Ensalada Coleslaw - Col
            ['plato_id' => 9, 'ingrediente_id' => 31], // Ensalada Coleslaw - Zanahoria
            ['plato_id' => 9, 'ingrediente_id' => 32], // Ensalada Coleslaw - Mayonesa
            // Fiesta de la Frontera
            ['plato_id' => 10, 'ingrediente_id' => 5],  // Tacos al Pastor - Costillas de cerdo
            ['plato_id' => 10, 'ingrediente_id' => 36], // Tacos al Pastor - Piña
            ['plato_id' => 10, 'ingrediente_id' => 15], // Tacos al Pastor - Tortillas de maíz
            ['plato_id' => 10, 'ingrediente_id' => 38], // Tacos al Pastor - Cilantro
            ['plato_id' => 11, 'ingrediente_id' => 15], // Nachos Supremos - Tortillas de maíz
            ['plato_id' => 11, 'ingrediente_id' => 39], // Nachos Supremos - Queso cheddar
            ['plato_id' => 11, 'ingrediente_id' => 40], // Nachos Supremos - Jalapeños
            ['plato_id' => 11, 'ingrediente_id' => 41], // Nachos Supremos - Frijoles refritos
            ['plato_id' => 11, 'ingrediente_id' => 42], // Nachos Supremos - Guacamole
            ['plato_id' => 12, 'ingrediente_id' => 44], // Sopa de Tortilla - Caldo de pollo
            ['plato_id' => 12, 'ingrediente_id' => 45], // Sopa de Tortilla - Tomate
            ['plato_id' => 12, 'ingrediente_id' => 15], // Sopa de Tortilla - Tortillas de maíz
            ['plato_id' => 12, 'ingrediente_id' => 46], // Sopa de Tortilla - Aguacate
            ['plato_id' => 12, 'ingrediente_id' => 47],  // Sopa de Tortilla - Queso fresco
            // Menú 5: Cena de la Caravana
            ['plato_id' => 13, 'ingrediente_id' => 49], // Guiso de Venado - Venado
            ['plato_id' => 13, 'ingrediente_id' => 2],  // Guiso de Venado - Sal gruesa
            ['plato_id' => 13, 'ingrediente_id' => 3],  // Guiso de Venado - Pimienta negra
            ['plato_id' => 13, 'ingrediente_id' => 4],  // Guiso de Venado - Aceite de oliva
            ['plato_id' => 13, 'ingrediente_id' => 29], // Guiso de Venado - Papas
            ['plato_id' => 13, 'ingrediente_id' => 31], // Guiso de Venado - Zanahoria
            ['plato_id' => 13, 'ingrediente_id' => 50], // Guiso de Venado - Tomillo
            ['plato_id' => 14, 'ingrediente_id' => 52], // Pan de Trigo Integral - Harina de trigo integral
            ['plato_id' => 14, 'ingrediente_id' => 53], // Pan de Trigo Integral - Levadura
            ['plato_id' => 14, 'ingrediente_id' => 21], // Pan de Trigo Integral - Agua
            ['plato_id' => 15, 'ingrediente_id' => 54], // Ensalada de Raíces - Remolacha
            ['plato_id' => 15, 'ingrediente_id' => 31], // Ensalada de Raíces - Zanahoria
            ['plato_id' => 15, 'ingrediente_id' => 4],  // Ensalada de Raíces - Aceite de oliva
            ['plato_id' => 15, 'ingrediente_id' => 55], // Ensalada de Raíces - Vinagre balsámico

            // Menú 6: Noche en el Saloon
            ['plato_id' => 16, 'ingrediente_id' => 19], // Alitas de Pollo al Whisky - Miel
            ['plato_id' => 16, 'ingrediente_id' => 8],  // Alitas de Pollo al Whisky - Ajo
            ['plato_id' => 16, 'ingrediente_id' => 56], // Alitas de Pollo al Whisky - Whisky
            ['plato_id' => 16, 'ingrediente_id' => 57], // Alitas de Pollo al Whisky - Pimentón
            ['plato_id' => 17, 'ingrediente_id' => 28], // Patatas Bravas - Papas
            ['plato_id' => 17, 'ingrediente_id' => 4],  // Patatas Bravas - Aceite de oliva
            ['plato_id' => 17, 'ingrediente_id' => 58], // Patatas Bravas - Salsa brava
            ['plato_id' => 18, 'ingrediente_id' => 37], // Dip de Frijoles con Nachos - Frijoles negros
            ['plato_id' => 18, 'ingrediente_id' => 36], // Dip de Frijoles con Nachos - Crema agria
            ['plato_id' => 18, 'ingrediente_id' => 35], // Dip de Frijoles con Nachos - Jalapeños
            ['plato_id' => 18, 'ingrediente_id' => 15],  // Dip de Frijoles con Nachos - Tortillas de maíz

            // Menú 7: Olla del mienro
            ['plato_id' => 19, 'ingrediente_id' => 54], // Guiso de Lentejas - Lentejas
            ['plato_id' => 19, 'ingrediente_id' => 18], // Guiso de Lentejas - Tocino
            ['plato_id' => 19, 'ingrediente_id' => 31], // Guiso de Lentejas - Zanahoria
            ['plato_id' => 19, 'ingrediente_id' => 11], // Guiso de Lentejas - Cebolla roja
            ['plato_id' => 19, 'ingrediente_id' => 8],  // Guiso de Lentejas - Ajo
            ['plato_id' => 19, 'ingrediente_id' => 41], // Guiso de Lentejas - Tomate

            ['plato_id' => 20, 'ingrediente_id' => 55], // Pan de Centeno - Harina de centeno
            ['plato_id' => 20, 'ingrediente_id' => 65], // Pan de Centeno - Agua
            ['plato_id' => 20, 'ingrediente_id' => 47], // Pan de Centeno - Levadura
            ['plato_id' => 20, 'ingrediente_id' => 3],  // Pan de Centeno - Sal gruesa

            ['plato_id' => 21, 'ingrediente_id' => 28], // Ensalada de Papa - Papas
            ['plato_id' => 21, 'ingrediente_id' => 32], // Ensalada de Papa - Mayonesa
            ['plato_id' => 21, 'ingrediente_id' => 56], // Ensalada de Papa - Cebolla verde
            ['plato_id' => 21, 'ingrediente_id' => 57], // Ensalada de Papa - Mostaza
            ['plato_id' => 21, 'ingrediente_id' => 70], // Ensalada de Papa - Perejil

            // Menú 8: Picnic del Desierto
            ['plato_id' => 22, 'ingrediente_id' => 64], // Sándwich de Pollo - Pan integral
            ['plato_id' => 22, 'ingrediente_id' => 59], // Sándwich de Pollo - Pechuga de pollo
            ['plato_id' => 22, 'ingrediente_id' => 9],  // Sándwich de Pollo - Lechuga
            ['plato_id' => 22, 'ingrediente_id' => 41], // Sándwich de Pollo - Tomate
            ['plato_id' => 22, 'ingrediente_id' => 32], // Sándwich de Pollo - Mayonesa

            ['plato_id' => 23, 'ingrediente_id' => 60], // Frutas Frescas Mixtas - Sandía
            ['plato_id' => 23, 'ingrediente_id' => 61], // Frutas Frescas Mixtas - Melón
            ['plato_id' => 23, 'ingrediente_id' => 62], // Frutas Frescas Mixtas - Uvas

            ['plato_id' => 24, 'ingrediente_id' => 63], // Ensalada de Couscous - Couscous
            ['plato_id' => 24, 'ingrediente_id' => 64], // Ensalada de Couscous - Pepinos
            ['plato_id' => 24, 'ingrediente_id' => 10], // Ensalada de Couscous - Tomates cherry
            ['plato_id' => 24, 'ingrediente_id' => 4],  // Ensalada de Couscous - Aceite de oliva
            ['plato_id' => 24, 'ingrediente_id' => 65], // Ensalada de Couscous - Limón

            // Menú 9: Cosecha del granjero
            ['plato_id' => 25, 'ingrediente_id' => 66], // Tarta de Verduras - Masa de hojaldre
            ['plato_id' => 25, 'ingrediente_id' => 48], // Tarta de Verduras - Espinacas
            ['plato_id' => 25, 'ingrediente_id' => 26], // Tarta de Verduras - Pimiento rojo
            ['plato_id' => 25, 'ingrediente_id' => 11], // Tarta de Verduras - Cebolla roja
            ['plato_id' => 25, 'ingrediente_id' => 14], // Tarta de Verduras - Huevos
            ['plato_id' => 25, 'ingrediente_id' => 67], // Tarta de Verduras - Queso feta

            ['plato_id' => 26, 'ingrediente_id' => 48], // Sopa de Calabaza - Calabaza
            ['plato_id' => 26, 'ingrediente_id' => 11], // Sopa de Calabaza - Cebolla roja
            ['plato_id' => 26, 'ingrediente_id' => 20], // Sopa de Calabaza - Crema
            ['plato_id' => 26, 'ingrediente_id' => 40], // Sopa de Calabaza - Caldo de verduras
            ['plato_id' => 26, 'ingrediente_id' => 57], // Sopa de Calabaza - Mostaza

            ['plato_id' => 27, 'ingrediente_id' => 48], // Ensalada de Remolacha y Queso de Cabra - Remolacha
            ['plato_id' => 27, 'ingrediente_id' => 67], // Ensalada de Remolacha y Queso de Cabra - Queso de cabra
            ['plato_id' => 27, 'ingrediente_id' => 68], // Ensalada de Remolacha y Queso de Cabra - Nueces
            ['plato_id' => 27, 'ingrediente_id' => 9],  // Ensalada de Remolacha y Queso de Cabra - Lechugas mixtas
            ['plato_id' => 27, 'ingrediente_id' => 49], // Ensalada de Remolacha y Queso de Cabra - Vinagre balsámico

            // Menú 10: Guiso del Trampero
            ['plato_id' => 28, 'ingrediente_id' => 44], // Guiso de Ciervo - Carne de ciervo
            ['plato_id' => 28, 'ingrediente_id' => 28], // Guiso de Ciervo - Papas
            ['plato_id' => 28, 'ingrediente_id' => 31], // Guiso de Ciervo - Zanahorias
            ['plato_id' => 28, 'ingrediente_id' => 11], // Guiso de Ciervo - Cebollas
            ['plato_id' => 28, 'ingrediente_id' => 69], // Guiso de Ciervo - Vino tinto
            ['plato_id' => 28, 'ingrediente_id' => 70], // Guiso de Ciervo - Laurel

            ['plato_id' => 29, 'ingrediente_id' => 46], // Pan de Ajo Rústico - Harina
            ['plato_id' => 29, 'ingrediente_id' => 8],  // Pan de Ajo Rústico - Ajo
            ['plato_id' => 29, 'ingrediente_id' => 58], // Pan de Ajo Rústico - Perejil
            ['plato_id' => 29, 'ingrediente_id' => 22], // Pan de Ajo Rústico - Mantequilla

            ['plato_id' => 30, 'ingrediente_id' => 71], // Ensalada de Col Rizada - Col rizada
            ['plato_id' => 30, 'ingrediente_id' => 68], // Ensalada de Col Rizada - Almendras
            ['plato_id' => 30, 'ingrediente_id' => 43], // Ensalada de Col Rizada - Queso parmesano
            ['plato_id' => 30, 'ingrediente_id' => 65], // Ensalada de Col Rizada - Limón
            ['plato_id' => 30, 'ingrediente_id' => 4],  // Ensalada de Col Rizada - Aceite de oliva

        ]);
    }
}
