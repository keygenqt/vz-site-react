import * as React from 'react';
import {useContext, useEffect} from 'react';
import {Button, Container, Stack, Typography, Zoom} from "@mui/material";
import {SentimentVeryDissatisfied} from "@mui/icons-material";
import {AppContext} from "../../base";

export function ErrorPage(props) {

    const {route, conf, t} = useContext(AppContext)

    useEffect(() => {
        props.onError.call()
        document.title = t("pages.error.t_title");
    });

    return (
        <Container maxWidth={"sm"} className={"Page UtilsList"}>
            <Stack alignItems={"center"} spacing={2}>

                <Zoom timeout={1000} in={true}>
                    <SentimentVeryDissatisfied sx={{fontSize: 140, color: '#ff5400'}}/>
                </Zoom>

                <Typography variant="h3" style={{
                    marginTop: 30
                }}>
                    {t("pages.error.t_text")}
                </Typography>
                <Typography align={"center"} variant="body1" style={{
                    marginBottom: 30
                }}>
                    {t("pages.error.t_subtext")}
                </Typography>
                <Button onClick={route.onClickToLocationDelay(conf.routes.home.index.route)} variant="outlined">
                    {t("pages.error.t_btn")}
                </Button>
            </Stack>
        </Container>
    );
}