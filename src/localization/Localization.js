import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import {enLocalization} from "./en";
import {ruLocalization} from "./ru";

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: "en",
        resources: {
            en: enLocalization,
            ru: ruLocalization,
        },
        react: {
            bindI18n: 'languageChanged',
        }
    }).then(r => {});

export default i18n;