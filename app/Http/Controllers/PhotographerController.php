<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Photographer;
use Inertia\Inertia;


class PhotographerController extends Controller
{
    public function show($id)
    {
        $photographer = Photographer::with([
            'user',
            'albums.photos',
            'achievements.photo',
            'socialConnections.socialMedia'
        ])->findOrFail($id);

        return Inertia::render('Photographer', [
            'photographer' => $photographer
        ]);
    }
}

