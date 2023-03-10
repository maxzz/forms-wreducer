import { useReducer } from 'react';
import { State } from './types';
import { Input, Button, Checkbox, StateDisplay, DialogCaption, Select, RadioGroup, Radio } from './UI';
import confetti from 'canvas-confetti';

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

type ActionJob = {
    type: 'setJob',
    payload: { job: string; };
};

type Actions<T> = {
    [key in keyof T & string]: {
        type: `set${Capitalize<key>}`,
        payload: {
            key: T[key];
        };
    }
};
//type Action = Actions<State>;
/*
type Action = {
    name: {
        type: "setName";
        payload: {
            key: string;
        };
    };
    password: {
        type: "setPassword";
        payload: {
            key: string;
        };
    };
    agree: {
        type: "setAgree";
        payload: {
            key: boolean;
        };
    };
    job: {
        type: "setJob";
        payload: {
            key: string;
        };
    };
}
*/

type ActionKey<T> = keyof T & string;
type Actions1<T> =
    {
        type: `set${Capitalize<ActionKey<T>>}`,
        payload: {
            key: T[ActionKey<T>];
        };
    }
    ;
type Action1 = Actions1<State>;
/*
type Action1 = {
    type: "setName" | "setPassword" | "setAgree" | "setJob";
    payload: {
        key: string | boolean;
    };
}
*/

type Actions3<T> = T extends any ? {
    type: `set${Capitalize<ActionKey<T>>}`;
    payload: {
        key: T[ActionKey<T>];
    };
} : never;
/*
type Action3 = {
    type: "setName" | "setPassword" | "setAgree" | "setJob";
    payload: {
        key: string | boolean;
    };
}
*/
type Action3 = Actions3<State>;

// type Actions4<T> = T extends { type: string; payload: { key: T[ActionKey<T>]; }; } ? {
//     type: `set${Capitalize<ActionKey<T['type']>>}`;
//     payload: {
//         [T]: T[ActionKey<T>];
//     };
// } : never;
// type Actions4<T> = T extends { [TKey in keyof T]: T[TKey] } ? {
//
// type Actions4<T> = T extends { [TKey in keyof T]: infer V } ? {
//     type: `set${Capitalize<TKey>}`;
//     payload: {
//         aa: V;
//     };
// } : never;

// type Action4 = Actions4<State>;

type Action = ActionName | ActionPassword | ActionAgree | ActionJob;

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
        case 'setJob': {
            return {
                ...state,
                ...action.payload,
            };
        }
    }
    throw new Error('reduce');
}

export function FormWithReducer({ initialState }: { initialState: State; }) {
    const [state, reduceState] = useReducer(reducer, initialState);
    return (
        <section className="h-full grid place-content-center place-items-center">
            <form className="min-w-[44ch] md:min-w-[54ch] bg-indigo-900/70 rounded-md flex flex-col overflow-hidden shadow">

                <DialogCaption label="UI elements" />

                <div className="p-4">
                    <Input
                        label="Username"
                        placeholder="Username"
                        type="text"
                        value={state.name}
                        onChange={(e) => reduceState({ type: 'setName', payload: { name: e.target.value } })}
                        error={state.name ? undefined : "This field is required."}
                    />

                    <Input
                        label="Password"
                        placeholder="Password"
                        type="password"
                        value={state.password}
                        onChange={(e) => reduceState({ type: 'setPassword', payload: { password: e.target.value } })}
                        error={state.password ? undefined : "This field is required."}
                    />

                    <Checkbox
                        label="Old enought"
                        type="checkbox"
                        checked={state.agree}
                        onChange={(e) => reduceState({ type: 'setAgree', payload: { agree: e.target.checked } })}
                        error={state.agree ? undefined : "This field is required."}
                    />

                    <RadioGroup className="text-indigo-200 flex space-x-2">
                        <Radio label="one" />
                        <Radio label="of" />
                        <Radio label="us" />
                    </RadioGroup>

                    <Select
                        label="Job Type"
                        name="jobType"
                        placeholder="Select a job"
                        value={state.job}
                        onChange={(e) => reduceState({ type: 'setJob', payload: { job: e.target.value } })}
                        error={state.job ? undefined : "This field is required."}
                    >
                        <option value="">Please select a job type</option>
                        <option value="developer">Developer</option>
                        <option value="designer">Designer</option>
                        <option value="manager">Product Manager</option>
                        <option value="other">Other</option>
                    </Select>

                    <StateDisplay state={state} />
                </div>

                <Button label="OK" className="self-end mx-4 mb-4 min-w-[12ch]" onClick={(e) => {
                    e.preventDefault();
                    confetti({
                        particleCount: 150,
                        spread: 60
                    });
                }} />
            </form>
        </section >
    );
}
