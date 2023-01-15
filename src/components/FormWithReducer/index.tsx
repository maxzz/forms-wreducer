import React from 'react';

export function FormWithReducer() {
    return (
        <section className="h-full grid place-content-center place-items-center grid-rows-1">
            <form className="bg-orange-500">
                <label className="grid">
                    <div className="">Username</div>
                    <input
                        type="text"
                    />
                </label>
            </form>
        </section>
    );
}
