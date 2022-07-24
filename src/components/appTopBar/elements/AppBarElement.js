import {
    AppBar,
    Box,
    Button,
    Container,
    Divider,
    Grid,
    IconButton,
    Stack,
    Switch,
    Toolbar,
    Typography
} from "@mui/material";
import {Link} from "react-router-dom";
import {ConstantOther} from "../../../base";
import {Menu} from "@mui/icons-material";
import * as React from "react";
import {appBarData} from "./AppBarData";

export function AppBarElement(props) {

    const {
        route,
        conf,
        t,
        switchState,
        switchChange,
        collapseState,
        collapseChange,
    } = props

    return (
        <AppBar position="static">
            <Container maxWidth="lg">
                <Toolbar disableGutters style={{
                    minHeight: 70
                }}>
                    <Link to="/">
                        <Typography
                            variant="h6"
                            noWrap
                            onClick={() => {
                                switchChange(false)
                            }}
                            sx={{
                                mr: 2,
                                fontWeight: 700,
                                color: 'white',
                                textDecoration: 'none',
                            }}
                        >
                            {ConstantOther.nickname}
                        </Typography>
                    </Link>

                    <Box sx={{flexGrow: 1}}/>

                    <Box sx={{flexGrow: 0}}>
                        <Grid container spacing={2}>
                            <Grid item>
                                <IconButton
                                    size="large"
                                    onClick={() => {
                                        collapseChange(!collapseState)
                                    }}
                                    color="inherit"
                                    sx={{
                                        display: {xs: 'flex', md: 'none', sm: 'none'},
                                    }}
                                >
                                    <Menu/>
                                </IconButton>
                            </Grid>

                            {appBarData(conf).map((page, index) => (
                                <Grid key={index + "topBar-menu1-item"} item
                                      sx={{display: {xs: 'none', md: 'block', sm: 'block'}}}>
                                    <Button
                                        onClick={route.onClickToLocationDelay(page.route)}
                                        sx={{color: route.isPages(page.routesActive) ? 'white' : '#ffffffb5'}}>
                                        {t(page.title)}
                                    </Button>
                                </Grid>
                            ))}

                            <Grid key={"topBar-menu1-switch"} item
                                  sx={{display: {xs: 'none', md: 'block', sm: 'block'}}}>
                                <Stack
                                    direction="row"
                                    divider={<Divider orientation="vertical" flexItem/>}
                                    spacing={2}
                                >
                                    <Switch checked={switchState} color="white1"
                                            onChange={(event, checked) => {
                                                switchChange(checked)
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
    );
}