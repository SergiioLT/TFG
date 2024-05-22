<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MenusTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $menus = [
            ['nombre' => 'Banquete del Sheriff', 'descripcion' => 'Una selección premium de carnes asadas y guarniciones locales.', 'tipo_menu' => "primeros", 'precio' => 29.99, 'url' => 'images/banquete-del-sheriff.png'],
            ['nombre' => 'Desayuno del Pistolero', 'descripcion' => 'Un robusto desayuno para comenzar el día con fuerza, incluye huevos, tocino y pan casero.', 'tipo_menu' => "desayunos", 'precio' => 14.99, 'url' => 'images/desayuno-del-pistolero.png'],
            ['nombre' => 'Asado del Vaquero', 'descripcion' => 'Jugosas piezas de carne a la parrilla con verduras asadas y salsa barbacoa al estilo del oeste.', 'tipo_menu' => "primeros", 'precio' => 24.99, 'url' => 'images/asado-del-vaquero.png'],
            ['nombre' => 'Fiesta de la Frontera', 'descripcion' => ' Sabores del sur mezclados con el espíritu del oeste, perfecto para los amantes del picante.', 'tipo_menu' => "primeros", 'precio' => 19.99, 'url' => 'images/fiesta-de-la-frontera.png'],
            ['nombre' => 'Cena de la Caravana', 'descripcion' => 'Un menú itinerante que ofrece platos de caza menor y guisos caseros.', 'tipo_menu' => "primeros", 'precio' => 21.99, 'url' => 'images/cena-de-la-caravana.png'],
            ['nombre' => 'Noche en el Saloon', 'descripcion' => 'Disfruta de un menú de bebidas clásicas del oeste y tapas que acompañan perfecto a una noche de cartas.', 'tipo_menu' => "primeros", 'precio' => 17.99, 'url' => 'images/noche-en-el-saloon.png'],
            ['nombre' => 'Olla del Minero', 'descripcion' => 'Un guiso robusto y llenador, con ingredientes que reflejan la vida dura del minero.', 'tipo_menu' => "entrantes", 'precio' => 15.99, 'url' => 'images/olla-del-minero.png'],
            ['nombre' => 'Picnic del Desierto', 'descripcion' => 'Comida ligera y refrescante, ideal para un día caliente en el desierto.', 'tipo_menu' => "entrantes", 'precio' => 13.99, 'url' => 'images/picnic-del-desierto.png'],
            ['nombre' => 'Cosecha del Granjero', 'descripcion' => 'Un menú basado en vegetales frescos y carne de granja, cocinado con amor y simplicidad.', 'tipo_menu' => "entrantes", 'precio' => 23.99, 'url' => 'images/cosecha-del-granjero.png'],
            ['nombre' => 'Guiso del Trampero', 'descripcion' => 'Un guiso rico y caliente con ingredientes recolectados del entorno salvaje.', 'tipo_menu' => "primeros", 'precio' => 25.99, 'url' => 'images/guiso-del-trampero.png'],
        ];

        foreach ($menus as $menu) {
            DB::table('menus')->insert([
                'nombre' => $menu['nombre'],
                'descripcion' => $menu['descripcion'],
                'tipo_menu' => $menu['tipo_menu'],
                'precio' => $menu['precio'],
                'URL' => asset($menu['url'])
            ]);
        }
    }
}
