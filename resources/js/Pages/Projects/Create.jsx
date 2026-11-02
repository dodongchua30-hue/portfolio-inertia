import { useForm } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import ProjectForm from '@/Components/ProjectForm';

export default function Create() {
    const form = useForm({
        title: '',
        description: '',
        tech_stack: '',
        project_url: '',
        date_completed: '',
        image: null,
    });

    const submit = (e) => {
        e.preventDefault();
        // forceFormData is needed because the form can contain a file.
        form.post('/projects', { forceFormData: true });
    };

    return (
        <AdminLayout title="Add New Project" subtitle="Fill in the details. It will appear on your public portfolio right away.">
            <ProjectForm form={form} onSubmit={submit} submitLabel="Save Project" />
        </AdminLayout>
    );
}
