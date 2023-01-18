import { useReducer } from 'react';
import { Input, Button, Checkbox, StateDisplay, DialogCaption } from './UI';

type State = {
    name: string;
    password: string;
    agree: boolean;
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

type ActionAgree = {
    type: 'setAgree',
    payload: { agree: boolean; };
};

type Action = ActionName | ActionPassword | ActionAgree;

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
        case 'setAgree': {
            return {
                ...state,
                ...action.payload,
            };
        }
    }
    throw new Error('reduce');
}

const initialState = {
    name: "Jack",
    password: "",
    agree: true,
};

export function FormWithReducer() {
    const [state, reduceState] = useReducer(reducer, initialState);
    return (
        <section className="h-full grid place-content-center place-items-center">
            <form className="min-w-[44ch] bg-indigo-900/70 rounded-md flex flex-col overflow-hidden">

                <DialogCaption label="UI elements" />

                <div className="p-4">
                    <Input
                        label="Username"
                        type="text"
                        value={state.name}
                        onChange={(e) => reduceState({ type: 'setName', payload: { name: e.target.value } })}
                        error={state.name ? undefined : "This field is required."}
                    />

                    <Input
                        label="Password"
                        type="password"
                        value={state.password}
                        onChange={(e) => reduceState({ type: 'setPassword', payload: { password: e.target.value } })}
                        error={state.password ? undefined : "This field is required."}
                    />

                    <Checkbox
                        label="18+"
                        type="checkbox"
                        checked={state.agree}
                        onChange={(e) => reduceState({ type: 'setAgree', payload: { agree: e.target.checked } })}
                        error={state.agree ? undefined : "This field is required."}
                    />

                    <StateDisplay state={state} />
                </div>

                <Button label="OK" className="self-end mx-4 mb-4 min-w-[12ch]" onClick={(e) => e.preventDefault()} />
            </form>
        </section>
    );
}
