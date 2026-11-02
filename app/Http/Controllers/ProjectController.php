<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class ProjectController extends Controller
{
    public function index()
    {
        return Inertia::render('Projects/Index', [
            'projects' => Project::orderByDesc('date_completed')->get(),
        ]);
    }

    public function create()
    {
        return Inertia::render('Projects/Create');
    }

    public function store(Request $request)
    {
        $data = $request->validate($this->rules(), $this->messages());

        if ($request->hasFile('image')) {
            $data['image_path'] = $request->file('image')->store('projects', 'public');
        }

        Project::create(Arr::except($data, ['image']));

        return redirect()->route('projects.index')
            ->with('success', 'Project added successfully!');
    }

    public function edit(Project $project)
    {
        return Inertia::render('Projects/Edit', [
            'project' => $project,
        ]);
    }

    public function update(Request $request, Project $project)
    {
        $data = $request->validate($this->rules($project), $this->messages());

        if ($request->hasFile('image')) {
            // Replace the old image so the storage folder does not fill up with unused files.
            if ($project->image_path) {
                Storage::disk('public')->delete($project->image_path);
            }
            $data['image_path'] = $request->file('image')->store('projects', 'public');
        }

        $project->update(Arr::except($data, ['image']));

        return redirect()->route('projects.index')
            ->with('success', 'Project updated successfully!');
    }

    public function destroy(Project $project)
    {
        if ($project->image_path) {
            Storage::disk('public')->delete($project->image_path);
        }

        $project->delete();

        return redirect()->route('projects.index')
            ->with('success', 'Project deleted successfully!');
    }

    /**
     * Validation rules. $project is passed on update so the unique rule
     * can ignore the record being edited.
     */
    private function rules(?Project $project = null): array
    {
        return [
            'title' => [
                'required', 'string', 'max:100',
                Rule::unique('projects', 'title')->ignore($project?->id),
            ],
            'description'    => ['required', 'string', 'min:20', 'max:1000'],
            'tech_stack'     => ['required', 'string', 'max:150'],
            'project_url'    => ['nullable', 'url', 'max:255'],
            'date_completed' => ['required', 'date', 'before_or_equal:today'],
            'image'          => ['nullable', 'image', 'mimes:jpg,jpeg,png,webp', 'max:2048'],
        ];
    }

    private function messages(): array
    {
        return [
            'title.unique'                   => 'You already have a project with this title. Please use a different one.',
            'description.min'                => 'Please describe the project in at least 20 characters.',
            'project_url.url'                => 'Enter a full link, for example https://github.com/you/project.',
            'date_completed.before_or_equal' => 'Completion date cannot be in the future.',
            'image.max'                      => 'The image is too large. Maximum size is 2 MB.',
            'image.mimes'                    => 'The image must be a JPG, PNG, or WEBP file.',
        ];
    }
}
