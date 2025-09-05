<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get('/Photographer', function () {
    return Inertia::render('Photographer'); // path relative to pages folder
});
