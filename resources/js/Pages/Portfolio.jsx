import { Head } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import Section from '@/Components/Section';
import SectionTitle from '@/Components/SectionTitle';
import ProjectCard from '@/Components/ProjectCard';
   import PageBackground from '@/Components/PageBackground';

const skills = [
    { name: 'Video Editing', icon: '🎬' },
    { name: '3D Designer', icon: '🧊' },
    { name: 'JavaScript', icon: '⚡' },
    { name: 'Networking', icon: '🌐' },
];

const contacts = [
    { label: 'Email', value: 'Dodongchua30@gmail.com', href: 'mailto:Dodongchua30@gmail.com' },
    { label: 'Phone', value: '0955026881', href: 'tel:0955026881' },
    { label: 'Discord', value: 'yshr03', href: null },
];

export default function Portfolio({ projects }) {
    return (
        <>
            <Head title="Chris | Portfolio" />
            <PageBackground />
            <Navbar />

            <main className="pt-24">
                {/* HOME */}
                <Section id="home" className="flex min-h-[75vh] flex-col-reverse items-center justify-between gap-10 lg:flex-row">
                    <div className="text-center lg:max-w-xl lg:text-left">
                        <span className="glass mb-5 inline-block rounded-full px-4 py-1.5 text-xs font-medium tracking-wide text-white/70">
                            BSIT Student · Urdaneta City University
                        </span>
                        <p className="text-xl text-white/70 md:text-2xl">Hello, I'm</p>
                        <h2 className="text-shine my-2 text-4xl font-extrabold tracking-tight md:text-6xl">
                            Chris Joven C. Cirelles
                        </h2>
                        <p className="mb-8 text-lg text-white/75 md:text-xl">
                            Aspiring Game Developer | Designer | Tech Enthusiast
                        </p>
                        <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
                            <a href="#projects" className="rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:bg-white/85">
                                View Projects
                            </a>
                            <a href="#contact" className="rounded-full border border-white/30 px-6 py-3 font-semibold transition hover:bg-white/10">
                                Contact Me
                            </a>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-4 rounded-[2rem] bg-white/10 blur-2xl" />
                        <img
                            src="/images/profile.png"
                            alt="Profile picture"
                            className="relative w-56 rounded-3xl border border-white/20 object-cover shadow-2xl shadow-black/60 grayscale transition duration-500 hover:grayscale-0 md:w-72 lg:w-80"
                        />
                    </div>
                </Section>

                {/* ABOUT */}
                <Section id="about">
                    <SectionTitle eyebrow="Who I am">About Me</SectionTitle>
                    <div className="glass rounded-2xl p-6 md:p-8">
                        <p className="leading-loose text-white/80">
                            Hi, I'm Chris Joven, a student at Urdaneta City University, pursuing a degree in BSIT under
                            the College of Information Technology (CIT). I'm passionate about technology and driven to
                            become a skilled IT professional. With a strong foundation in computer science and a keen
                            interest in software development, I'm excited to apply my knowledge and skills to
                            real-world problems.
                        </p>
                    </div>
                </Section>

                {/* SKILLS */}
                <Section id="skills">
                    <SectionTitle eyebrow="What I do">Skills</SectionTitle>
                    <ul className="grid grid-cols-2 gap-4 md:grid-cols-4">
                        {skills.map((skill) => (
                            <li
                                key={skill.name}
                                className="glass flex flex-col items-center gap-2 rounded-2xl px-4 py-6 text-center transition hover:-translate-y-1 hover:border-white/30"
                            >
                                <span className="text-3xl">{skill.icon}</span>
                                <span className="font-medium">{skill.name}</span>
                            </li>
                        ))}
                    </ul>
                </Section>

                {/* PROJECTS (dynamic: comes from the database) */}
                <Section id="projects">
                    <SectionTitle eyebrow="My work">Projects</SectionTitle>
                    {projects.length > 0 ? (
                        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
                            {projects.map((project) => (
                                <ProjectCard key={project.id} project={project} />
                            ))}
                        </div>
                    ) : (
                        <p className="glass rounded-2xl p-8 text-center text-white/60">
                            No projects yet. Add one from the Admin panel.
                        </p>
                    )}
                </Section>

                {/* CONTACT */}
                <Section id="contact">
                    <SectionTitle eyebrow="Get in touch">Contact</SectionTitle>
                    <div className="grid gap-4 md:grid-cols-3">
                        {contacts.map((item) => (
                            <div key={item.label} className="glass rounded-2xl p-6">
                                <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/45">{item.label}</p>
                                {item.href ? (
                                    <a href={item.href} className="break-all text-lg font-medium hover:underline">
                                        {item.value}
                                    </a>
                                ) : (
                                    <p className="text-lg font-medium">{item.value}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </Section>
            </main>

            <Footer />
        </>
    );
}
