import {useWindowMouseFactor} from "../../base";

export function TitleSquareAnimation() {

    const factor = useWindowMouseFactor()

    return (
        <div className={"TitleSquare"}>
            <div className={"Square Square-1"}
                 style={{
                     transform: 'rotate(' + (270 + Math.ceil(300 * factor)) + 'deg)'
                 }}/>
        </div>
    );
}