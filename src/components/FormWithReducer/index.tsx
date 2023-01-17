import React, { InputHTMLAttributes, useReducer } from 'react';

type ActionType = 'setName' | 'setZip';

type Payload = {
    name: string;
};

type State = {
    name: string;
};

function Input({ label, ...rest }: { label: string; } & InputHTMLAttributes<HTMLInputElement>) {
    return (
        <label className="grid">
            <div className="mb-1">{label}</div>
            <input className="px-4 py-1.5 rounded" {...rest} />
            <div className="invisible_ text-red-800">error</div>
        </label>
    );
}

export function FormWithReducer() {
    const [state, stateReducer] = useReducer(
        (state: State, action: { type: ActionType, payload: Payload; }) => {
            switch (action.type) {
                case 'setName': {
                    return {
                        ...state,
                        ...action.payload,
                    };
                }
            }
            return state;
        },
        {
            name: "Jack",
        }
    );
    return (
        <section className="h-full grid place-content-center place-items-center">
            <form className="p-4 min-w-[44ch] bg-violet-500 rounded-md">

                <Input
                    label="Username"
                    type="text"
                    value={state.name}
                    onChange={(e) => stateReducer({ type: 'setName', payload: { name: e.target.value } })}
                />

                <Input
                    label="Password"
                    type="password"
                    value={state.name}
                    onChange={(e) => stateReducer({ type: 'setName', payload: { name: e.target.value } })}
                />

                {/* <label className="grid">
                    <div className="">Username</div>
                    <input
                        type="text"
                        value={state.name}
                        onChange={(e) => stateReducer({ type: 'setName', payload: { name: e.target.value } })}
                    />
                </label> */}

                <div className="mt-8">
                    {state.name}
                </div>

            </form>
        </section>
    );
}
