export default function SectionTitle({ eyebrow, children }) {
    return (
        <div className="mb-8 text-center md:text-left">
            {eyebrow && (
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/50">{eyebrow}</p>
            )}
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{children}</h2>
            <div className="mx-auto mt-3 h-[3px] w-12 rounded-full bg-white md:mx-0" />
        </div>
    );
}
