import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import {enLocalization} from "./en";
import {ruLocalization} from "./ru";

i18next
    .use(initReactI18next)
    .init({
        lng: "ru",
        fallbackLng: "ru",
        resources: {
            en: enLocalization,
            ru: ruLocalization,
        },
    }).then(r => {});

export default i18next;