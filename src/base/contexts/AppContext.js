import React, {createContext} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import RouteCore from "../route/RouteCore";
import {RouteConf} from "../route/RouteConf";
import {useTranslation} from "react-i18next";
import {ConstantOther} from "../constants/ConstantOther";

export const AppContext = createContext({})

const AppContextProvider = (props) => {

    const {t, i18n} = useTranslation()
    const location = useLocation()
    const navigate = useNavigate()

    const language = i18n.language
    const isLocEn = i18n.language === ConstantOther.languages.en
    const isLocRu = i18n.language === ConstantOther.languages.ru

    const conf = RouteConf
    const route = new RouteCore(location, navigate, conf)

    return (
        <AppContext.Provider
            value={{
                location,
                navigate,
                route,
                conf,
                t,
                i18n,
                language,
                isLocEn,
                isLocRu,
            }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider