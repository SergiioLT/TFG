<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ingrediente extends Model
{
    protected $table = 'ingredientes';
    protected $primaryKey = 'ingrediente_id';
    protected $fillable = ['nombre'];

    public function platos()
    {
        return $this->belongsToMany(Plato::class, 'plato_ingredientes', 'ingrediente_id', 'plato_id');
    }

    public function alergenos()
    {
        return $this->belongsToMany(Alergeno::class, 'ingrediente_alergenos', 'ingrediente_id', 'alergeno_id');
    }
}
