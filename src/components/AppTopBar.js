import * as React from 'react';
import { useTranslation } from "react-i18next";
import {
    AppBar,
    Box,
    Button,
    Collapse,
    Container,
    Grid,
    IconButton,
    ListItemIcon,
    ListItemText,
    MenuItem,
    MenuList,
    Paper,
    Stack,
    Toolbar,
    Typography,
} from '@mui/material';

import {Article, IntegrationInstructions, LightbulbCircle, Menu} from "@mui/icons-material";
import {AppConstants} from "../utils/AppConstants";

const pages = [
    {
        title: "menu.t_blog",
        icon: <Article fontSize="small"/>
    },
    {
        title: "menu.t_projects",
        icon: <IntegrationInstructions fontSize="small"/>
    },
    {
        title: "menu.t_utils",
        icon: <LightbulbCircle fontSize="small"/>
    }
];

const AppTopBar = () => {

    const { t } = useTranslation();
    const [collapseMenu, setCollapseMenu] = React.useState(false);

    return (
        <Stack spacing={0} className={"AppTopBar"}>
            <AppBar position="static">
                <Container maxWidth="lg">
                    <Toolbar disableGutters style={{
                        minHeight: 70
                    }}>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                fontWeight: 700,
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            {AppConstants.data.key}
                        </Typography>

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
                                    <Grid key={index + "topBar-menu1-item"} item sx={{display: {xs: 'none', md: 'block', sm: 'block'}}}>
                                        <Button sx={{color: 'white'}}>
                                            {t(page.title)}
                                        </Button>
                                    </Grid>
                                ))}

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
                            <MenuItem key={index + "topBar-menu2-item"}>
                                <ListItemIcon>{page.icon}</ListItemIcon>
                                <ListItemText>{t(page.title)}</ListItemText>
                            </MenuItem>
                        ))}
                    </MenuList>
                </Paper>
            </Collapse>
        </Stack>
    );
};
export default AppTopBar;
