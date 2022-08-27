import * as React from 'react';
import {useContext, useEffect} from 'react';
import {Container, Divider, Grid, IconButton, Paper, Stack, Typography, Zoom} from "@mui/material";
import {useParams} from "react-router-dom";
import {AppContext, useRequest} from "../../base";
import {ArrowBack, ArrowUpward, Favorite, Share} from '@mui/icons-material';
import ReactMarkdown from 'https://esm.sh/react-markdown@7'
import {MethodsRequest} from "../../base/request/MethodsRequest";

export function BlogPage(props) {

    const {route, t} = useContext(AppContext)
    let {id} = useParams();
    const {loading, data, error} = useRequest(MethodsRequest.article, false, id);

    useEffect(() => {
        document.title = t(props.title);
    });

    return (
        <>
            {
                loading ? null :
                    <Container maxWidth="md" className={"Page PagePaddings BlogView"} sx={{
                        '& img': {
                            maxWidth: '100%'
                        }
                    }}>
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
                                                src={data.publicImage}
                                                alt={data.title}
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
                                                    {data.title}
                                                </Typography>
                                            </Zoom>
                                            <Typography align={"center"} variant="h7">
                                                Written on {data.createAt}
                                            </Typography>

                                            <Divider component="div" className={"Small"}/>

                                            <ReactMarkdown>
                                                {data.content}
                                            </ReactMarkdown>

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
            }
        </>
    );
}
