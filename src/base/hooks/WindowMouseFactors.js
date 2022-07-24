import {useWindowMouseMove} from "./WindowMouseMove";
import {useState} from "react";

/**
 * Get windows size
 *
 * @returns {{x: number, y: number}}
 */
export function useWindowMouseFactors() {

    const [factors, setFactors] = useState({x: 0, y: 0});

    useWindowMouseMove((position) => {
        const {innerWidth: width, innerHeight: height} = window;
        setFactors({
            x: (position.x * 100) / width * 0.01,
            y: (position.y * 100) / height * 0.01,
        });
    })

    return factors;
}