<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;


class PlatosTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('platos')->insert([
            ['menu_id' => 1, 'nombre' => 'Filete de Ribeye al Grill', 'descripcion' => 'Ribeye jugoso sazonado con sal gruesa y pimienta negra, cocinado al grill.', 'precio' => 22.00],
            ['menu_id' => 1, 'nombre' => 'Costillas BBQ', 'descripcion' => 'Costillas de cerdo bañadas en salsa BBQ casera, miel y ajo.', 'precio' => 18.00],
            ['menu_id' => 1, 'nombre' => 'Ensalada de la Casa', 'descripcion' => 'Lechuga romana con tomates cherry, cebolla roja y aderezo ranch.', 'precio' => 10.00],
            ['menu_id' => 2, 'nombre' => 'Huevos Rancheros', 'descripcion' => 'Huevos fritos sobre tortillas de maíz con salsa de tomate fresca.', 'precio' => 7.50],
            ['menu_id' => 2, 'nombre' => 'Tocino Crispante', 'descripcion' => 'Tiras de tocino crujiente perfectamente cocinado.', 'precio' => 5.00],
            ['menu_id' => 2, 'nombre' => 'Pan de Maíz Casero', 'descripcion' => 'Pan de maíz dulce hecho en casa, servido caliente.', 'precio' => 3.00],
            ['menu_id' => 3, 'nombre' => 'Parrillada Mixta', 'descripcion' => 'Selección de carnes a la parrilla con pimientos asados.', 'precio' => 18.00],
            ['menu_id' => 3, 'nombre' => 'Papas al Romero', 'descripcion' => 'Papas asadas con romero, aceite de oliva y sal.', 'precio' => 5.00],
            ['menu_id' => 3, 'nombre' => 'Ensalada Coleslaw', 'descripcion' => 'Ensalada fresca de col y zanahoria con un aderezo cremoso.', 'precio' => 4.00],
            ['menu_id' => 4, 'nombre' => 'Tacos al Pastor', 'descripcion' => 'Tacos rellenos de carne de cerdo marinada con piña y cebolla.', 'precio' => 9.00],
            ['menu_id' => 4, 'nombre' => 'Nachos Supremos', 'descripcion' => 'Nachos con queso, jalapeños, frijoles y guacamole.', 'precio' => 7.50],
            ['menu_id' => 4, 'nombre' => 'Sopa de Tortilla', 'descripcion' => 'Caldo rico con tomate, tiras de tortilla, aguacate y queso.', 'precio' => 6.00],
            ['menu_id' => 5, 'nombre' => 'Guiso de Venado', 'descripcion' => 'Rico guiso de venado con vegetales de raíz y hierbas frescas.', 'precio' => 12.00],
            ['menu_id' => 5, 'nombre' => 'Pan de Trigo Integral', 'descripcion' => 'Pan casero hecho con harina integral, horneado fresco.', 'precio' => 3.00],
            ['menu_id' => 5, 'nombre' => 'Ensalada de Raíces', 'descripcion' => 'Ensalada crujiente de remolacha y zanahorias con aderezo balsámico.', 'precio' => 5.00],
            ['menu_id' => 6, 'nombre' => 'Alitas de Pollo al Whisky', 'descripcion' => 'Alitas marinadas en whisky y glaseadas con miel y especias.', 'precio' => 10.00],
            ['menu_id' => 6, 'nombre' => 'Patatas Bravas', 'descripcion' => 'Patatas crujientes con salsa brava picante.', 'precio' => 6.00],
            ['menu_id' => 6, 'nombre' => 'Dip de Frijoles con Nachos', 'descripcion' => 'Frijoles cremosos con jalapeños y nachos para picar.', 'precio' => 7.00],
            ['menu_id' => 7, 'nombre' => 'Guiso de Lentejas', 'descripcion' => 'Guiso rico y nutritivo con lentejas y verduras, servido caliente.', 'precio' => 9.00],
            ['menu_id' => 7, 'nombre' => 'Pan de Centeno', 'descripcion' => 'Pan de centeno casero, fresco y denso.', 'precio' => 3.00],
            ['menu_id' => 7, 'nombre' => 'Ensalada de Papa', 'descripcion' => 'Ensalada clásica de papa con un toque de mostaza.', 'precio' => 5.00],
            ['menu_id' => 8, 'nombre' => 'Sándwich de Pollo', 'descripcion' => 'Sándwich saludable con pollo a la parrilla y vegetales frescos.', 'precio' => 7.00],
            ['menu_id' => 8, 'nombre' => 'Frutas Frescas Mixtas', 'descripcion' => 'Selección de frutas frescas de temporada.', 'precio' => 4.00],
            ['menu_id' => 8, 'nombre' => 'Ensalada de Couscous', 'descripcion' => 'Ensalada ligera de couscous con verduras frescas y aderezo de limón.', 'precio' => 6.00],
            ['menu_id' => 9, 'nombre' => 'Tarta de Verduras', 'descripcion' => 'Hojaldre relleno de espinacas frescas, pimientos y cebolla con queso feta.', 'precio' => 12.00],
            ['menu_id' => 9, 'nombre' => 'Sopa de Calabaza', 'descripcion' => 'Sopa cremosa de calabaza con un toque de nuez moscada.', 'precio' => 8.00],
            ['menu_id' => 9, 'nombre' => 'Ensalada de Remolacha y Queso de Cabra', 'descripcion' => 'Remolacha rostizada con queso de cabra y nueces sobre una cama de lechugas mixtas.', 'precio' => 10.00],
            ['menu_id' => 10, 'nombre' => 'Guiso de Ciervo', 'descripcion' => 'Guiso abundante de ciervo con vegetales de raíz y un toque de vino tinto.', 'precio' => 15.00],
            ['menu_id' => 10, 'nombre' => 'Pan de Ajo Rústico', 'descripcion' => 'Pan artesanal con ajo fresco y mantequilla, espolvoreado con perejil.', 'precio' => 5.00],
            ['menu_id' => 10, 'nombre' => 'Ensalada de Col Rizada', 'descripcion' => 'Col rizada con almendras tostadas y queso parmesano, aderezada con limón y aceite de oliva.', 'precio' => 9.00]
        ]);
    }
}
