<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Menu extends Model
{
    protected $table = 'menus';
    protected $primaryKey = 'menu_id';
    protected $fillable = ['nombre', 'descripcion', 'tipo_menu', 'precio', 'URL'];

    public function platos()
    {
        return $this->hasMany(Plato::class, 'menu_id');
    }
}
