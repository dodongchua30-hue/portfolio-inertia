<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Project extends Model
{
    // Only these columns can be mass-assigned (Project::create / ->update).
    protected $fillable = [
        'title',
        'description',
        'tech_stack',
        'project_url',
        'image_path',
        'date_completed',
    ];

    protected $casts = [
        'date_completed' => 'date:Y-m-d',
    ];

    // Adds "image_url" to the JSON that Inertia sends to React.
    protected $appends = ['image_url'];

    public function getImageUrlAttribute(): ?string
    {
        return $this->image_path ? Storage::url($this->image_path) : null;
    }
}
