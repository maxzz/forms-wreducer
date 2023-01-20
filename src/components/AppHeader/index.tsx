import React from 'react';
import { useSetAtom } from 'jotai';
import { currentScreenAtom } from '@/store';

export function AppHeader() {
    const setScreen = useSetAtom(currentScreenAtom);
    return (
        <ul className="px-4 py-2 text-xl font-semibold text-indigo-800 flex justify-center space-x-4">
            <li>
                <button onClick={() => setScreen(0)}>Non-Modal Dialog</button>
            </li>
            <li>
                <button onClick={() => setScreen(1)}>Modal Dialog</button>
            </li>
        </ul>
    );
}
