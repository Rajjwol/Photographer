<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Album extends Model
{
    use HasFactory;

    protected $fillable = [
        'photographer_id',
        'album_name',
        'album_detail',
        'cover_photo_id',
    ];

    public function photographer()
    {
        return $this->belongsTo(Photographer::class, 'photographer_id', 'id');
    }

    public function photos()
    {
        return $this->hasMany(Photo::class, 'album_id', 'id');
    }

    public function coverPhoto()
    {
        return $this->belongsTo(Photo::class, 'cover_photo_id', 'id');
    }
}
