import * as React from 'react';
import {useContext} from 'react';
import {ButtonGroup, Grid, Typography} from "@mui/material";
import {AppContext} from "../../../base";
import ButtonsFollow from "../../../components/footer/elements/ButtonsFollow";

function AboutElement() {

    const {t} = useContext(AppContext)

    return (
        <React.Fragment>
            <Grid className={"BlockAbout"} container spacing={2}>
                <Grid item sm={6} xs={12}>
                    <Grid container spacing={2}>
                        <Grid item sm={12} xs={12}>
                            <Typography align={"left"} variant="h4">
                                {t("pages.home.t_about_title")}
                            </Typography>
                        </Grid>
                        <Grid item sm={12} xs={12}/>
                        <Grid item sm={12} xs={12}>
                            <Typography align={"left"} variant="h3" style={{whiteSpace: "pre-wrap"}}>
                                {t("pages.home.t_about_me")}
                            </Typography>
                        </Grid>
                        <Grid className={"GridLeft"} item sm={12} xs={12}>
                            <div className={"Line"}/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item sm={6} xs={12}>
                    <Grid container spacing={2}>
                        <Grid item sm={12} xs={12}>
                            <Typography align={"left"} variant="text1" style={{whiteSpace: "pre-wrap"}}>
                                {t("pages.home.t_about_text")}
                            </Typography>
                        </Grid>
                        <Grid item sm={12} xs={12}/>
                        <Grid item sm={12} xs={12}>
                            <Typography align={"left"} variant="h4">
                                {t("pages.home.t_about_follow")}
                            </Typography>
                        </Grid>
                        <Grid item sm={12} xs={12}>
                            <ButtonGroup size="small" aria-label="small button group">
                                <ButtonsFollow/>
                            </ButtonGroup>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

export default AboutElement;