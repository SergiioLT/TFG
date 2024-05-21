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
        Schema::create('ingrediente_alergenos', function (Blueprint $table) {
            $table->unsignedBigInteger('ingrediente_id');
            $table->unsignedBigInteger('alergeno_id');
            $table->primary(['ingrediente_id', 'alergeno_id']);

            $table->foreign('ingrediente_id')->references('ingrediente_id')->on('ingredientes')->onDelete('cascade');
            $table->foreign('alergeno_id')->references('alergeno_id')->on('alergenos')->onDelete('cascade');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ingrediente_alergenos');
    }
};
