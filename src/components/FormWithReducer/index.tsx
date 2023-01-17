import { useReducer } from 'react';
import { Input, Button } from './ui';

type ActionType = 'setName' | 'setZip';

type Payload = {
    name: string;
};

type State = {
    name: string;
};

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

                <div className="my-8 p-4 text-center bg-violet-300 rounded">
                    {state.name}
                </div>

                <Button />
            </form>
        </section>
    );
}
