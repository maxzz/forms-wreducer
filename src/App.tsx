import { FormWithReducer } from "@/components/FormWithReducer";
import { BWSwitch } from '@/components/BWSwitch';

function App() {
    return (
        <div className="h-screen relative" style={{ backgroundImage: 'radial-gradient(circle at right bottom, #85b2ff, #9fc7ff)' }}>
            <BWSwitch />
            <FormWithReducer />
        </div>
    );
}

export default App;
