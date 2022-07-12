import * as React from 'react';
import {Card, CardContent, CardActions, Grid, Typography, Button} from "@mui/material";
import {AppImages} from "../../../utils/AppImages";

const listData = [
    {
        image: AppImages.platform.android,
        title: "Android",
        text: "I am currently working as an android programmer. It's been like ~6 years now."
    },
    {
        image: AppImages.platform.apple,
        title: "iOS",
        text: "In free time I study SwiftUI. There is not much work yet, but it's not evening yet."
    },
    {
        image: AppImages.platform.web,
        title: "Web",
        text: "Connected with the web since 2013. For example, this site is written by me in React."
    },
    {
        image: AppImages.platform.pc,
        title: "PC",
        text: "Sometimes I like to write some kind of Open source. I like linux and actively use it."
    },
]

function BlockProjects() {

    const cards = []

    listData.forEach((data, index) => {
        cards.push(
            <Grid item md={3} sm={6} xs={12}>
                <Card>
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
                            {data.title}
                        </Typography>
                        <Typography variant="text3" color="text.secondary">
                            {data.text}
                        </Typography>
                    </CardContent>

                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>

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