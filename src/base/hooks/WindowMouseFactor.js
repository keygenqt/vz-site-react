import {useWindowMouseFactors} from "./WindowMouseFactors";

/**
 * Get windows size
 *
 * @returns {{factor: number}}
 */
export function useWindowMouseFactor() {
    // get factors
    const factor = useWindowMouseFactors()
    // mean
    return (factor.x + factor.y) / 2;
}