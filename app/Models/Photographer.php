<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Photographer extends Model
{
    use HasFactory;

    protected $fillable = ['user_id','full_name','about','address'];

    public function user() {
        return $this->belongsTo(User::class);
    }

    public function albums() {
        return $this->hasMany(Album::class);
    }

    public function achievements() {
        return $this->hasMany(Achievement::class);
    }

    public function socialConnections() {
        return $this->hasMany(SocialConnection::class);
    }
}
