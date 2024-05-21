<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Alergeno extends Model
{
    protected $table = 'alergenos';
    protected $primaryKey = "alergeno_id";
    protected $fillable = ['nombre'];

    public function ingredientes()
    {
        return $this->belongsToMany(Ingrediente::class, 'ingrediente_alergenos', 'alergeno_id', 'ingrediente_id');
    }
}
