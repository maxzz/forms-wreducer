import { useReducer } from 'react';
import { Input, Button, Checkbox } from './ui';

type State = {
    name: string;
    password: string;
    age18: boolean;
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

type ActionAge18 = {
    type: 'setAge18',
    payload: { age18: boolean; };
};

type Action = ActionName | ActionPassword | ActionAge18;

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
        case 'setAge18': {
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
    age18: true,
};

export function FormWithReducer() {
    const [state, reduceState] = useReducer(reducer, initialState);
    return (
        <section className="h-full grid place-content-center place-items-center">
            <form className="min-w-[44ch] bg-indigo-900/70 rounded-md flex flex-col overflow-hidden">

                <div className="p-4 text-indigo-200 bg-indigo-900">Caption</div>

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
                        checked={state.age18}
                        onChange={(e) => reduceState({ type: 'setAge18', payload: { age18: e.target.checked } })}
                        error={state.age18 ? undefined : "This field is required."}
                    />

                    <div className="mt-8 text-xs">
                        <div className="text-indigo-100">State</div>

                        <div className="px-2 py-1 text-xs text-indigo-100 bg-violet-300/10 rounded whitespace-pre">
                            {JSON.stringify(state, null, 4)}
                        </div>
                    </div>
                </div>

                <Button label="OK" className="self-end mx-4 mb-4 min-w-[12ch]" onClick={(e) => e.preventDefault()} />
            </form>
        </section>
    );
}
