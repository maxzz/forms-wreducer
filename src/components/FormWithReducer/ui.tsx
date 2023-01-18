import { classNames } from "@/utils/classnames";
import { ButtonHTMLAttributes, HTMLAttributes, InputHTMLAttributes } from "react";

function ErrorMessage({ error, className }: { error?: string; } & HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={classNames(!error && "invisible", "min-h-[1.25rem] pt-1 text-xs font-semibold text-red-300", className)}
            style={{ textShadow: '0px 0px 2px red' }}
        >
            {error}
        </div>

    );
}

export function Input({ label, error, className, ...rest }: { label: string; error?: string; } & InputHTMLAttributes<HTMLInputElement>) {
    return (
        <label className="select-none grid">
            <div className="mb-1 text-indigo-200">
                {label}
            </div>

            <input
                className={classNames(
                    "px-4 py-1.5 text-indigo-900 bg-indigo-200 rounded",
                    "outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-100/70 focus:ring-offset-indigo-500/70",
                    className
                )}
                {...rest}
            />

            <ErrorMessage error={error}/>
        </label>
    );
}

export function Checkbox({ label, error, className, ...rest }: { label: string; error?: string; } & InputHTMLAttributes<HTMLInputElement>) {
    return (
        <label className="mt-4 select-none grid">
            <div className="flex items-center space-x-2">
                <input
                    className={classNames(
                        "form-checkbox w-6 h-6 text-indigo-900 bg-indigo-200 rounded",
                        "outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-100/70 focus:ring-offset-indigo-500/70",
                        className
                    )}
                    {...rest}
                />
                <div className="mb-1 text-indigo-200">
                    {label}
                </div>

            </div>

            <ErrorMessage error={error}/>
        </label>
    );
}

export function Button({ label, className, ...rest }: { label: string; } & ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            className={classNames(
                "px-3 py-2 text-indigo-200 border-indigo-400/50 border rounded shadow active:scale-[.97]",
                "outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-100/30 focus:ring-offset-indigo-900/30",
                className
            )}
            {...rest}
        >
            {label}
        </button>
    );
}
