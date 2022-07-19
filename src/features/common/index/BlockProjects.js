import * as React from 'react';
import {Card, CardContent, CardActionArea, Grid, Typography} from "@mui/material";
import {AppImages} from "../../../utils/AppImages";
import {useTranslation} from "react-i18next";
import {useState} from "react";
import {AppRoutes} from "../../../base/routes/AppRoutes";
import {Link} from "react-router-dom";

const listData = [
    {
        image: AppImages.platform.android,
        title: "index.t_projects_android_title",
        text: "index.t_projects_android_text",
        route: AppRoutes.route.projects.filter_and
    },
    {
        image: AppImages.platform.apple,
        title: "index.t_projects_ios_title",
        text: "index.t_projects_ios_text",
        route: AppRoutes.route.projects.filter_ios
    },
    {
        image: AppImages.platform.web,
        title: "index.t_projects_web_title",
        text: "index.t_projects_web_text",
        route: AppRoutes.route.projects.filter_web
    },
    {
        image: AppImages.platform.pc,
        title: "index.t_projects_pc_title",
        text: "index.t_projects_pc_text",
        route: AppRoutes.route.projects.filter_pc
    },
]

function BlockProjects() {

    const {t} = useTranslation();
    const [isRaised, setIsRaised] = useState(-1);

    const cards = []

    listData.forEach((data, index) => {
        cards.push(
            <Grid key={index + "item-projects"} item md={3} sm={6} xs={12}>
                <Card raised={isRaised === index}
                      onMouseEnter={() => setIsRaised(index)}
                      onMouseLeave={() => setIsRaised(-1)}
                >
                    <Link to={data.route}>
                        <CardActionArea>
                            <Grid container columns={12}>
                                <Grid item sm={6} xs={6}>
                                    <img
                                        style={{
                                            width: '100%',
                                            marginTop: 65,
                                            marginBottom: 25
                                        }}
                                        src={data.image} alt={data.title} />
                                </Grid>
                            </Grid>

                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {t(data.title)}
                                </Typography>
                                <Typography variant="textCard">
                                    {t(data.text)}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Link>

                </Card>
            </Grid>
        )
    })

    return (
        <React.Fragment>
            <Grid className={"BlockProjects"} container spacing={4}>
                {cards}
            </Grid>
        </React.Fragment>
    );
}

export default BlockProjects;