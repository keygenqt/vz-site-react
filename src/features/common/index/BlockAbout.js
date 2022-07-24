import * as React from 'react';
import {useContext} from 'react';
import {Button, ButtonGroup, Grid, Typography} from "@mui/material";
import {Email, GitHub, LinkedIn, Telegram} from "@mui/icons-material";
import {ConstantLinks, ConstantOther, AppContext} from "../../../base";
import {useTranslation} from "react-i18next";

function BlockAbout() {

    const {route} = useContext(AppContext)
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
                                <Button onClick={() => route.openUrlNewTab(ConstantLinks.github)}>
                                    <GitHub style={{width: 20}}/>
                                </Button>
                                <Button onClick={() => route.openUrlNewTab(ConstantLinks.linkedIn)}>
                                    <LinkedIn/>
                                </Button>
                                <Button onClick={() => route.openUrlNewTab(ConstantLinks.telegram)}>
                                    <Telegram/>
                                </Button>
                                <Button onClick={() => route.openUrl(`mailto:${ConstantOther.email}`)}>
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