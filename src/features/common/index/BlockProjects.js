import * as React from 'react';
import {Card, CardActionArea, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import {AppImages} from "../../../utils/AppImages";

const listData = [
    {
        title: "Operating System"
    },
    {
        image: AppImages.index.imgJava,
        title: "Android",
        text: "My projects are new and old which I did on js"
    },
    {
        image: AppImages.index.imgJava,
        title: "iOS",
        text: "My projects are new and old which I did on js"
    },
    {
        image: AppImages.index.imgJava,
        title: "Web",
        text: "My projects are new and old which I did on js"
    },
    {
        image: AppImages.index.imgJava,
        title: "PC",
        text: "My projects are new and old which I did on js"
    },
    {
        title: "Programming Language"
    },
    {
        image: AppImages.index.imgKotlin,
        title: "Kotlin",
        text: "My projects are new and old which I did on js"
    },
    {
        image: AppImages.index.imgJava,
        title: "Java",
        text: "My projects are new and old which I did on js"
    },
    {
        image: AppImages.index.imgPhp,
        title: "PHP",
        text: "My projects are new and old which I did on js"
    },
    {
        image: AppImages.index.imgJava,
        title: "Python",
        text: "My projects are new and old which I did on js"
    },
    {
        image: AppImages.index.imgJs,
        title: "Javascript",
        text: "My projects are new and old which I did on js"
    },
    {
        image: AppImages.index.imgJava,
        title: "Swift",
        text: "My projects are new and old which I did on js"
    },
    {
        image: AppImages.index.imgJava,
        title: "Bash",
        text: "My projects are new and old which I did on js"
    },
    {
        image: AppImages.index.imgJava,
        title: "C++",
        text: "My projects are new and old which I did on js"
    },
]

function BlockProjects() {

    const cards = []

    listData.forEach((data, index) => {
        if (data.image === undefined) {
            cards.push(
                <React.Fragment>
                    <Grid item md={12} sm={12} xs={12} style={{display: index === 0 ? 'none' : 'block'}}/>
                    <Grid item md={12} sm={12} xs={12} style={{display: index === 0 ? 'none' : 'block'}}/>
                    <Grid item md={12} sm={12} xs={12}>
                        <Typography align={"center"} gutterBottom variant="h3" component="div">
                            {data.title}
                        </Typography>
                    </Grid>
                </React.Fragment>
            )
        } else {
            cards.push(
                <Grid item md={3} sm={6} xs={12}>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={data.image}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {data.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {data.text}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            )
        }
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