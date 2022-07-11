import * as React from 'react';
import {Button, ButtonGroup, Grid, Typography} from "@mui/material";
import {Email, GitHub, Telegram} from "@mui/icons-material";
import {AppConstants} from "../../../utils/AppConstants";
import {openUrl, openUrlInNewTab} from "../../../utils/AppHelpers";

function BlockAbout() {
    return (
        <React.Fragment>
            <Grid className={"BlockAbout"} container spacing={2}>
                <Grid item sm={6}>
                    <Grid container spacing={2}>
                        <Grid item sm={12} xs={12}>
                            <Typography align={"left"} variant="h4">
                                About Me
                            </Typography>
                        </Grid>
                        <Grid item sm={12} xs={12}/>
                        <Grid item sm={12} xs={12}>
                            <Typography align={"left"} variant="h3">
                                I'm a programmer
                                <br/>
                                In the broadest sense of the word
                            </Typography>
                        </Grid>
                        <Grid className={"GridLeft"} item sm={12} xs={12}>
                            <div className={"Line"}/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item sm={6}>
                    <Grid container spacing={2}>
                        <Grid item sm={12} xs={12}>
                            <Typography align={"left"} variant="body1">
                                I have been a programmer for 10 years. Started as a PHP programmer writing features for
                                Webasyst (CMS for stores).
                            </Typography>
                        </Grid>
                        <Grid item sm={12} xs={12}>
                            <Typography align={"left"} variant="body1">
                                Continued as a front-end developer on yii2. But the tasks often concerned the backend,
                                in fact, did everything from the DB to the layout of the design.
                            </Typography>
                        </Grid>
                        <Grid item sm={12} xs={12}>
                            <Typography align={"left"} variant="body1">
                                I am currently writing android applications. Having fun with ios, python, react, spring,
                                ktor and much more.
                            </Typography>
                        </Grid>
                        <Grid item sm={12} xs={12}/>
                        <Grid item sm={12} xs={12}>
                            <Typography align={"left"} variant="h4">
                                Follow me
                            </Typography>
                        </Grid>
                        <Grid item sm={12} xs={12}>
                            <ButtonGroup size="small" aria-label="small button group">
                                <Button onClick={() => openUrlInNewTab(AppConstants.links.telegram)}>
                                    <Telegram/>
                                </Button>
                                <Button onClick={() => openUrl(AppConstants.links.email)}>
                                    <Email/>
                                </Button>
                                <Button onClick={() => openUrlInNewTab(AppConstants.links.github)}>
                                    <GitHub/>
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