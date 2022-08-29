import React, {createContext} from "react";
import {useTranslation} from "react-i18next";
import {ConstantOther} from "../constants/ConstantOther";

export const LanguageContext = createContext({})

const LanguageContextProvider = (props) => {

    const {t, i18n} = useTranslation()

    const language = i18n.language
    const isLocEn = i18n.language === ConstantOther.languages.en
    const isLocRu = i18n.language === ConstantOther.languages.ru

    return (
        <LanguageContext.Provider
            value={{
                t,
                i18n,
                language,
                isLocEn,
                isLocRu,
            }}>
            {props.children}
        </LanguageContext.Provider>
    )
}

export default LanguageContextProvider