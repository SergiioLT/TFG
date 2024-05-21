<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Oferta extends Model
{
    use HasFactory;

    protected $table = 'ofertas';
    protected $primaryKey = 'id';
    protected $fillable = [
        'descripcion',
        'tipo_oferta',
        'valor',
        'fecha_inicio',
        'fecha_fin',
    ];

    // Relación con el modelo OfertaPersonalizada
    public function ofertasPersonalizadas()
    {
        return $this->hasMany(OfertaPersonalizada::class);
    }
}
