import * as React from 'react';
import {useContext} from 'react';
import {Card, CardActionArea, CardContent, Grid, Typography} from "@mui/material";
import {AppImages} from "../../../utils/AppImages";
import {useTranslation} from "react-i18next";
import {RouteContext} from "../../../base/route/RouteContext";

function BlockProjects() {

    const {route, conf} = useContext(RouteContext)
    const {t} = useTranslation();
    const cards = []
    const data = [
        {
            color: '#3BD5801a',
            image: AppImages.platform.android,
            title: "index.t_projects_android_title",
            text: "index.t_projects_android_text",
            route: conf.routes.projects.filter_and.route
        },
        {
            color: '#a1a1a11a',
            image: AppImages.platform.apple,
            title: "index.t_projects_ios_title",
            text: "index.t_projects_ios_text",
            route: conf.routes.projects.filter_ios.route
        },
        {
            color: '#3198c11a',
            image: AppImages.platform.web,
            title: "index.t_projects_web_title",
            text: "index.t_projects_web_text",
            route: conf.routes.projects.filter_web.route
        },
        {
            color: '#2468d11a',
            image: AppImages.platform.pc,
            title: "index.t_projects_pc_title",
            text: "index.t_projects_pc_text",
            route: conf.routes.projects.filter_pc.route
        },
    ];

    data.forEach((data, index) => {
        cards.push(
            <Grid key={index + "item-projects"} item md={3} sm={6} xs={12}>
                <Card className={"CardBg"} variant="outlined">
                    <CardActionArea onClick={route.onClickToLocationDelay(data.route)}>
                        <Grid container columns={12}>
                            <Grid item sm={6} xs={6}>
                                <img
                                    style={{
                                        width: '100%',
                                        marginTop: 65,
                                        marginBottom: 25
                                    }}
                                    src={data.image} alt={data.title}/>
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