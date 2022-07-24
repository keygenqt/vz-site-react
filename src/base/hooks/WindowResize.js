import {useLayoutEffect, useState} from 'react';

/**
 * Get windows size
 *
 * @returns {{width: number, height: number}}
 */
export function useWindowResize(effect = undefined) {

    const [size, setSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    useLayoutEffect(() => {
        const handleWindowResize = () => {

            const result = {
                width: window.innerWidth,
                height: window.innerHeight,
            }

            setSize(result);

            if (effect !== undefined) {
                effect(result)
            }
        };
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    return size;
}
