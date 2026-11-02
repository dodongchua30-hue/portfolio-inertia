<?php

use App\Http\Controllers\PortfolioController;
use App\Http\Controllers\ProjectController;
use Illuminate\Support\Facades\Route;

// Public portfolio
Route::get('/', PortfolioController::class)->name('portfolio');

// Project management (CRUD). The show route is not used, so it is excluded.
// Bonus: wrap this in Route::middleware('auth')->group(...) to require login.
Route::resource('projects', ProjectController::class)->except(['show']);

// Keep the starter kit's own auth routes (login, register...) if you use them:
// require __DIR__.'/auth.php';
