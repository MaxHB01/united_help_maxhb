import { useEffect, useState } from "react";
import { extractValue } from "@utils";

type CountingAnimationProps = {
    value: number | string;
    duration: number;
}

export default function CountingAnimation({value, duration}: CountingAnimationProps) {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const {prefix, number, suffix} = extractValue(value);
    const [count, setCount] = useState(0);
    const [animationFrameId, setAnimationFrameId] = useState<number | null>(null);

    useEffect(() => {
        if(prefersReducedMotion) {
            setCount(number);
            return;
        }

        const increment = number / (duration / 1000);
        const startTimestamp = performance.now();

        const updateCount = (timestamp: number) => {
            const elapsed = timestamp - startTimestamp;
            const newCount = Math.min(number, Math.floor(increment * elapsed / 1000));
            setCount(newCount);

            if (elapsed < duration) {
                setAnimationFrameId(requestAnimationFrame(updateCount));
            }
        };

        setAnimationFrameId(requestAnimationFrame(updateCount));

        return () => {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, [duration, value, prefersReducedMotion]);

    return (
        <>
            {prefix}
            <span>{count}</span>
            {suffix}
        </>
    );
}
