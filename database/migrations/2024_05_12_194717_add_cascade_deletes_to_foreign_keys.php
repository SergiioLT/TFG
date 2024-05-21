<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // Opiniones: ajustar clave foránea con eliminación en cascada
        Schema::table('opiniones', function (Blueprint $table) {
            $table->dropForeign(['user_id']);  // primero eliminar la FK existente
            $table->foreign('user_id')
                ->references('id')->on('users')
                ->onDelete('cascade');  // añadir la FK con onDelete cascade
        });

        // Reservas: ajustar clave foránea con eliminación en cascada
        Schema::table('reservas', function (Blueprint $table) {
            $table->dropForeign(['user_id']);  // primero eliminar la FK existente
            $table->foreign('user_id')
                ->references('id')->on('users')
                ->onDelete('cascade');  // añadir la FK con onDelete cascade
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // Opiniones: revertir clave foránea sin eliminación en cascada
        Schema::table('opiniones', function (Blueprint $table) {
            $table->dropForeign(['user_id']);
            $table->foreign('user_id')
                ->references('id')->on('users');
        });

        // Reservas: revertir clave foránea sin eliminación en cascada
        Schema::table('reservas', function (Blueprint $table) {
            $table->dropForeign(['user_id']);
            $table->foreign('user_id')
                ->references('id')->on('users');
        });
    }
};
