import * as React from 'react';
import {useTranslation} from "react-i18next";
import {
    AppBar,
    Box,
    Button,
    ClickAwayListener,
    Collapse,
    Container,
    Divider,
    Grid,
    IconButton,
    ListItemIcon,
    ListItemText,
    MenuItem,
    MenuList,
    Paper,
    Stack,
    Switch,
    Toolbar,
    Typography,
} from '@mui/material';

import {Article, IntegrationInstructions, LightbulbCircle, Menu, Public, PublicOff} from "@mui/icons-material";
import {AppConstants} from "../utils/AppConstants";
import {Link, useLocation} from "react-router-dom";
import {useEffect} from "react";

const pages = [
    {
        title: "menu.t_projects",
        icon: <IntegrationInstructions fontSize="small"/>,
        route: "/projects"
    },
    {
        title: "menu.t_blog",
        icon: <Article fontSize="small"/>,
        route: "/blog"
    },
    {
        title: "menu.t_utils",
        icon: <LightbulbCircle fontSize="small"/>,
        route: "/utils"
    }
];

const AppTopBar = () => {

    const location = useLocation()
    const {t, i18n} = useTranslation();
    const [collapseMenu, setCollapseMenu] = React.useState(false);
    const [switchLocalization, setSwitchLocalization] = React.useState(i18n.language === 'en');

    const changeLanguage = (result) => {
        setSwitchLocalization(result)
        if (result) {
            i18n.changeLanguage('en')
        } else {
            i18n.changeLanguage('ru')
        }
    }

    useEffect(() => {
        const handleWindowMouseMove = () => {
            if (collapseMenu) {
                setCollapseMenu(false)
            }
        };
        window.addEventListener('scroll', handleWindowMouseMove);
        return () => {
            window.removeEventListener('scroll', handleWindowMouseMove);
        };
    });

    return (
        <ClickAwayListener
            onClickAway={() => {
                if (collapseMenu) {
                    setCollapseMenu(false)
                }
            }}>
            <Stack spacing={0} className={"AppTopBar"}>
                <AppBar position="static">
                    <Container maxWidth="lg">
                        <Toolbar disableGutters style={{
                            minHeight: 70
                        }}>
                            <Link to={"/"}>
                                <Typography
                                    variant="h6"
                                    noWrap
                                    onClick={() => {
                                        setCollapseMenu(false)
                                    }}
                                    sx={{
                                        mr: 2,
                                        fontWeight: 700,
                                        color: 'white',
                                        textDecoration: 'none',
                                    }}
                                >
                                    {AppConstants.data.key}
                                </Typography>
                            </Link>

                            <Box sx={{flexGrow: 1}}/>

                            <Box sx={{flexGrow: 0}}>
                                <Grid container spacing={2}>
                                    <Grid item>
                                        <IconButton
                                            size="large"
                                            onClick={() => {
                                                setCollapseMenu(!collapseMenu)
                                            }}
                                            color="inherit"
                                            sx={{
                                                display: {xs: 'flex', md: 'none', sm: 'none'},
                                            }}
                                        >
                                            <Menu/>
                                        </IconButton>
                                    </Grid>

                                    {pages.map((page, index) => (
                                        <Grid key={index + "topBar-menu1-item"} item
                                              sx={{display: {xs: 'none', md: 'block', sm: 'block'}}}>
                                            <Link to={page.route}>
                                                <Button
                                                    sx={{color: page.route === location.pathname ? 'white' : '#ffffffb5'}}>
                                                    {t(page.title)}
                                                </Button>
                                            </Link>
                                        </Grid>
                                    ))}

                                    <Grid key={"topBar-menu1-switch"} item
                                          sx={{display: {xs: 'none', md: 'block', sm: 'block'}}}>
                                        <Stack
                                            direction="row"
                                            divider={<Divider orientation="vertical" flexItem/>}
                                            spacing={2}
                                        >
                                            <Switch checked={switchLocalization} color="white1"
                                                    onChange={(event, checked) => {
                                                        changeLanguage(checked)
                                                    }}/>
                                            <Typography align={"center"} variant="button" style={{paddingTop: 7}}>
                                                EN
                                            </Typography>
                                        </Stack>
                                    </Grid>

                                </Grid>
                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar>
                <Collapse in={collapseMenu} sx={{
                    display: {md: 'none', sm: 'none'},
                }}>
                    <Paper sx={{width: '100%', maxWidth: '100%', borderRadius: 0}} elevation={1}>
                        <MenuList>
                            {pages.map((page, index) => (
                                <Link key={index + "topBar-menu2-item"} to={page.route}>
                                    <MenuItem onClick={() => {
                                        setCollapseMenu(false)
                                    }}>
                                        <ListItemIcon
                                            style={{color: page.route === location.pathname ? '#2298DB' : '#0000008a'}}>{page.icon}</ListItemIcon>
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
                                    {switchLocalization ? (
                                        <Public fontSize="small"/>
                                    ) : (
                                        <PublicOff fontSize="small"/>
                                    )}
                                </ListItemIcon>
                                <ListItemText>
                                    {t("menu.t_locale")}
                                </ListItemText>
                                <Typography variant="body2" color="text.secondary">
                                    <Switch checked={switchLocalization} onChange={(event, checked) => {
                                        changeLanguage(checked)
                                    }}/>
                                </Typography>
                            </MenuItem>
                        </MenuList>
                    </Paper>
                </Collapse>
            </Stack>
        </ClickAwayListener>
    );
};
export default AppTopBar;
