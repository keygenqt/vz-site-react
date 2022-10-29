import * as React from 'react';
import {useContext, useEffect} from 'react';
import {Button, Container, Stack, Typography} from "@mui/material";
import {LanguageContext, NavigateContext} from "../../base";
import Lottie from "lottie-react";
import {ConstantLottie} from "../../base/constants/ConstantLottie";

export function ErrorPage(props) {

    const {t} = useContext(LanguageContext)
    const {route, conf} = useContext(NavigateContext)

    useEffect(() => {
        document.title = t("pages.error.t_title");
    });

    return (
        <Container maxWidth={"sm"} className={"Page UtilsList"}>
            <Stack alignItems={"center"} spacing={2} sx={{
                paddingTop: 5,
                paddingBottom: 8
            }}>

                <Lottie style={{
                    width: 250,
                }} animationData={ConstantLottie.error_404}/>

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
                <Button
                    onClick={() => {
                        route.toLocation(conf.routes.home)
                    }}
                    variant="outlined"
                >
                    {t("pages.error.t_btn")}
                </Button>
            </Stack>
        </Container>
    );
}