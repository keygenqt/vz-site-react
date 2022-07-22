import * as React from 'react';
import {Card, CardContent, CardActionArea, Grid, Typography} from "@mui/material";
import {AppImages} from "../../../utils/AppImages";
import {useTranslation} from "react-i18next";
import {AppRoutes} from "../../../base/routes/AppRoutes";
import {Link} from "react-router-dom";

const listData = [
    {
        color: '#3BD5801a',
        image: AppImages.platform.android,
        title: "index.t_projects_android_title",
        text: "index.t_projects_android_text",
        route: AppRoutes.route.projects.filter_and
    },
    {
        color: '#a1a1a11a',
        image: AppImages.platform.apple,
        title: "index.t_projects_ios_title",
        text: "index.t_projects_ios_text",
        route: AppRoutes.route.projects.filter_ios
    },
    {
        color: '#3198c11a',
        image: AppImages.platform.web,
        title: "index.t_projects_web_title",
        text: "index.t_projects_web_text",
        route: AppRoutes.route.projects.filter_web
    },
    {
        color: '#2468d11a',
        image: AppImages.platform.pc,
        title: "index.t_projects_pc_title",
        text: "index.t_projects_pc_text",
        route: AppRoutes.route.projects.filter_pc
    },
]

function BlockProjects() {

    const {t} = useTranslation();

    const cards = []

    listData.forEach((data, index) => {
        cards.push(
            <Grid key={index + "item-projects"} item md={3} sm={6} xs={12}>
                <Card className={"CardBg"} variant="outlined" >
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