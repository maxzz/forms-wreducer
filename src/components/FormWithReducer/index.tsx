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
            <div className="">{label}</div>
            <input {...rest} />
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
        <section className="h-full grid place-content-center place-items-center grid-rows-1">
            <form className="bg-orange-500">

                <Input
                    label="Username"
                    type="text"
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

                {state.name}
            </form>
        </section>
    );
}
