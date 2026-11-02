import { useEffect, useState } from 'react';
import { usePage } from '@inertiajs/react';

// Shows the success message set by the controller (->with('success', ...)) and hides it after 4 seconds.
export default function FlashMessage() {
    const { flash } = usePage().props;
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (flash?.success) {
            setShow(true);
            const timer = setTimeout(() => setShow(false), 4000);
            return () => clearTimeout(timer);
        }
        setShow(false);
    }, [flash]);

    if (!show || !flash?.success) return null;

    return (
        <div
            role="status"
            className="glass mb-6 flex items-center justify-between gap-4 rounded-xl border-emerald-400/40 px-5 py-3.5 text-emerald-100"
        >
            <span>✅ {flash.success}</span>
            <button type="button" onClick={() => setShow(false)} aria-label="Dismiss" className="text-white/60 hover:text-white">
                ✕
            </button>
        </div>
    );
}
