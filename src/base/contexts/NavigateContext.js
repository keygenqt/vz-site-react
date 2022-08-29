import React, {createContext, useState} from "react";
import {useLocation, useNavigate, useNavigationType} from "react-router-dom";
import RouteCore from "../route/RouteCore";
import {RouteConf} from "../route/RouteConf";

export const NavigateContext = createContext({})

export default function NavigateContextProvider(props) {

    const location = useLocation()
    const navigate = useNavigate()
    const type = useNavigationType()

    const conf = RouteConf

    const [route] = useState(new RouteCore(location, navigate, conf));

    route.updateLocation(location)
    route.updateNavigate(navigate)

    return (
        <NavigateContext.Provider
            value={{
                location,
                navigate,
                route,
                type,
                conf,
            }}>
            {props.children}
        </NavigateContext.Provider>
    )
}