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
        Schema::create('plato_ingredientes', function (Blueprint $table) {
            $table->unsignedBigInteger('plato_id');
            $table->unsignedBigInteger('ingrediente_id');
            $table->primary(['plato_id', 'ingrediente_id']);

            $table->foreign('plato_id')->references('plato_id')->on('platos')->onDelete('cascade');
            $table->foreign('ingrediente_id')->references('ingrediente_id')->on('ingredientes')->onDelete('cascade');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('plato_ingredientes');
    }
};
