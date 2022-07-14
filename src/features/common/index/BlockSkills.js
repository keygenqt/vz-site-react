import * as React from 'react';
import {Alert, Grid, Typography} from "@mui/material";
import {AccountTree, Android, Apple, DesktopWindows, Language, ViewQuilt} from '@mui/icons-material';
import {useTranslation} from "react-i18next";

const listData = [
    {
        icon: <Android fontSize="inherit"/>,
        title: "index.t_skills_android_title",
        text: "index.t_skills_android_text",
    },
    {
        icon: <Apple fontSize="inherit"/>,
        title: "index.t_skills_ios_title",
        text: "index.t_skills_ios_text",
    },
    {
        icon: <ViewQuilt fontSize="inherit"/>,
        title: "index.t_skills_markup_title",
        text: "index.t_skills_markup_text",
    },
    {
        icon: <AccountTree fontSize="inherit"/>,
        title: "index.t_skills_db_title",
        text: "index.t_skills_db_text",
    },
    {
        icon: <Language fontSize="inherit"/>,
        title: "index.t_skills_web_title",
        text: "index.t_skills_web_text",
    },
    {
        icon: <DesktopWindows fontSize="inherit"/>,
        title: "index.t_skills_linux_title",
        text: "index.t_skills_linux_text",
    },
]

function BlockSkills() {

    const {t} = useTranslation();

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
                My skills
            </Typography>
            <Grid className={"BlockSkills"} container spacing={3}>
                {items}
            </Grid>
        </React.Fragment>
    );
}

export default BlockSkills;