import React from 'react';

export function AppHeader() {
    return (
        <ul className="px-4 py-2 text-xl font-semibold text-indigo-800 flex justify-center space-x-4">
            <li>
                <button>Non-Modal Dialog</button>
            </li>
            <li>
                <button>Modal Dialog</button>
            </li>
        </ul>
    );
}
