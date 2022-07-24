import {useLayoutEffect, useState} from 'react';

/**
 * Get windows size
 *
 * @returns {{x: number, y: number}}
 */
export function useWindowMouseMove(effect = undefined) {

    const [size, setSize] = useState({
        x: window.innerWidth,
        y: window.innerHeight
    });

    useLayoutEffect(() => {
        const handleWindowResize = (event) => {

            const result = {
                x: event.clientX,
                y: event.clientY,
            }

            setSize(result);

            if (effect !== undefined) {
                effect(result)
            }
        };
        window.addEventListener('mousemove', handleWindowResize);
        return () => {
            window.removeEventListener('mousemove', handleWindowResize);
        };
    });

    return size;
}