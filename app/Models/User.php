<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;


class User extends Authenticatable
{
    use HasFactory;

    public function role() {
        return $this->belongsTo(Role::class);
    }

    public function photographer() {
        return $this->hasOne(Photographer::class);
    }
}
