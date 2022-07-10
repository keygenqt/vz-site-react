import {useEffect, useState} from 'react';

function RootAnimationBg() {

    const [globalFactor, setGlobalFactor] = useState({x: 0, y: 0});

    useEffect(() => {
        const handleWindowMouseMove = event => {
            const {innerWidth: width, innerHeight: height} = window;
            setGlobalFactor({
                x: (event.clientX * 100) / width * 0.01,
                y: (event.clientY * 100) / height * 0.01,
            });
        };
        window.addEventListener('mousemove', handleWindowMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleWindowMouseMove);
        };
    }, []);

    return (
        <div className={"Root-bg"}>
            <div className={"Square Square-1"}
                 style={{
                     "right": -152 + Math.ceil(20 * globalFactor.x) + "px",
                     "bottom": 309 + Math.ceil(20 * globalFactor.y) + "px",
                 }}/>
            <div className={"Square Square-2"}
                 style={{
                     "right": -103 + Math.ceil(100 * globalFactor.x) + "px",
                     "top": -96 + Math.ceil(80 * globalFactor.y) + "px",
                 }}/>
            <div className={"Circle Circle-2"}
                 style={{
                     "left": 50 + Math.ceil(80 * globalFactor.x *  -1) + "px",
                     "top": 220 + Math.ceil(200 * globalFactor.y * -1) + "px",
                 }}/>
            <div className={"Circle Circle-3"}
                 style={{
                     "right": 110 + Math.ceil(60 * globalFactor.x * -1) + "px",
                     "top": 150 + Math.ceil(110 * globalFactor.y) + "px",
                 }}/>
            <div className={"Square Square-3"}
                 style={{
                     "left": 143 + Math.ceil(50 * globalFactor.x) + "px",
                     "bottom": 485 + Math.ceil(50 * globalFactor.y) + "px",
                 }}/>
            <div className={"Circle Circle-1"}
                 style={{
                     "left": 365 + Math.ceil(20 * globalFactor.x * -1) + "px",
                     "bottom": 313 + Math.ceil(80 * globalFactor.y * -1) + "px",
                 }}/>
        </div>
    );
}

export default RootAnimationBg;
