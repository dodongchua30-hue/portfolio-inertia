import { useState } from 'react';
import { Link, router } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import ConfirmModal from '@/Components/ConfirmModal';

export default function Index({ projects }) {
    const [toDelete, setToDelete] = useState(null);
    const [deleting, setDeleting] = useState(false);

    const withImages = projects.filter((p) => p.image_url).length;
    const latest = projects[0]?.date_completed ?? '—';

    const confirmDelete = () => {
        router.delete(`/projects/${toDelete.id}`, {
            onStart: () => setDeleting(true),
            onFinish: () => {
                setDeleting(false);
                setToDelete(null);
            },
        });
    };

    return (
        <AdminLayout
            title="Manage Projects"
            subtitle="Add, edit, or remove the projects shown on your public portfolio."
            action={
                <Link href="/projects/create" className="rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-black transition hover:bg-white/85">
                    + Add Project
                </Link>
            }
        >
            <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {[
                    { label: 'Total projects', value: projects.length },
                    { label: 'With images', value: withImages },
                    { label: 'Latest completed', value: latest },
                ].map((stat) => (
                    <div key={stat.label} className="glass rounded-2xl p-5">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">{stat.label}</p>
                        <p className="mt-1 text-2xl font-bold">{stat.value}</p>
                    </div>
                ))}
            </div>

            {projects.length === 0 ? (
                <div className="glass rounded-2xl p-10 text-center text-white/60">
                    No projects found.{' '}
                    <Link href="/projects/create" className="text-white underline">
                        Add your first project!
                    </Link>
                </div>
            ) : (
                <div className="glass overflow-x-auto rounded-2xl">
                    <table className="w-full border-collapse text-left text-sm">
                        <thead>
                            <tr className="bg-white/[0.06] text-xs uppercase tracking-wider text-white/60">
                                <th className="p-4">#</th>
                                <th className="p-4">Image</th>
                                <th className="p-4">Title</th>
                                <th className="hidden p-4 md:table-cell">Tech Stack</th>
                                <th className="p-4">Date</th>
                                <th className="p-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {projects.map((project, i) => (
                                <tr key={project.id} className="border-t border-white/[0.07] transition hover:bg-white/[0.04]">
                                    <td className="p-4 text-white/50">{i + 1}</td>
                                    <td className="p-4">
                                        {project.image_url ? (
                                            <img src={project.image_url} alt="thumb" className="h-12 w-16 rounded-lg object-cover" />
                                        ) : (
                                            <span className="text-xs text-white/40">No Image</span>
                                        )}
                                    </td>
                                    <td className="p-4 font-medium">{project.title}</td>
                                    <td className="hidden p-4 text-white/65 md:table-cell">{project.tech_stack}</td>
                                    <td className="whitespace-nowrap p-4 text-white/65">{project.date_completed}</td>
                                    <td className="p-4">
                                        <div className="flex items-center justify-end gap-2">
                                            <Link
                                                href={`/projects/${project.id}/edit`}
                                                className="rounded-lg border border-white/25 px-4 py-1.5 font-semibold transition hover:bg-white/10"
                                            >
                                                Edit
                                            </Link>
                                            <button
                                                type="button"
                                                onClick={() => setToDelete(project)}
                                                className="rounded-lg border border-red-500/50 bg-red-600/30 px-4 py-1.5 font-semibold transition hover:bg-red-600/60"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            <ConfirmModal
                open={toDelete !== null}
                title="Delete project?"
                message={toDelete ? `"${toDelete.title}" will be permanently removed.` : ''}
                processing={deleting}
                onConfirm={confirmDelete}
                onCancel={() => setToDelete(null)}
            />
        </AdminLayout>
    );
}
