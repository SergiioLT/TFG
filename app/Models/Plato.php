<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Plato extends Model
{
    protected $table = 'platos';
    protected $primaryKey = 'plato_id';
    protected $fillable = ['nombre', 'descripcion', 'precio', 'menu_id'];

    public function menu()
    {
        return $this->belongsTo(Menu::class, 'menu_id');
    }

    public function ingredientes()
    {
        return $this->belongsToMany(Ingrediente::class, 'plato_ingredientes', 'plato_id', 'ingrediente_id');
    }

    public function alergenos()
    {
        return $this->belongsToMany(Alergeno::class, 'ingrediente_alergenos', 'ingrediente_id', 'alergeno_id');
    }
}
