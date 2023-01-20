import React, { HTMLAttributes } from 'react';
import { useSetAtom } from 'jotai';
import { currentScreenAtom } from '@/store';

function Button({ form, children, ...rest }: { form: number; } & HTMLAttributes<HTMLButtonElement>) {
    const setScreen = useSetAtom(currentScreenAtom);
    return (
        <button onClick={() => setScreen(form)} {...rest}>
            {children}
        </button>
    );
}

export function AppHeader() {
    return (
        <ul className="px-4 py-2 text-xl font-semibold text-indigo-800 flex justify-center space-x-4">
            <li>
                <Button form={0}>Non-Modal Dialog</Button>
            </li>
            <li>
                <Button form={1}>Modal Dialog</Button>
            </li>
        </ul>
    );
}
