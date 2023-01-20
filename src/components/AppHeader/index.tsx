import React, { HTMLAttributes } from 'react';
import { useSetAtom } from 'jotai';
import { currentScreenAtom } from '@/store';
import { classNames } from '@/utils/classnames';

function Button({ form, children, ...rest }: { form: number; } & HTMLAttributes<HTMLButtonElement>) {
    const setScreen = useSetAtom(currentScreenAtom);
    return (
        <button
            className={classNames(
                "px-4 py-2 text-xl font-semibold text-indigo-800 bg-indigo-200 hover:bg-indigo-100 active:scale-[.97]",
            )}
            onClick={() => setScreen(form)} {...rest}
        >
            {children}
        </button>
    );
}

export function AppHeader() {
    return (
        <div className="flex justify-center space-x-2">
            <Button form={0}>Non-Modal Dialog</Button>
            <Button form={1}>Modal Dialog</Button>
        </div>
    );
}
