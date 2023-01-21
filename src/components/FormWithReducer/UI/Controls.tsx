import { HTMLAttributes, InputHTMLAttributes, SelectHTMLAttributes } from "react";
import { classNames } from "@/utils/classnames";
import "./controls.css";

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
                    "px-3 py-1.5 text-indigo-900 bg-indigo-200 rounded",
                    "outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-100/70 focus:ring-offset-indigo-500/70",
                    "placeholder:text-indigo-300",
                    className
                )}
                {...rest}
            />

            <ErrorMessage error={error} />
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

            <ErrorMessage error={error} />
        </label>
    );
}

export function Radio({ label, error, className, ...rest }: { label: string; error?: string; } & InputHTMLAttributes<HTMLInputElement>) {
    return (
        <label className="flex items-center space-x-2">
            <input
                className="w-6 h-6 form-radio tm-input-radio"
                type="radio"
                name="radio"
            />

            <div className="mb-1 text-indigo-200">
                {label}
            </div>
        </label>
    );
}

export function RadioGroup({ error, children, ...rest }: { error?: string; } & InputHTMLAttributes<HTMLDivElement>) {
    return (
        <div {...rest}>
            {children}
            <ErrorMessage error={error} />
        </div>
    );
}

export function Select({ label, error, children, ...rest }: { label: string; error?: string; } & SelectHTMLAttributes<HTMLSelectElement>) {
    return (<>
        <label className="grid select-none">
            <div className="mb-1 text-indigo-200">
                {label}
            </div>

            <select
                {...rest}
                className={classNames(
                    "px-3 py-1.5 text-indigo-900 bg-indigo-200 rounded",
                    "outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-100/70 focus:ring-offset-indigo-500/70",
                    "tm-input-select",
                    !!error && "ring-red-400 ring-2",
                )}
            >
                {children}
            </select>

            <ErrorMessage error={error} />
        </label>
    </>);
}
