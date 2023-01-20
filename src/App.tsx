import { FormWithReducer } from "@/components/FormWithReducer";
import { BWSwitch } from '@/components/BWSwitch';

function App() {
    return (
        <div
            className="h-screen relative debug-screens flex flex-col"
            style={{ backgroundImage: 'radial-gradient(circle at right bottom, #85b2ff, #9fc7ff)' }}
        >
            <div>
                <ul className="px-4 py-2 text-xl font-semibold text-indigo-800 flex justify-center space-x-4">
                    <li>
                        <button>Non-Modal Dialog</button>
                    </li>
                    <li>
                        <button>Modal Dialog</button>
                    </li>
                </ul>

                <BWSwitch />
            </div>
            
            <FormWithReducer />
        </div>
    );
}

export default App;

//TODO: yup validation
//TODO: <dialog>
