import * as React from 'react';
import {useContext} from 'react';
import {Alert, Box, Button, Collapse, Container, Fab, Grid, IconButton, TextField, Typography} from "@mui/material";
import {Close, ExpandMore} from "@mui/icons-material";
import {AppContext, useWindowResize} from "../../../base";

function isBlankOrNull(string) {
    return typeof string !== 'string' || string.trim().length === 0
}

function MainElement(prop) {

    const {t, i18n} = useContext(AppContext)
    const {height} = useWindowResize();

    const [collapseSuccess, setCollapseSuccess] = React.useState(null);
    const [collapseError, setCollapseError] = React.useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();

        setCollapseSuccess(null);
        setCollapseError(null);

        const data = new FormData(event.currentTarget);
        const email = data.get('email')

        if (isBlankOrNull(email)) {
            setCollapseError("Error");
        } else {
            setCollapseSuccess(email);
        }

        event.target.reset();
    };

    return (
        <div style={{height: height}} className={"BlockMain AppTable"}>
            <div className={"AppTableCell"}>
                <Grid container columns={12} spacing={2.2}>
                    <Grid item sm={12}>
                        <Container maxWidth="lg">
                            <Grid container columns={12} spacing={1}>
                                <Grid item sm={12} xs={12}>
                                    <Typography align={"center"} variant="h1" className={"Title-" + i18n.language}>
                                        {t("pages.home.t_main_hello")}
                                    </Typography>
                                </Grid>
                                <Grid item sm={12} xs={12}>
                                    <Typography align={"center"} variant="h2" className={"Subtitle-" + i18n.language}>
                                        {t("pages.home.t_main_subtitle")}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Container>
                    </Grid>
                    <Grid item sm={12}>
                        <Container maxWidth="sm">
                            <Grid container spacing={2}>
                                <Grid item sm={12}>
                                    <Collapse in={!isBlankOrNull(collapseSuccess)}>
                                        <Alert
                                            color={"success"}
                                            action={
                                                <IconButton
                                                    aria-label="close"
                                                    color="inherit"
                                                    size="small"
                                                    onClick={() => {
                                                        setCollapseSuccess(null);
                                                    }}
                                                >
                                                    <Close fontSize="inherit"/>
                                                </IconButton>
                                            }
                                        >
                                            <Typography gutterBottom variant="text3">
                                                {t("pages.home.t_main_success")}
                                            </Typography>
                                        </Alert>
                                    </Collapse>

                                    <Collapse in={!isBlankOrNull(collapseError)}>
                                        <Alert
                                            color={"error"}
                                            action={
                                                <IconButton
                                                    aria-label="close"
                                                    color="inherit"
                                                    size="small"
                                                    onClick={() => {
                                                        setCollapseError(null);
                                                    }}
                                                >
                                                    <Close fontSize="inherit"/>
                                                </IconButton>
                                            }
                                        >
                                            <Typography gutterBottom variant="text3">
                                                {t("pages.home.t_main_error")}
                                            </Typography>
                                        </Alert>
                                    </Collapse>
                                </Grid>
                                <Grid item sm={12}>
                                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{mt: 1}}>
                                        <Grid container spacing={2} wrap={"nowrap"}>
                                            <Grid item sm={8}>
                                                <TextField
                                                    style={{
                                                        background: "#ffffff70"
                                                    }}
                                                    variant="outlined"
                                                    autoComplete="email"
                                                    name="email"
                                                    required
                                                    fullWidth
                                                    id="email"
                                                    label={t("pages.home.t_main_email_label")}
                                                />
                                            </Grid>
                                            <Grid item sm={4}>
                                                <Button
                                                    type="submit"
                                                    style={{height: 55}}
                                                    fullWidth
                                                    size="large"
                                                    variant="outlined"
                                                >
                                                    {t("pages.home.t_main_btn")}
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Grid>
                                <Grid item sm={12}>
                                    <Typography align={"left"} variant="subtitle1">
                                        {t("pages.home.t_main_info")}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Container>
                    </Grid>

                </Grid>

                <Fab
                    onClick={prop.onClick}
                    className={"BottomButton"}
                    variant="extended"
                    color="primary"
                    aria-label="add"
                >
                    <ExpandMore/>
                </Fab>

            </div>
        </div>
    );
}

export default MainElement;