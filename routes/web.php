<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\PhotographerController;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get('/Photographer', function () {
    return Inertia::render('Photographer'); // path relative to pages folder
});


Route::get('/photographer/{id}', [PhotographerController::class, 'show']);
