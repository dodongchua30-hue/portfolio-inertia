import { Head, Link } from '@inertiajs/react';
import Footer from '@/Components/Footer';
import FlashMessage from '@/Components/FlashMessage';
import PageBackground from '@/Components/PageBackground';

// Black admin layout used by the Projects management pages.
export default function AdminLayout({ title, subtitle, action, children }) {
    return (
        <div className="pt-28">
            <Head title={`${title} | Admin`} />
            <PageBackground />

            <header className="fixed inset-x-0 top-3 z-50 px-3 md:top-4 md:px-6">
                <nav className="glass mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-full px-5 py-3 shadow-lg shadow-black/40">
                    <span className="text-lg font-bold tracking-tight">
                        Admin<span className="text-white/50"> Panel</span>
                    </span>
                    <div className="flex items-center gap-2">
                        <Link href="/" className="rounded-full px-3.5 py-1.5 text-sm font-medium text-white/75 transition hover:bg-white/10 hover:text-white">
                            ← Portfolio
                        </Link>
                        {action}
                    </div>
                </nav>
            </header>

            <main className="mx-auto min-h-[70vh] max-w-6xl px-5 py-10 md:px-10">
                <div className="mb-8">
                    <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
                    {subtitle && <p className="mt-2 text-white/55">{subtitle}</p>}
                </div>
                <FlashMessage />
                {children}
            </main>

            <Footer />
        </div>
    );
}
