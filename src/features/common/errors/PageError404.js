import * as React from 'react';
import {Button, Container, Divider, Stack, Typography, Zoom} from "@mui/material";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {SentimentVeryDissatisfied} from "@mui/icons-material";

function PageError404() {

    const {t} = useTranslation();

    return (
        <Container maxWidth={"sm"} className={"Page UtilsList"}>
            <Stack alignItems={"center"} spacing={2}>

                <Zoom in={true} style={{ transitionDuration: '1000ms'}}>
                    <SentimentVeryDissatisfied sx={{ fontSize: 140 }} />
                </Zoom>

                <Typography variant="h3">
                    {t("error.t_text")}
                </Typography>
                <Typography align={"center"} variant="body1">
                    {t("error.t_subtext")}
                </Typography>
                <Divider/>
                <Link to={"/"}>
                    <Button variant="outlined">
                        {t("error.t_btn")}
                    </Button>
                </Link>
            </Stack>
        </Container>
    );
}

export default PageError404;
