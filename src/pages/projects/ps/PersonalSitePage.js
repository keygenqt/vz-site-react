import * as React from 'react';
import {Container, Stack, Typography} from "@mui/material";
import Lottie from "lottie-react";
import {ConstantLottie} from "../../../base/constants/ConstantLottie";
import {useContext} from "react";
import {LanguageContext} from "../../../base";

export function PersonalSitePage(props) {

    const {t} = useContext(LanguageContext)

    return (
        <Container maxWidth={"sm"}>
            <Stack alignItems={"center"} spacing={2}>
                <Lottie style={{
                    width: 250,
                }} animationData={ConstantLottie.work_from_home}/>

                <Typography align={"center"} variant="h6">
                    {t("pages.projects.t_empty")}
                </Typography>
            </Stack>
        </Container>
    );
}
