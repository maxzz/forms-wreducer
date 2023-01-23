export type State = {
    name: string;
    password: string;
    agree: boolean;
    job: string;
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

type ActionJob = {
    type: 'setJob',
    payload: { job: string; };
};

export type Action = ActionName | ActionPassword | ActionAgree | ActionJob;

export function reducer(state: State, action: Action) {
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

export const initialState = {
    name: "Jack",
    password: "none",
    agree: true,
    job: "",
};
