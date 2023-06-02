import * as React from 'react';
import {useContext, useEffect} from 'react';
import {Container, Divider, Grid, IconButton, Paper, Stack, Tooltip, Typography, Zoom, Snackbar, Alert} from "@mui/material";
import {useParams} from "react-router-dom";
import {LanguageContext, NavigateContext, useRequest} from "../../base";
import {ArrowBack, ArrowUpward} from '@mui/icons-material';
import ReactMarkdown from 'react-markdown'
import {MethodsRequest} from "../../services/MethodsRequest";
import {ConstantLottie} from "../../base/constants/ConstantLottie";
import rehypeRaw from 'rehype-raw'
import rehypePrismPlus from 'rehype-prism-plus'
import emoji from 'remark-emoji';
import Lottie from "lottie-react";
import {ErrorPage} from "../error/ErrorPage";
import {ConstantConf} from "../../ConstantConf";
import {ShareOutlined} from '@mui/icons-material';

export function ArticlePage(props) {

    let {id} = useParams();

    const {route, conf} = useContext(NavigateContext)
    const {t, isLocEn} = useContext(LanguageContext)
    const {loading, data, error} = useRequest(MethodsRequest.article, false, id);
    const [copy, setCopy] = React.useState(false);

    useEffect(() => {
        document.title = t('pages.blog.t_title');
    });

    return (
        <>
            <Snackbar 
                open={copy} 
                autoHideDuration={1500} 
                onClose={() => { setCopy(false) }}
                anchorOrigin={{ 
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <Alert severity="success" sx={{ width: '100%' }}>
                    {t("common.t_copy_link_done")}
                </Alert>
            </Snackbar>
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
                        <Container maxWidth="md" className={"Page PagePaddings BlogView"}>
                            <Stack spacing={3}>
                                <Paper elevation={0}>
                                    <Grid container>
                                        <Grid item xs={12}>
                                            <Paper elevation={0} sx={{
                                                width: '100%',
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
                                                    src={data.viewImage}
                                                    alt={isLocEn ? data.title : data.title}
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
                                                        {isLocEn ? data.title : data.titleRu}
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

                                                <ReactMarkdown
                                                    rehypePlugins={[rehypeRaw, rehypePrismPlus, emoji]}
                                                    className={"ArticleContent"}
                                                    skipHtml={false}
                                                    linkTarget={(href, children, title) => {
                                                        return `<a target={'_blank'} href=${href} >${title}</a>`
                                                    }}
                                                >
                                                    {isLocEn ? data.content : data.contentRu}
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

                                    <Tooltip title={t("common.t_copy_link")}>
                                        <IconButton
                                            style={{float: 'right'}}
                                            aria-label="Copy"
                                            onClick={async (i, e) => {
                                                await navigator.clipboard.writeText(ConstantConf.publicPath + route.createLink(conf.routes.ps.article, id));
                                                setCopy(true);
                                            }}
                                        >
                                            <ShareOutlined
                                                sx={{color: '#2298db'}}
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
