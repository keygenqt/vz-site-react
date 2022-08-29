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
import {Link} from "react-router-dom";
import {Public, PublicOff} from "@mui/icons-material";
import * as React from "react";
import {appBarData} from "./AppBarData";
import {useContext} from "react";
import {LanguageContext, NavigateContext} from "../../../base";

export function AppBarListElement(props) {

    const {route, conf} = useContext(NavigateContext)
    const {t} = useContext(LanguageContext)

    const {
        switchState,
        switchChange,
        collapseState,
        collapseChange,
    } = props

    return (
        <Collapse in={collapseState} sx={{
            display: {md: 'none', sm: 'none'},
        }}>
            <Paper sx={{width: '100%', maxWidth: '100%', borderRadius: 0}} elevation={1}>
                <MenuList>
                    {appBarData(conf).map((page, index) => (
                        <Link key={index + "topBar-menu2-item"} to={page.route.path}>
                            <MenuItem onClick={() => {
                                collapseChange(false)
                            }}>
                                <ListItemIcon
                                    style={{color: route.isPages(page.routesActive) ? '#2298DB' : '#0000008a'}}>{page.icon}</ListItemIcon>
                                <ListItemText>{t(page.title)}</ListItemText>
                            </MenuItem>
                        </Link>
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
    );
}