import * as React from 'react';
import {useCallback, useContext, useEffect} from 'react';
import {
    LanguageContext,
    ConstantOther,
    useWindowScroll,
    NavigateContext,
    ProjectsCustomPages,
    AppCache
} from "../../base";
import {ClickAwayListener, Stack,} from '@mui/material';
import {AppBarElement} from "./elements/AppBarElement";
import {AppBarListElement} from "./elements/AppBarListElement";

const onClickMenu = (route, conf, page) => {
    let pagesBack = [conf.routes.ps.article]

    // load custom page projects
    const pages = ProjectsCustomPages(conf)
    Object.keys(pages).forEach(function(key) {
        pagesBack.push(pages[key].route)
    });

    // Route menu
    if (route.isPages(pagesBack)) {
        route.toBack()
    }
    else if (route.isPage(page.route)) {
        AppCache.clearAll()
        route.refreshPage()
    } else {
        route.toLocation(page.route)
    }
}

/**
 * Top bar fot app with adaptive layout
 *
 * @returns {JSX.Element}
 */
export function AppTopBar() {

    const {i18n, isLocEn} = useContext(LanguageContext)

    // State language switch
    const [switchLocEn, setSwitchLocEn] = React.useState(isLocEn);

    // State menu list
    const [collapseState, setCollapseState] = React.useState(false);

    // Collapse menu if scroll page
    useWindowScroll(() => {
        setCollapseState(false)
    })

    // Update locale if change switch
    useEffect(() => {
        i18n.changeLanguage(switchLocEn ? ConstantOther.languages.en : ConstantOther.languages.ru)
    }, [switchLocEn])

    return (
        <ClickAwayListener
            onClickAway={() => {
                if (collapseState) {
                    setCollapseState(false)
                }
            }}>
            <Stack spacing={0} className={"AppTopBar"}>
                <AppBarElement
                    // state switch
                    switchState={switchLocEn}
                    switchChange={setSwitchLocEn}
                    // state collapse
                    collapseState={collapseState}
                    collapseChange={setCollapseState}
                    // click menu
                    onClickMenu={onClickMenu}
                />
                <AppBarListElement
                    // state switch
                    switchState={switchLocEn}
                    switchChange={setSwitchLocEn}
                    // state collapse
                    collapseState={collapseState}
                    collapseChange={setCollapseState}
                    // click menu
                    onClickMenu={onClickMenu}
                />
            </Stack>
        </ClickAwayListener>
    );
}