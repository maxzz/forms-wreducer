import { FormWithReducer } from "@/components/FormWithReducer";
import { BWSwitch } from '@/components/BWSwitch';
import { AppHeader } from "./components/AppHeader";
import { useAtomValue } from "jotai";
import { currentScreenAtom } from "./store";

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

            {screen === 0 && <FormWithReducer />}
            {screen === 1 && <div className="">TODO</div> }
        </div>
    );
}

export default App;

//TODO: yup validation
//TODO: <dialog>
