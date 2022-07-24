import {useWindowMouseFactors} from "../../base";

export function RootAnimationBg() {

    const factors = useWindowMouseFactors()

    return (
        <div className={"RootBg"}>
            <div className={"Square Square-1"}
                 style={{
                     "right": -152 + Math.ceil(20 * factors.x) + "px",
                     "bottom": 110 + Math.ceil(20 * factors.y) + "px",
                 }}/>
            <div className={"Square Square-2"}
                 style={{
                     "right": -103 + Math.ceil(100 * factors.x) + "px",
                     "top": -203 + Math.ceil(80 * factors.y) + "px",
                 }}/>
            <div className={"Circle Circle-2"}
                 style={{
                     "left": 100 + Math.ceil(80 * factors.x * -1) + "px",
                     "top": 200 + Math.ceil(200 * factors.y * -1) + "px",
                 }}/>
            <div className={"Circle Circle-3"}
                 style={{
                     "right": 110 + Math.ceil(60 * factors.x * -1) + "px",
                     "top": 35 + Math.ceil(110 * factors.y) + "px",
                 }}/>
            <div className={"Square Square-3"}
                 style={{
                     "left": 200 + Math.ceil(50 * factors.x) + "px",
                     "top": 230 + Math.ceil(50 * factors.y) + "px",
                 }}/>
            <div className={"Circle Circle-1"}
                 style={{
                     "left": -65 + Math.ceil(20 * factors.x * -1) + "px",
                     "bottom": 150 + Math.ceil(80 * factors.y * -1) + "px",
                 }}/>
        </div>
    );
}