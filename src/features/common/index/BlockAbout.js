import * as React from 'react';
import {Button, ButtonGroup, Grid, Typography} from "@mui/material";
import {Email, GitHub, LinkedIn, Telegram} from "@mui/icons-material";
import {AppConstants} from "../../../utils/AppConstants";
import {openUrl, openUrlInNewTab} from "../../../utils/AppHelpers";
import {useTranslation} from "react-i18next";

function BlockAbout() {

    const {t} = useTranslation();

    return (
        <React.Fragment>
            <Grid className={"BlockAbout"} container spacing={2}>
                <Grid item sm={6} xs={12}>
                    <Grid container spacing={2}>
                        <Grid item sm={12} xs={12}>
                            <Typography align={"left"} variant="h4">
                                {t("index.t_about_title")}
                            </Typography>
                        </Grid>
                        <Grid item sm={12} xs={12}/>
                        <Grid item sm={12} xs={12}>
                            <Typography align={"left"} variant="h3" style={{whiteSpace: "pre-wrap"}}>
                                {t("index.t_about_me")}
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
                                {t("index.t_about_text")}
                            </Typography>
                        </Grid>
                        <Grid item sm={12} xs={12}/>
                        <Grid item sm={12} xs={12}>
                            <Typography align={"left"} variant="h4">
                                {t("index.t_about_follow")}
                            </Typography>
                        </Grid>
                        <Grid item sm={12} xs={12}>
                            <ButtonGroup size="small" aria-label="small button group">
                                <Button onClick={() => openUrlInNewTab(AppConstants.links.github)}>
                                    <GitHub style={{width: 20}}/>
                                </Button>
                                <Button onClick={() => openUrlInNewTab(AppConstants.links.linkedIn)}>
                                    <LinkedIn/>
                                </Button>
                                <Button onClick={() => openUrlInNewTab(AppConstants.links.telegram)}>
                                    <Telegram/>
                                </Button>
                                <Button onClick={() => openUrl("mailto:" + AppConstants.data.email)}>
                                    <Email/>
                                </Button>
                            </ButtonGroup>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

export default BlockAbout;