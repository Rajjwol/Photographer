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
        // ----------------------
        // Roles Table
        // ----------------------
        Schema::create('roles', function (Blueprint $table) {
            $table->id();
            $table->string('role_name')->unique();
            $table->timestamps();
        });

        // ----------------------
        // Users Table
        // ----------------------
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('username')->unique();
            $table->string('password_hash');
            $table->string('email')->unique()->nullable();
            $table->string('phone_number', 20)->nullable();
            $table->foreignId('role_id')->constrained('roles')->cascadeOnDelete();
            $table->timestamps();
        });

        // ----------------------
        // Photographers Table
        // ----------------------
        Schema::create('photographers', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->unique()->constrained('users')->cascadeOnDelete();
            $table->string('full_name');
            $table->text('about')->nullable();
            $table->string('address')->nullable();
            $table->timestamps();
        });

        // ----------------------
        // Social Media Table
        // ----------------------
        Schema::create('social_medias', function (Blueprint $table) {
            $table->id();
            $table->string('platform_name')->unique();
            $table->string('icon')->nullable(); // FontAwesome class, image name, or URL
            $table->timestamps();
        });

        // ----------------------
        // Social Connections Table
        // ----------------------
        Schema::create('social_connections', function (Blueprint $table) {
            $table->id();
            $table->foreignId('photographer_id')->constrained('photographers')->cascadeOnDelete();
            $table->foreignId('social_media_id')->constrained('social_medias')->cascadeOnDelete();
            $table->string('profile_url');
            $table->timestamps();

            $table->unique(['photographer_id', 'social_media_id']);
        });

        // ----------------------
        // Photos Table
        // ----------------------
        Schema::create('photos', function (Blueprint $table) {
            $table->id();
            $table->string('file_path');
            $table->string('file_name')->nullable();
            $table->string('file_extension', 10)->nullable();
            $table->integer('file_size')->nullable();
            $table->timestamps();
        });

        // ----------------------
        // Albums Table
        // ----------------------
        Schema::create('albums', function (Blueprint $table) {
            $table->id();
            $table->foreignId('photographer_id')->constrained('photographers')->cascadeOnDelete();
            $table->string('album_name');
            $table->text('album_detail')->nullable();
            $table->foreignId('cover_photo_id')->nullable()->constrained('photos')->nullOnDelete();
            $table->timestamps();
        });

        // Add album_id to photos AFTER albums table exists to avoid circular FK
        Schema::table('photos', function (Blueprint $table) {
            $table->foreignId('album_id')->nullable()->constrained('albums')->cascadeOnDelete();
        });

        // ----------------------
        // Achievements Table
        // ----------------------
        Schema::create('achievements', function (Blueprint $table) {
            $table->id();
            $table->foreignId('photographer_id')->constrained('photographers')->cascadeOnDelete();
            $table->text('description');
            $table->date('date_achievement');
            $table->foreignId('photo_id')->nullable()->constrained('photos')->nullOnDelete();
            $table->timestamps();
        });

        // ----------------------
        // Optional: Sessions Table (if you want database sessions)
        // ----------------------
        Schema::create('sessions', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->foreignId('user_id')->nullable()->index()->constrained('users')->nullOnDelete();
            $table->string('ip_address', 45)->nullable();
            $table->text('user_agent')->nullable();
            $table->longText('payload');
            $table->integer('last_activity')->index();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sessions');
        Schema::dropIfExists('achievements');
        Schema::dropIfExists('photos');
        Schema::dropIfExists('albums');
        Schema::dropIfExists('social_connections');
        Schema::dropIfExists('social_medias');
        Schema::dropIfExists('photographers');
        Schema::dropIfExists('users');
        Schema::dropIfExists('roles');
    }
};
