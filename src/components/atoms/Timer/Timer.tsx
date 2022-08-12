import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';

export interface Props {
    isWork: boolean;
    timeInterval: number;
    timeOver: () => void;
}

const Timer = ({ isWork, timeInterval, timeOver }: Props) => {
    const [minutes, setMinutes] = useState<string | undefined>();
    const [seconds, setSeconds] = useState<string | undefined>();
    const [isTicking, setTicking] = useState<boolean>(isWork);
    const [time, setTime] = useState<number>(timeInterval);
    const [timerId, setTimerId] =
        useState<ReturnType<typeof setInterval> | number>();

    useEffect(() => {
        setTime(timeInterval);
        setTicking(isWork);
        isTicking ? timerStart(timeInterval) : timerStop();
    }, [isTicking]);

    const timerStart = (time: number) => {
        const timer = setInterval(() => {
            time > 0 ? setTime(--time) : setTicking(false);
        }, 1000);
        setTimerId(timer);
    };
    const timerStop = () => {
        clearInterval(timerId);
        timeOver();
    };

    useEffect(() => {
        const m = String(Math.trunc(time / 60));
        const s = String(time % 60);
        setMinutes(m.length === 1 ? `0${m}` : m);
        setSeconds(s.length === 1 ? `0${s}` : s);
    }, [time]);

    useEffect(() => {
        setTicking(isWork);
    }, [isWork]);
    return (
        <Typography variant="h6" color={'text.disabled'}>
            {minutes}:{seconds}
        </Typography>
    );
};
export default Timer;
