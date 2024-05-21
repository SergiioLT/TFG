<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OfertaPersonalizada extends Model
{
    use HasFactory;

    protected $table = 'ofertas_personalizadas';
    protected $primaryKey = 'id';
    protected $fillable = [
        'user_id',
        'oferta_id',
        'fecha_asignada',
        'usada',
        'tipo', // Asegúrate de incluir 'tipo' en $fillable
        'valor',
        'valido_desde',
        'valido_hasta',
        'utilizado'
    ];

    // Relación con el modelo User
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    // Relación con el modelo Oferta
    public function oferta()
    {
        return $this->belongsTo(Oferta::class);
    }
}
