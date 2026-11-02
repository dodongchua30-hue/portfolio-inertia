import { useForm } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import ProjectForm from '@/Components/ProjectForm';

export default function Edit({ project }) {
    const form = useForm({
        _method: 'put', // files cannot be sent with a real PUT request, so we spoof it through POST
        title: project.title,
        description: project.description,
        tech_stack: project.tech_stack,
        project_url: project.project_url ?? '',
        date_completed: project.date_completed,
        image: null,
    });

    const submit = (e) => {
        e.preventDefault();
        form.post(`/projects/${project.id}`, { forceFormData: true });
    };

    return (
        <AdminLayout title="Edit Project" subtitle="Change the details and save to update your public portfolio.">
            <ProjectForm
                form={form}
                onSubmit={submit}
                submitLabel="Update Project"
                currentImageUrl={project.image_url}
            />
        </AdminLayout>
    );
}
