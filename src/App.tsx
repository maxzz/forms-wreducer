import { FormWithReducer } from "@/components/FormWithReducer";
import { BWSwitch } from '@/components/BWSwitch';
import { AppHeader } from "./components/AppHeader";

function App() {
    return (
        <div
            className="h-screen relative debug-screens flex flex-col"
            style={{ backgroundImage: 'radial-gradient(circle at right bottom, #85b2ff, #9fc7ff)' }}
        >
            <div>
                <AppHeader />
                <BWSwitch />
            </div>

            <FormWithReducer />
        </div>
    );
}

export default App;

//TODO: yup validation
//TODO: <dialog>
