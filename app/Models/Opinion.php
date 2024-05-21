<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

class Opinion extends Model
{
    use HasFactory;

    protected $table = 'opiniones';
    protected $primaryKey = 'opinion_id';
    protected $fillable = ['user_id', 'puntuacion', 'mensaje', 'fecha_hora'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
