import {useEffect, useState} from 'react';

function TitleSquareAnimation() {

    const [globalRandomFactor, setRandomGlobalFactor] = useState(0);

    useEffect(() => {
        const handleWindowMouseMove = event => {
            const {innerWidth: width, innerHeight: height} = window;
            const factor = {
                x: (event.clientX * 100) / width * 0.01,
                y: (event.clientY * 100) / height * 0.01,
            }
            setRandomGlobalFactor((factor.x + factor.y) / 2);
        };
        window.addEventListener('mousemove', handleWindowMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleWindowMouseMove);
        };
    }, [globalRandomFactor]);

    return (
        <div className={"RandomBg"}>
            <div className={"Square Square-1"}
                 style={{
                     transform: 'rotate(' + (270 + Math.ceil(300 * globalRandomFactor)) + 'deg)'
                 }}/>
        </div>
    );
}

export default TitleSquareAnimation;
