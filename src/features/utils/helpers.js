import {useLayoutEffect, useState} from 'react';

/**
 * Get windows size
 *
 * @returns {number[]}
 * @constructor
 */
export function WindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}

/**
 * Get windows width
 *
 * @returns {number}
 * @constructor
 */
export function WindowWidth() {
    const [width, height] = WindowSize();
    return width;
}

/**
 * Get windows height
 *
 * @returns {number}
 * @constructor
 */
export function WindowHeight() {
    const [width, height] = WindowSize();
    return height;
}
