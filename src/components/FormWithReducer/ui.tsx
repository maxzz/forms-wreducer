import { classNames } from "@/utils/classnames";
import { ButtonHTMLAttributes, InputHTMLAttributes } from "react";

export function Input({ label, error, className, ...rest }: { label: string; error?: string; } & InputHTMLAttributes<HTMLInputElement>) {
    return (
        <label className="select-none grid">
            <div className="mb-1 text-violet-200">{label}</div>
            <input className="px-4 py-1.5 rounded" {...rest} />
            <div className={classNames(!error && "invisible", "text-xs text-red-100 min-h-[1rem]", className)} style={{ textShadow: '0px 0px 4px red' }}>{error}</div>
        </label>
    );
}

export function Button({ label, ...rest }: { label: string; } & ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button className="self-end px-3 py-2 min-w-[12ch] border-violet-400 border rounded" {...rest}>
            {label}
        </button>
    );
}
