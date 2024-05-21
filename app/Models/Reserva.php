<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reserva extends Model
{
    use HasFactory;


    protected $table = 'reservas';  // Especifica el nombre de la tabla si es necesario
    protected $primaryKey = 'reserva_id';  // Especifica la clave primaria

    // Los campos que pueden ser asignados masivamente
    protected $fillable = [
        'user_id',
        'fecha_hora',
        'numero_personas',
        'estado',
        'notas'
    ];

    // Relación con el modelo User
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
