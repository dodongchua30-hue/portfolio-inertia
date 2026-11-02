<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Inertia\Inertia;

class PortfolioController extends Controller
{
    // Public page: sends the saved projects to the Portfolio React page.
    public function __invoke()
    {
        return Inertia::render('Portfolio', [
            'projects' => Project::orderByDesc('date_completed')->get(),
        ]);
    }
}
