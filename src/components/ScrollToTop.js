import {useEffect} from "react";
import {useLocation} from "react-router-dom";

/**
 * Component for scroll to top if change location
 */
export default function ScrollToTop() {
    const {pathname} = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}