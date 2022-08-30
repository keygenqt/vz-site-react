import * as React from 'react';
import {useContext, useEffect, useState} from 'react';
import {Container, Divider, Grid, IconButton, Paper, Stack, Tooltip, Typography, Zoom} from "@mui/material";
import {useParams} from "react-router-dom";
import {LanguageContext, NavigateContext, useRequest} from "../../base";
import {ArrowBack, ArrowUpward, Favorite} from '@mui/icons-material';
import ReactMarkdown from 'https://esm.sh/react-markdown@7'
import {MethodsRequest} from "../../services/MethodsRequest";
import {ConstantLottie} from "../../base/constants/ConstantLottie";

import Lottie from "lottie-react";
import {ErrorPage} from "../error/ErrorPage";

export function ArticlePage(props) {

    let {id} = useParams();

    const {route} = useContext(NavigateContext)
    const {t, isLocEn} = useContext(LanguageContext)
    const {loading, data, error} = useRequest(MethodsRequest.article, id);
    const [like, setLike] = useState(false)

    useEffect(() => {
        document.title = t('pages.blog.t_title');
    });

    useEffect(() => {
        if (data) {
            setLike(data.isLike)
        }
    }, [data]);

    return (
        <>
            {
                loading ? (
                    <Container maxWidth={"sm"}>
                        <Stack alignItems={"center"} spacing={2}>
                            <Lottie style={{
                                width: 300,
                            }} animationData={ConstantLottie.ocr_black_white}/>
                        </Stack>
                    </Container>
                ) : (error ? (
                        <ErrorPage/>
                    ) : (
                        <Container maxWidth="md" className={"Page PagePaddings BlogView"} sx={{
                            '& img': {
                                maxWidth: '100%'
                            },
                            '& a': {
                                color: '#2298db'
                            }
                        }}>
                            <Stack spacing={3}>
                                <Paper elevation={0}>
                                    <Grid container>
                                        <Grid item xs={12}>
                                            <Paper elevation={0} sx={{
                                                overflow: 'hidden',
                                                display: 'flex',
                                                maxHeight: 400,
                                                borderRadius: 4
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
                                                    {t('pages.blog.t_date')} {new Intl
                                                    .DateTimeFormat(isLocEn ? 'en-US' : 'ru-RU', {
                                                        year: 'numeric',
                                                        month: 'long',
                                                        day: '2-digit',
                                                    })
                                                    .format(data.createAt)}
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

                                    <Tooltip title={t("common.t_back")}>
                                        <IconButton
                                            size="small"
                                            onClick={route.onClickToBackDelay()}
                                        >
                                            <ArrowBack size="small"/>
                                        </IconButton>
                                    </Tooltip>

                                    <Tooltip title={t("common.t_up")}>
                                        <IconButton
                                            size="small"
                                            onClick={() => {
                                                route.scrollToTopSmooth()
                                            }}
                                        >
                                            <ArrowUpward size="small"/>
                                        </IconButton>
                                    </Tooltip>

                                    <Tooltip
                                        title={like ? t("common.t_unlike") : t("common.t_like")}>
                                        <IconButton
                                            style={{float: 'right'}}
                                            onClick={() => {
                                                if (like) {
                                                    MethodsRequest.unlikeArticle(data.id)
                                                } else {
                                                    MethodsRequest.likeArticle(data.id)
                                                }
                                                setLike(!like)
                                            }}
                                        >
                                            <Favorite
                                                sx={{color: like ? '#c13131' : undefined}}
                                            />
                                        </IconButton>
                                    </Tooltip>

                                </Stack>
                            </Stack>
                        </Container>
                    )
                )
            }
        </>
    );
}
