<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SocialConnection extends Model
{
    use HasFactory;

    protected $fillable = [
        'photographer_id',
        'social_media_id',
        'profile_url',
    ];

    public function photographer()
    {
        return $this->belongsTo(Photographer::class, 'photographer_id', 'id');
    }

    public function socialMedia()
    {
        return $this->belongsTo(SocialMedia::class, 'social_media_id', 'id');
    }
}
