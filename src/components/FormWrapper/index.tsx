import React from 'react';
import { useSetAtom } from 'jotai';
import { formDataAtom } from '@/store';
import { initialState } from '../FormWithReducer/types';
import { FormWithReducer } from '../FormWithReducer';

export function FormWrapper() {
    const setFormData = useSetAtom(formDataAtom);
    return (
        <div>
            index
            <FormWithReducer initialState={initialState} />
        </div>
    );
}
