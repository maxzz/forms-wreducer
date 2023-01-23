import { useReducer } from 'react';
import { reducer, initialState } from './reducer';
import { Input, Button, Checkbox, StateDisplay, DialogCaption, Select, RadioGroup, Radio } from './UI';

export function FormWithReducer() {
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

                <Button label="OK" className="self-end mx-4 mb-4 min-w-[12ch]" onClick={(e) => e.preventDefault()} />
            </form>
        </section >
    );
}
