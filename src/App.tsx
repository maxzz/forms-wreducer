import { useAtomValue } from "jotai";
import { currentScreenAtom } from "./store";
import { BWSwitch } from '@/components/BWSwitch';
import { AppHeader } from "./components/AppHeader";
import { FormWithReducer } from "@/components/FormWithReducer";
import { initialState } from "./components/FormWithReducer/types";

function App() {
    const screen = useAtomValue(currentScreenAtom);
    return (
        <div
            className="h-screen relative debug-screens flex flex-col"
            style={{ backgroundImage: 'radial-gradient(circle at right bottom, #85b2ff, #9fc7ff)' }}
        >
            <div>
                <AppHeader />
                <BWSwitch />
            </div>

            {screen === 0 && <FormWithReducer initialState={initialState} />}
            {screen === 1 && <div className="">TODO</div> }
        </div>
    );
}

export default App;

//TODO: yup validation
//TODO: <dialog>
