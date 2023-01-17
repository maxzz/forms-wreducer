import { classNames } from "@/utils/classnames";
import { ButtonHTMLAttributes, InputHTMLAttributes } from "react";

export function Input({ label, error, className, ...rest }: { label: string; error?: string; } & InputHTMLAttributes<HTMLInputElement>) {
    return (
        <label className="select-none grid">
            <div className="mb-1 text-indigo-200">
                {label}
            </div>

            <input className="px-4 py-1.5 text-indigo-900 bg-indigo-200 rounded" {...rest} />

            <div
                className={classNames(!error && "invisible", "text-xs font-semibold text-red-300 min-h-[1rem]", className)}
                style={{ textShadow: '0px 0px 2px red' }}
            >
                {error}
            </div>
        </label>
    );
}

export function Button({ label, className, ...rest }: { label: string; } & ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button className={classNames("self-end px-3 py-2 text-indigo-200 border-indigo-400/50 border rounded", className)} {...rest}>
            {label}
        </button>
    );
}
