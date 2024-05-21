<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AccionUsuario extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'tipo_accion',
        'detalles',
        'fecha',
    ];

    // Relación con el modelo User
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
