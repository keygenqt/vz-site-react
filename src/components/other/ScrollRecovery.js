import {useContext, useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {NavigateContext, useWindowScroll} from "../../base";
import PropTypes from "prop-types";
import {MD5} from "crypto-js";

/**
 * Component for scroll to top if change location
 */
export function ScrollRecovery(props) {

    const {pathname} = useLocation();
    let {y: scrollY} = useWindowScroll();
    const {type} = useContext(NavigateContext)
    const [key, setKey] = useState(null);

    useEffect(() => {
        if (key) {
            localStorage.setItem(key, `${scrollY}`)
        }
    }, [key, scrollY]);

    useEffect(() => {
        if (props.recovery) {
            const key = `scroll-recovery-${MD5(pathname)}`
            if (type === 'POP') {
                window.scrollTo(0, parseInt(localStorage.getItem(key) ?? 0));
                setKey(key)
            } else {
                setKey(key)
            }
        }
    }, [type, pathname, props.recovery]);

    return null;
}

ScrollRecovery.propTypes = {
    recovery: PropTypes.bool.isRequired,
};