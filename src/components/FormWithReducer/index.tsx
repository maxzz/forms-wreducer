import { useReducer } from 'react';
import { Input, Button } from './ui';

type State = {
    name: string;
    password: string;
};

//type ActionType = 'setName' | 'setPassword';

type ActionName = {
    type: 'setName',
    payload: { name: string; };
};

type ActionPassword = {
    type: 'setPassword',
    payload: { password: string; };
};

type Action = ActionName | ActionPassword;

function reducer(state: State, action: Action) {
    switch (action.type) {
        case 'setName': {
            return {
                ...state,
                ...action.payload,
            };
        }
        case 'setPassword': {
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
    password: "",
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
                    onChange={(e) => reduceState({ type: 'setPassword', payload: { password: e.target.value } })}
                />

                <div className="my-8 p-4 text-center bg-violet-300 rounded">
                    {state.name}
                </div>

                <Button />
            </form>
        </section>
    );
}
