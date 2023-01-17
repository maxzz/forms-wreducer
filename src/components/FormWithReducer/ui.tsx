import { InputHTMLAttributes } from "react";

export function Input({ label, ...rest }: { label: string; } & InputHTMLAttributes<HTMLInputElement>) {
    return (
        <label className="grid">
            <div className="mb-1">{label}</div>
            <input className="px-4 py-1.5 rounded" {...rest} />
            <div className="invisible_ text-red-800">error</div>
        </label>
    );
}

export function Button() {
    return (
        <button className="self-end px-3 py-2 min-w-[12ch] border-violet-400 border rounded">OK</button>
    );
}
