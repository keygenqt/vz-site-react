import {useWindowMouseFactor} from "../../base";
import {Fade} from "@mui/material";

export function TitleSquareAnimation() {

    const factor = useWindowMouseFactor()

    return (
        <Fade timeout={500} in={true}>
            <div className={"TitleSquare"}>
                <div className={"Square Square-1"}
                     style={{
                         transform: 'rotate(' + (270 + Math.ceil(300 * factor)) + 'deg)'
                     }}/>
            </div>
        </Fade>
    );
}