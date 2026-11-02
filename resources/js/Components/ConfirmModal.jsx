// Reusable "are you sure?" dialog used before deleting a record.
export default function ConfirmModal({ open, title, message, onConfirm, onCancel, processing = false }) {
    if (!open) return null;

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
            <div role="dialog" aria-modal="true" className="glass w-full max-w-md rounded-2xl bg-[#0d0d0d]/90 p-6 shadow-2xl">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-500/20 text-2xl">🗑️</div>
                <h3 className="mb-2 text-xl font-bold">{title}</h3>
                <p className="mb-6 text-white/70">{message}</p>
                <div className="flex justify-end gap-3">
                    <button
                        type="button"
                        onClick={onCancel}
                        className="rounded-lg border border-white/25 px-5 py-2 font-semibold transition hover:bg-white/10"
                    >
                        Cancel
                    </button>
                    <button
                        type="button"
                        onClick={onConfirm}
                        disabled={processing}
                        className="rounded-lg bg-red-600 px-5 py-2 font-semibold transition hover:bg-red-500 disabled:opacity-50"
                    >
                        {processing ? 'Deleting...' : 'Yes, delete'}
                    </button>
                </div>
            </div>
        </div>
    );
}
