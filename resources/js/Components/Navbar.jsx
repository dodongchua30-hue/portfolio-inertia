import { useEffect, useState } from 'react';
import { Link } from '@inertiajs/react';

const links = [
    { href: '#home', label: 'Home', id: 'home' },
    { href: '#about', label: 'About', id: 'about' },
    { href: '#skills', label: 'Skills', id: 'skills' },
    { href: '#projects', label: 'Projects', id: 'projects' },
    { href: '#contact', label: 'Contact', id: 'contact' },
];

export default function Navbar() {
    const [active, setActive] = useState('home');

    // Highlights the link of the section that is currently on screen.
    useEffect(() => {
        const onScroll = () => {
            let current = 'home';
            links.forEach(({ id }) => {
                const el = document.getElementById(id);
                if (el && window.scrollY >= el.offsetTop - 140) current = id;
            });
            setActive(current);
        };
        window.addEventListener('scroll', onScroll);
        onScroll();
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <header className="fixed inset-x-0 top-3 z-50 px-3 md:top-4 md:px-6">
            <nav className="glass mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 rounded-2xl px-4 py-3 shadow-lg shadow-black/40 md:flex-row md:rounded-full md:px-6">
                <a href="#home" className="text-lg font-bold tracking-tight">
                    Chris<span className="text-white/50"> Joven</span>
                </a>
                <ul className="flex flex-wrap items-center justify-center gap-1">
                    {links.map((link) => (
                        <li key={link.id}>
                            <a
                                href={link.href}
                                className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition ${
                                    active === link.id ? 'bg-white text-black' : 'text-white/75 hover:bg-white/10 hover:text-white'
                                }`}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                    <li>
                        <Link
                            href="/projects"
                            className="ml-1 rounded-full border border-white/30 px-3.5 py-1.5 text-sm font-medium transition hover:bg-white/15"
                        >
                            Admin
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
