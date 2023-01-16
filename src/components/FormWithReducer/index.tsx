import React, { useReducer } from 'react';

type ActionType = 'setName' | 'setZip';

type Payload = {
    name: string;
};

type State = {
    name: string;
};

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
                
                <label className="grid">
                    <div className="">Username</div>
                    <input
                        type="text"
                        value={state.name}
                        onChange={(e) => stateReducer({ type: 'setName', payload: { name: e.target.value } })}
                    />
                </label>

                {state.name}
            </form>
        </section>
    );
}
