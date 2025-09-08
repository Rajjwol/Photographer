<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Photo extends Model
{
    use HasFactory;

    protected $fillable = [
        'file_path',
        'file_name',
        'file_extension',
        'file_size',
        'album_id',
    ];

    public function album()
    {
        return $this->belongsTo(Album::class, 'album_id', 'id');
    }
}
