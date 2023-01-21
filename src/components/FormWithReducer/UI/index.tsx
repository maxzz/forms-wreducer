import { ButtonHTMLAttributes, HTMLAttributes } from "react";
import { classNames } from "@/utils";
export * from './Controls';

export function DialogCaption({ label, className, ...rest }: { label: string; } & HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={classNames("p-4 text-2xl font-semibold text-indigo-200 bg-indigo-900", className)}
            style={{ WebkitTextFillColor: 'transparent', WebkitTextStrokeColor: '#e8e8e8', WebkitTextStroke: '.3px' }}
            {...rest}
        >
            <div className="scale-y-125 tracking-tighter">{label}</div>
        </div>
    );
}

export function StateDisplay({ state, className, ...rest }: { state: object; } & HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={classNames("mt-8 text-xs", className)} {...rest}>
            <div className="px-2 text-indigo-100">State</div>

            <div className="px-2 py-1 text-xs text-indigo-100 bg-violet-300/10 rounded whitespace-pre">
                {JSON.stringify(state, null, 4)}
            </div>
        </div>
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
