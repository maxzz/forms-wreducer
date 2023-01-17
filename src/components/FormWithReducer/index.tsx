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

function Button() {
    return (
        <button className="self-end px-3 py-2 min-w-[12ch] border-violet-400 border rounded">OK</button>
    );
}

function reducer(state: State, action: { type: ActionType, payload: Payload; }) {
    switch (action.type) {
        case 'setName': {
            return {
                ...state,
                ...action.payload,
            };
        }
    }
    return state;
}

const initialState = {
    name: "Jack",
};

export function FormWithReducer() {
    const [state, reduceState] = useReducer(reducer, initialState);
    return (
        <section className="h-full grid place-content-center place-items-center">
            <form className="p-4 min-w-[44ch] bg-violet-500 rounded-md flex flex-col">

                <div className="text-violet-200 bg-violet-900">Caption</div>

                <Input
                    label="Username"
                    type="text"
                    value={state.name}
                    onChange={(e) => reduceState({ type: 'setName', payload: { name: e.target.value } })}
                />

                <Input
                    label="Password"
                    type="password"
                    value={state.name}
                    onChange={(e) => reduceState({ type: 'setName', payload: { name: e.target.value } })}
                />

                {/* <label className="grid">
                    <div className="">Username</div>
                    <input
                        type="text"
                        value={state.name}
                        onChange={(e) => stateReducer({ type: 'setName', payload: { name: e.target.value } })}
                    />
                </label> */}

                <div className="my-8 p-4 text-center bg-violet-300 rounded">
                    {state.name}
                </div>

                <Button />
            </form>
        </section>
    );
}
