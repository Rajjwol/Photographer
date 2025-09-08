<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Achievement extends Model
{
    use HasFactory;

    protected $fillable = [
        'photographer_id',
        'description',
        'date_achievement',
        'photo_id',
    ];

    public function photographer()
    {
        return $this->belongsTo(Photographer::class, 'photographer_id', 'id');
    }

    public function photo()
    {
        return $this->belongsTo(Photo::class, 'photo_id', 'id');
    }
}
