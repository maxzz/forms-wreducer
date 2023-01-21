/**
 * Corresponds to 10 frames at 60 Hz.
 * A few bytes payload overhead when lodash/debounce is ~3 kB and debounce ~300 B.
 * 
 * https://github.com/mui/material-ui/blob/master/packages/mui-utils/src/debounce.js
 * 
 * @param func 
 * @param wait 
 * @returns 
 */
export interface Cancelable {
    clear(): void;
}

export function debounce<T extends (this: any, ...args: any[]) => any, This>(func: T, wait: number = 166): T & Cancelable {
    let timeout: ReturnType<typeof setTimeout> | undefined;
    
    function debounced(this: any, ...args: any[]) {
        const later = () => {
            func.apply(this, args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    }

    debounced.clear = () => {
        timeout && (clearTimeout(timeout), timeout = undefined);
    };

    return debounced as T & Cancelable;
}
