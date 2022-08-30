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

        const el = document.getElementById("pageSelection")

        const handleWindowScroll = () => {

            const result = {
                x: el.scrollLeft,
                y: el.scrollTop,
            }

            setPosition(result);

            if (effect !== undefined) {
                effect(result)
            }
        };
        el.addEventListener('scroll', handleWindowScroll);
        return () => {
            el.removeEventListener('scroll', handleWindowScroll);
        };
    });

    return position;
}
