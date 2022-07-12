import * as React from 'react';
import {Avatar, Grid, Paper, Stack, Typography, useMediaQuery, useTheme} from "@mui/material";
import {AppImages} from "../../../utils/AppImages";

const listData = [
    {
        image: AppImages.company.surf,
        company: "Surf",
        text: "I am relatively new to this company. I work as a team leader. Here we close the project on jetpack compose, I write a little in php.",
        works: [
            {
                title: "Android Developer",
                period: "Aug 2021 - Present",
            }
        ]
    },
    {
        image: AppImages.company.clowder,
        company: "Clowder®",
        text: "I have spent most of my career with this company. Started as a front-end developer and ended up as a tech lead android. I created tons of websites, admins, and later our flagship product Clowder.",
        works: [
            {
                title: "Android Developer",
                period: "Aug 2015 - Aug 2021 · 6 yrs 1 mo",
            },
            {
                title: "Web Full-Stack",
                period: "Sep 2014 - Aug 2015 · 1 yr",
            }
        ]
    },
    {
        image: AppImages.company.privezem,
        company: "Privezem",
        text: "We wrote websites for the sale of goods with delivery when it was not yet mainstream. Then I got acquainted with yii2. An excellent framework, except for the fact that it is outdated and yii3 is frozen and not a fact that it will be at all.",
        works: [
            {
                title: "Web Full-Stack",
                period: "Nov 2013 - Sep 2014 · 11 mos",
            }
        ]
    },
    {
        image: AppImages.company.agamaya,
        company: "Agamaya",
        text: "My first job. It wasn't easy. Thanks guys for telling me what git is. I studied at such a pace that my head boiled, but I had to make features. And I tried my best.",
        works: [
            {
                title: "Web Full-Stack",
                period: "May 2013 - Nov 2013 · 7 mos",
            }
        ]
    },
]

function BlockResume() {

    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

    const items = []

    listData.forEach((data, index) => {

        const works = []

        data.works.forEach((data) => {
            works.push(
                <li className={"WorksLI"}>
                    <div className={"WorksPoint"}/>

                    <Typography gutterBottom variant="h4">
                        {data.title}
                    </Typography>

                    <Typography gutterBottom variant="subtitle1">
                        {data.period}
                    </Typography>
                </li>
            );
        });

        items.push(
            <React.Fragment>
                <Grid item md={6} sm={6} xs={12}>
                    <Stack spacing={2}>
                        <Stack spacing={2} direction="row">
                            <Avatar component={Paper} elevation={3} alt={data.company} src={data.image}/>
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
                    <Typography gutterBottom variant="body1">
                        {data.text}
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
                Experience
            </Typography>
            <Grid className={"BlockResume"} container spacing={isSmall ? 3 : 4}>
                {items}
            </Grid>
        </React.Fragment>
    );
}

export default BlockResume;