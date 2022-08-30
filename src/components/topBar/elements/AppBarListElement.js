import {
    Collapse,
    Divider,
    ListItemIcon,
    ListItemText,
    MenuItem,
    MenuList,
    Paper,
    Switch,
    Typography
} from "@mui/material";
import {Public, PublicOff} from "@mui/icons-material";
import * as React from "react";
import {useContext} from "react";
import {appBarData} from "./AppBarData";
import {LanguageContext, NavigateContext} from "../../../base";

export function AppBarListElement(props) {

    const {route, conf} = useContext(NavigateContext)
    const {t} = useContext(LanguageContext)

    const {
        switchState,
        switchChange,
        collapseState,
        collapseChange,
        onClickMenu,
    } = props

    return (
        <>
            <Collapse in={collapseState} sx={{
                display: {
                    md: 'none',
                    sm: 'none'
                },
                zIndex: 50,
            }}>
                <Paper elevation={1} sx={{
                    width: '100%',
                    maxWidth: '100%',
                    borderRadius: 0,
                }}>
                    <MenuList>
                        {appBarData(conf).map((page, index) => (
                            <MenuItem
                                key={index + "topBar-menu2-item"}
                                onClick={() => {
                                    collapseChange(false)
                                    onClickMenu(route, conf, page)
                                }}
                            >
                                <ListItemIcon
                                    style={{color: route.isPages(page.routesActive) ? '#2298DB' : '#0000008a'}}>{page.icon}</ListItemIcon>
                                <ListItemText>{t(page.title)}</ListItemText>
                            </MenuItem>
                        ))}
                        <Divider/>
                        <MenuItem disableRipple style={{paddingTop: 11}} sx={{
                            "&.MuiButtonBase-root:hover": {
                                bgcolor: "transparent"
                            }
                        }}>
                            <ListItemIcon>
                                {switchState ? (
                                    <Public fontSize="small"/>
                                ) : (
                                    <PublicOff fontSize="small"/>
                                )}
                            </ListItemIcon>
                            <ListItemText>
                                {t("components.topBar.t_locale")}
                            </ListItemText>
                            <Typography variant="body2" color="text.secondary">
                                <Switch checked={switchState} onChange={(event, checked) => {
                                    switchChange(checked)
                                }}/>
                            </Typography>
                        </MenuItem>
                    </MenuList>
                </Paper>
            </Collapse>
        </>
    );
}