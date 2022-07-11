import * as React from 'react';
import {Button, Card, CardActions, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import {AppImages} from "../../../utils/AppImages";

function BlockCards() {
    return (
        <React.Fragment>
            <div className={"BlockCards"}>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={4}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="140"
                                image={AppImages.index.imgJs}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </React.Fragment>
    );
}

export default BlockCards;