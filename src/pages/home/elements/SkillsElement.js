import * as React from 'react';
import {Alert, Grid, Typography} from "@mui/material";
import {AccountTree, Android, Apple, DesktopWindows, Language, ViewQuilt} from '@mui/icons-material';
import {useContext} from "react";
import {LanguageContext} from "../../../base";

const listData = [
    {
        icon: <Android fontSize="inherit"/>,
        title: "pages.home.t_skills_android_title",
        text: "pages.home.t_skills_android_text",
    },
    {
        icon: <Apple fontSize="inherit"/>,
        title: "pages.home.t_skills_ios_title",
        text: "pages.home.t_skills_ios_text",
    },
    {
        icon: <ViewQuilt fontSize="inherit"/>,
        title: "pages.home.t_skills_markup_title",
        text: "pages.home.t_skills_markup_text",
    },
    {
        icon: <AccountTree fontSize="inherit"/>,
        title: "pages.home.t_skills_db_title",
        text: "pages.home.t_skills_db_text",
    },
    {
        icon: <Language fontSize="inherit"/>,
        title: "pages.home.t_skills_web_title",
        text: "pages.home.t_skills_web_text",
    },
    {
        icon: <DesktopWindows fontSize="inherit"/>,
        title: "pages.home.t_skills_linux_title",
        text: "pages.home.t_skills_linux_text",
    },
]

function SkillsElement() {

    const {t} = useContext(LanguageContext)

    const items = []

    listData.forEach((data, index) => {
        items.push(
            <Grid key={index + "-skills"} item md={6} sm={6} xs={12}>
                <Alert icon={data.icon} severity="info" className={"SkillAlert"}>
                    <Typography gutterBottom variant="h5">
                        {t(data.title)}
                    </Typography>
                    <Typography component="div" gutterBottom variant="text2">
                        {t(data.text)}
                    </Typography>
                </Alert>
            </Grid>
        )
    });

    return (
        <React.Fragment>
            <Typography align={"center"} gutterBottom variant="h3" style={{marginBottom: 40}}>
                {t("pages.home.t_skills_title")}
            </Typography>
            <Grid className={"BlockSkills"} container spacing={3}>
                {items}
            </Grid>
        </React.Fragment>
    );
}

export default SkillsElement;