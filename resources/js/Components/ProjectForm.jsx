import { useMemo } from 'react';
import { Link } from '@inertiajs/react';
import FormField from '@/Components/FormField';

// Red border when the field has a validation error.
const inputClass = (error) =>
    `w-full rounded-xl border bg-white/[0.06] px-4 py-3 text-base text-white placeholder-white/30 outline-none transition focus:border-white/60 focus:bg-white/10 [color-scheme:dark] ${
        error ? 'border-red-400/70' : 'border-white/15'
    }`;

// Shared by Create and Edit. The parent owns the Inertia form object,
// so typed values stay in place when the server sends back validation errors.
export default function ProjectForm({ form, onSubmit, submitLabel, currentImageUrl = null }) {
    const { data, setData, errors, processing } = form;

    // Preview of the newly chosen file (falls back to the saved image on the Edit page).
    const preview = useMemo(() => (data.image ? URL.createObjectURL(data.image) : null), [data.image]);
    const shownImage = preview ?? currentImageUrl;

    return (
        <form onSubmit={onSubmit} className="glass flex max-w-2xl flex-col gap-6 rounded-2xl p-6 md:p-8" noValidate>
            <FormField label="Title" htmlFor="title" error={errors.title}>
                <input
                    id="title"
                    type="text"
                    placeholder="My awesome project"
                    value={data.title}
                    onChange={(e) => setData('title', e.target.value)}
                    className={inputClass(errors.title)}
                />
            </FormField>

            <FormField label="Description" htmlFor="description" error={errors.description}>
                <textarea
                    id="description"
                    rows={5}
                    placeholder="What does it do and what did you build?"
                    value={data.description}
                    onChange={(e) => setData('description', e.target.value)}
                    className={`${inputClass(errors.description)} min-h-[120px] resize-y`}
                />
                <small className="self-end text-xs text-white/40">{data.description.length} / 1000</small>
            </FormField>

            <FormField
                label="Tech Stack"
                htmlFor="tech_stack"
                error={errors.tech_stack}
                hint="Separate with commas. Example: Laravel, React, Tailwind CSS"
            >
                <input
                    id="tech_stack"
                    type="text"
                    value={data.tech_stack}
                    onChange={(e) => setData('tech_stack', e.target.value)}
                    className={inputClass(errors.tech_stack)}
                />
            </FormField>

            <div className="grid gap-6 md:grid-cols-2">
                <FormField label="Project URL (optional)" htmlFor="project_url" error={errors.project_url}>
                    <input
                        id="project_url"
                        type="text"
                        placeholder="https://github.com/you/project"
                        value={data.project_url}
                        onChange={(e) => setData('project_url', e.target.value)}
                        className={inputClass(errors.project_url)}
                    />
                </FormField>

                <FormField label="Date Completed" htmlFor="date_completed" error={errors.date_completed}>
                    <input
                        id="date_completed"
                        type="date"
                        value={data.date_completed}
                        onChange={(e) => setData('date_completed', e.target.value)}
                        className={inputClass(errors.date_completed)}
                    />
                </FormField>
            </div>

            <FormField label="Image (optional)" htmlFor="image" error={errors.image} hint="JPG, PNG, or WEBP. Max 2 MB.">
                <input
                    id="image"
                    type="file"
                    accept="image/*"
                    onChange={(e) => setData('image', e.target.files[0] ?? null)}
                    className={`${inputClass(errors.image)} file:mr-4 file:cursor-pointer file:rounded-lg file:border-0 file:bg-white file:px-4 file:py-1.5 file:text-sm file:font-semibold file:text-black`}
                />
                {shownImage && (
                    <div className="mt-1">
                        <p className="mb-1.5 text-xs text-white/45">
                            {preview ? 'New image preview' : 'Current image (upload a new one to replace it)'}
                        </p>
                        <img src={shownImage} alt="Preview" className="h-32 w-44 rounded-xl border border-white/15 object-cover" />
                    </div>
                )}
            </FormField>

            <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                    type="submit"
                    disabled={processing}
                    className="rounded-xl bg-white px-7 py-3 font-semibold text-black transition hover:bg-white/85 disabled:opacity-50"
                >
                    {processing ? 'Saving...' : submitLabel}
                </button>
                <Link href="/projects" className="rounded-xl border border-white/25 px-6 py-3 font-semibold transition hover:bg-white/10">
                    Cancel
                </Link>
            </div>
        </form>
    );
}
