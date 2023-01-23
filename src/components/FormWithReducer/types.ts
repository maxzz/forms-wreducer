export type State = {
    name: string;
    password: string;
    agree: boolean;
    job: string;
};

export const initialState = {
    name: "Jack",
    password: "none",
    agree: true,
    job: "",
};
