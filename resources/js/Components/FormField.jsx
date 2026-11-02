// Label + input slot + validation error shown right under the field.
export default function FormField({ label, htmlFor, error, hint, children }) {
    return (
        <div className="flex flex-col gap-2">
            <label htmlFor={htmlFor} className="text-sm font-semibold text-white/85">
                {label}
            </label>
            {children}
            {hint && !error && <small className="text-xs text-white/45">{hint}</small>}
            {error && <p className="text-sm text-red-400">❌ {error}</p>}
        </div>
    );
}
