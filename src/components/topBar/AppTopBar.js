import * as React from 'react';
import {useContext, useEffect} from 'react';
import {AppContext, ConstantOther, useWindowScroll} from "../../base";
import {ClickAwayListener, Stack,} from '@mui/material';
import {AppBarElement} from "./elements/AppBarElement";
import {AppBarListElement} from "./elements/AppBarListElement";

/**
 * Top bar fot app with adaptive layout
 *
 * @returns {JSX.Element}
 */
export function AppTopBar() {

    const {route, conf, t, i18n, isLocEn} = useContext(AppContext)

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
                    t={t}
                    conf={conf}
                    route={route}
                    // state switch
                    switchState={switchLocEn}
                    switchChange={setSwitchLocEn}
                    // state collapse
                    collapseState={collapseState}
                    collapseChange={setCollapseState}
                />
                <AppBarListElement
                    t={t}
                    conf={conf}
                    route={route}
                    // state switch
                    switchState={switchLocEn}
                    switchChange={setSwitchLocEn}
                    // state collapse
                    collapseState={collapseState}
                    collapseChange={setCollapseState}
                />
            </Stack>
        </ClickAwayListener>
    );
}