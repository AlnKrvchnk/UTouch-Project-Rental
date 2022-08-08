import Timer from '@Components/atoms/Timer/Timer';
import { useState } from 'react';

function App() {
    const [timerWork, setWork] = useState<boolean>(true);
    return (
        <Timer
            isWork={timerWork}
            timeInterval={100}
            timeOver={() => {
                setWork(false);
            }}
        ></Timer>
    );
}

export default App;
