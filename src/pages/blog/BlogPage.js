import * as React from 'react';
import {useContext, useEffect} from 'react';
import {Container, Divider, Grid, IconButton, Paper, Stack, Typography, Zoom} from "@mui/material";
import {useParams} from "react-router-dom";
import {ConstantDemoData, AppContext} from "../../base";
import {ArrowBack, ArrowUpward, Favorite, Share} from '@mui/icons-material';

export function BlogPage(props) {

    const {route, t} = useContext(AppContext)
    let {id} = useParams();
    let model = ConstantDemoData.blog.find(element => element.id === parseInt(id))

    useEffect(() => {
        document.title = t(props.title);
    });

    return (
        <Container maxWidth="md" className={"Page PagePaddings BlogView"}>
            <Stack spacing={3}>
                <Paper elevation={0}>
                    <Grid container>
                        <Grid item xs={12}>
                            <Paper elevation={0} style={{
                                overflow: 'hidden',
                                display: 'flex',
                                maxHeight: 400,
                            }}>
                                <img
                                    style={{
                                        width: '100%',
                                        objectFit: 'cover',
                                        backgroundPosition: 'center'
                                    }}
                                    src={model.img}
                                    alt={model.title}
                                    loading="lazy"
                                />
                            </Paper>
                        </Grid>
                        <Grid item sm={10} xs={12}>
                            <Stack spacing={4} style={{
                                paddingTop: 60,
                                paddingBottom: 12,
                            }}>

                                <Zoom timeout={500} in={true}>
                                    <Typography align={"center"} variant="h2">
                                        {model.title}
                                    </Typography>
                                </Zoom>
                                <Typography align={"center"} variant="h7">
                                    Written on {model.subheader}
                                </Typography>

                                <Divider component="div" className={"Small"}/>

                                <Typography align={"left"} variant="textBlog">
                                    {model.text}
                                </Typography>

                            </Stack>
                        </Grid>
                    </Grid>
                </Paper>

                <Divider component="div"/>

                <Stack display={"block"} direction="row" spacing={2}>

                    <IconButton size="small" aria-label="share" onClick={route.onClickToBackDelay()}>
                        <ArrowBack size="small"/>
                    </IconButton>

                    <IconButton size="small" aria-label="share" onClick={() => {
                        route.scrollToTopSmooth()
                    }}>
                        <ArrowUpward size="small"/>
                    </IconButton>

                    <IconButton style={{
                        float: 'right'
                    }} size="small" aria-label="share">
                        <Share size="small"/>
                    </IconButton>

                    <IconButton style={{
                        float: 'right'
                    }} size="small" aria-label="add to favorites">
                        <Favorite size="small"/>
                    </IconButton>

                </Stack>
            </Stack>
        </Container>
    );
}
