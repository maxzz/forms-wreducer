import { initialState } from "@/components/FormWithReducer/types";
import { atomWithCallback } from "@/utils/atomsX";


export const formDataAtom = atomWithCallback(initialState, ({get, set, nextValue}) => {
    console.log('%cnew data to save', 'color: orange', nextValue);
});
