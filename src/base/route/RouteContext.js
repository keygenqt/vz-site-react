import React, {createContext} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import RouteCore from "./RouteCore";
import {RouteConf} from "./RouteConf";

export const RouteContext = createContext({})

const RouteContextProvider = (props) => {

    const location = useLocation()
    const navigate = useNavigate();
    const conf = RouteConf
    const route = new RouteCore(location, navigate, conf)

    return (
        <RouteContext.Provider
            value={{
                location,
                navigate,
                route,
                conf
            }}>
            {props.children}
        </RouteContext.Provider>
    )
}

export default RouteContextProvider