import { useEffect, useState } from "react";

export default function ProgressBar({ timer }) {
    const [remainingTime, setRemainingTime] = useState(timer);
    useEffect(() => {
        const interval = setInterval(() => {
            console.info('setinterval');
            setRemainingTime(prevTime => prevTime - 10);
        }, 10);
        return () => {
            console.info('cleaner setinterval ');
            clearInterval(interval);
        };
    }, []);
    return (
        <progress value={remainingTime} max={timer} />
    );
};
