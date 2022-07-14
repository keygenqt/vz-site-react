import * as React from 'react';
import {Avatar, Grid, Paper, Stack, Typography, useMediaQuery, useTheme} from "@mui/material";
import {AppImages} from "../../../utils/AppImages";
import {useTranslation} from "react-i18next";

const listData = [
    {
        image: AppImages.company.surf,
        company: "Surf",
        text: "index.t_resume_surf_text",
        works: [
            {
                title: "index.t_resume_role_android",
                period: "index.t_resume_surf_date",
            }
        ]
    },
    {
        image: AppImages.company.clowder,
        company: "Clowder®",
        text: "index.t_resume_clowder_text",
        works: [
            {
                title: "index.t_resume_role_android",
                period: "index.t_resume_clowder_date1",
            },
            {
                title: "index.t_resume_role_web",
                period: "index.t_resume_clowder_date2",
            }
        ]
    },
    {
        image: AppImages.company.privezem,
        company: "Privezem",
        text: "index.t_resume_privezem_text",
        works: [
            {
                title: "index.t_resume_role_web",
                period: "index.t_resume_privezem_date",
            }
        ]
    },
    {
        image: AppImages.company.agamaya,
        company: "Agamaya",
        text: "index.t_resume_agamaya_text",
        works: [
            {
                title: "index.t_resume_role_web",
                period: "index.t_resume_agamaya_date",
            }
        ]
    },
]

function BlockResume() {

    const {t} = useTranslation();
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

    const items = []

    listData.forEach((data, index) => {

        const works = []

        data.works.forEach((data, index) => {
            works.push(
                <li key={index + "item-resume-list"} className={"WorksLI"}>
                    <div className={"WorksPoint"}/>

                    <Typography gutterBottom variant="h4">
                        {t(data.title)}
                    </Typography>

                    <Typography gutterBottom variant="subtitle1">
                        {t(data.period)}
                    </Typography>
                </li>
            );
        });

        items.push(
            <React.Fragment key={index + "item-resume-block"}>
                <Grid item md={6} sm={6} xs={12}>
                    <Stack spacing={2}>
                        <Stack spacing={2} direction="row">
                            <Avatar component={Paper} elevation={5} alt={data.company} src={data.image}/>
                            <Typography gutterBottom variant="h5">
                                {data.company}
                            </Typography>
                        </Stack>
                        <ul className={"WorksUL"}>
                            {works}
                        </ul>
                    </Stack>
                </Grid>
                <Grid item md={6} sm={6} xs={12}>
                    <Typography gutterBottom variant="text2">
                        {t(data.text)}
                    </Typography>
                </Grid>
                <Grid item md={12} sm={12} xs={12} style={{display: index === listData.length - 1 ? 'none' : 'block'}}>
                    <div className={"Line"}/>
                </Grid>
            </React.Fragment>
        )
    })

    return (
        <React.Fragment>
            <Typography align={"center"} gutterBottom variant="h3" style={{marginBottom: 40}}>
                {t("index.t_resume_title")}
            </Typography>
            <Grid className={"BlockResume"} container spacing={isSmall ? 3 : 4} >
                {items}
            </Grid>
        </React.Fragment>
    );
}

export default BlockResume;