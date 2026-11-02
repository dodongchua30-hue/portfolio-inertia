import { useEffect, useRef, useState } from 'react';

// Centers the content and fades it in when it scrolls into view.
export default function Section({ id, className = '', children }) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setVisible(true);
            },
            { threshold: 0.1 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            id={id}
            ref={ref}
            className={`scroll-mt-24 px-5 py-14 transition-all duration-700 md:px-10 md:py-20 ${
                visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
        >
            <div className={`mx-auto max-w-6xl ${className}`}>{children}</div>
        </section>
    );
}
