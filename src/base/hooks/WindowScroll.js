import {useLayoutEffect, useState} from 'react';

/**
 * Get windows size
 *
 * @returns {{x: number, y: number}}
 */
export function useWindowScroll(effect = undefined) {

    const [position, setPosition] = useState({
        x: window.scrollX,
        y: window.scrollY,
    });

    useLayoutEffect(() => {
        const handleWindowScroll = () => {

            const result = {
                x: window.scrollX,
                y: window.scrollY,
            }

            setPosition(result);

            if (effect !== undefined) {
                effect(result)
            }
        };
        window.addEventListener('scroll', handleWindowScroll);
        return () => {
            window.removeEventListener('scroll', handleWindowScroll);
        };
    });

    return position;
}
