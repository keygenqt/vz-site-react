import * as React from 'react';
import {useContext} from 'react';
import {Card, CardActionArea, CardContent, Grid, Typography} from "@mui/material";
import {ConstantImages, LanguageContext, NavigateContext} from "../../../base";

const data = [
    {
        color: '#3BD5801a',
        image: ConstantImages.platform.android,
        title: "pages.home.t_projects_android_title",
        text: "pages.home.t_projects_android_text",
        filter: 'android'
    },
    {
        color: '#a1a1a11a',
        image: ConstantImages.platform.apple,
        title: "pages.home.t_projects_ios_title",
        text: "pages.home.t_projects_ios_text",
        filter: 'ios'
    },
    {
        color: '#3198c11a',
        image: ConstantImages.platform.web,
        title: "pages.home.t_projects_web_title",
        text: "pages.home.t_projects_web_text",
        filter: 'web'
    },
    {
        color: '#2468d11a',
        image: ConstantImages.platform.pc,
        title: "pages.home.t_projects_pc_title",
        text: "pages.home.t_projects_pc_text",
        filter: 'other'
    },
];

function ProjectsElement() {

    const {route, conf} = useContext(NavigateContext)
    const {t} = useContext(LanguageContext)
    const cards = []

    data.forEach((data, index) => {
        cards.push(
            <Grid key={index + "item-projects"} item md={3} sm={6} xs={12}>
                <Card className={"CardBg"} variant="outlined">
                    <CardActionArea
                        onClick={() => {
                            route.toLocation(conf.routes.ps.projectsFilter, data.filter)
                        }}
                    >
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

export default ProjectsElement;