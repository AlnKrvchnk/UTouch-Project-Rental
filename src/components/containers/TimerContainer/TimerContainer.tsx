import Timer from '@/components/atoms/Timer/Timer';
import { useEffect, useState } from 'react';

export interface Props {
    isWork: boolean;
    timeInterval: number;
    onTimeOver: () => void;
}

const TimerContainer = ({ isWork, timeInterval, onTimeOver }: Props) => {
    const [minutes, setMinutes] = useState<string>('00');
    const [seconds, setSeconds] = useState<string>('00');
    const [isTicking, setTicking] = useState<boolean>(isWork);
    const [time, setTime] = useState<number>(timeInterval);
    const [timerId, setTimerId] =
        useState<ReturnType<typeof setInterval> | number>();
    const timerStart = (time: number) => {
        const timer = setInterval(() => {
            time > 0 ? setTime(--time) : setTicking(false);
        }, 1000);
        setTimerId(timer);
    };
    const timerStop = () => {
        clearInterval(timerId);
        onTimeOver();
    };

    useEffect(() => {
        setTime(timeInterval);
        setTicking(isWork);
        isTicking ? timerStart(timeInterval) : timerStop();
    }, [isTicking]);

    useEffect(() => {
        const m = String(Math.trunc(time / 60));
        const s = String(time % 60);
        setMinutes(m.length === 1 ? `0${m}` : m);
        setSeconds(s.length === 1 ? `0${s}` : s);
    }, [time]);

    useEffect(() => {
        setTicking(isWork);
    }, [isWork]);
    return <Timer minutes={minutes} seconds={seconds} />;
};
export default TimerContainer;
