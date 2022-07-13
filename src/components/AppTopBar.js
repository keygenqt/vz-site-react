import * as React from 'react';
import {
    AppBar,
    Box,
    Button,
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
    Toolbar,
    Typography,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import {Cloud, ContentCopy, ContentCut, ContentPaste} from "@mui/icons-material";

const pages = ['Blog', 'Projects', 'Utils'];

const AppTopBar = () => {

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
                            @keygenqt
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
                                        <MenuIcon/>
                                    </IconButton>
                                </Grid>
                                {pages.map((page) => (
                                    <Grid item sx={{display: {xs: 'none', md: 'block', sm: 'block'}}}>
                                        <Button sx={{color: 'white'}}>
                                            {page}
                                        </Button>
                                    </Grid>
                                ))}

                            </Grid>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Collapse in={collapseMenu} sx={{
                display: { md: 'none', sm: 'none'},
            }}>
                <Paper sx={{width: '100%', maxWidth: '100%', borderRadius: 0}} elevation={1}>
                    <MenuList>
                        <MenuItem>
                            <ListItemIcon>
                                <ContentCut fontSize="small"/>
                            </ListItemIcon>
                            <ListItemText>Cut</ListItemText>
                            <Typography variant="body2" color="text.secondary">
                                ⌘X
                            </Typography>
                        </MenuItem>
                        <MenuItem>
                            <ListItemIcon>
                                <ContentCopy fontSize="small"/>
                            </ListItemIcon>
                            <ListItemText>Copy</ListItemText>
                            <Typography variant="body2" color="text.secondary">
                                ⌘C
                            </Typography>
                        </MenuItem>
                        <MenuItem>
                            <ListItemIcon>
                                <ContentPaste fontSize="small"/>
                            </ListItemIcon>
                            <ListItemText>Paste</ListItemText>
                            <Typography variant="body2" color="text.secondary">
                                ⌘V
                            </Typography>
                        </MenuItem>
                        <Divider/>
                        <MenuItem>
                            <ListItemIcon>
                                <Cloud fontSize="small"/>
                            </ListItemIcon>
                            <ListItemText>Web Clipboard</ListItemText>
                        </MenuItem>
                    </MenuList>
                </Paper>
            </Collapse>
        </Stack>
    );
};
export default AppTopBar;
