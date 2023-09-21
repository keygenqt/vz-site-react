import * as React from 'react';
import { useContext, useEffect, useState } from 'react';

import {
    Snackbar,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    CircularProgress,
    Container,
    Divider,
    Fade,
    Grid,
    IconButton,
    Stack,
    Tooltip,
    Typography,
    useMediaQuery,
    useTheme,
    Zoom,
    Alert,
    Box
} from "@mui/material";

import {
    YouTube,
    Article,
    ArrowOutward
} from "@mui/icons-material";

import { ShareOutlined } from '@mui/icons-material';
import { LanguageContext, NavigateContext, useRequest } from "../../base";
import { MethodsRequest } from "../../services/MethodsRequest";
import { ScrollRecovery } from "../../components/other/ScrollRecovery";
import Lottie from "lottie-react";
import { ConstantLottie } from "../../base/constants/ConstantLottie";
import { ConstantConf } from "../../ConstantConf";

export function ArticlesPage(props) {

    const { route, conf } = useContext(NavigateContext)
    const { t, isLocEn } = useContext(LanguageContext)
    const theme = useTheme();
    const isMiddle = useMediaQuery(theme.breakpoints.down('md'));
    const request1 = useRequest(MethodsRequest.articles);
    const request2 = useRequest(MethodsRequest.videos);
    const [copy, setCopy] = React.useState(false);

    useEffect(() => {
        document.title = t('pages.blogs.t_title');
    });

    const cards = []

    const data1 = request1.data;
    const data2 = request2.data;
    const value = Array.isArray(data1) && Array.isArray(data2) ? data1.concat(data2) : []
    value.sort((a, b) => b.createAt - a.createAt);

    value.forEach((item, index) => {
        cards.push(
            <Grid style={{ margin: 0 }} key={"item-blog-" + index} item md={4} sm={6} xs={12}>
                <Card
                    sx={{ position: 'relative' }}
                    variant="outlined"
                    className={"CardBg"}
                >
                    <Box
                        sx={{ 
                            position: 'absolute', 
                            top: 8, 
                            left: 8, 
                            background: 'white', 
                            width: 34, 
                            height: 33, 
                            borderRadius: '50%'
                        }}
                    >
                        {item.type ?
                            (item.type === 'BLOG' ?
                                <Article sx={{ fontSize: 24, position: 'absolute', top: 4, left: 5, color: '#967cc8' }} /> :
                                <ArrowOutward sx={{ fontSize: 24, position: 'absolute', top: 4, left: 5, color: '#2298db' }} />
                            ) :
                            <YouTube sx={{ fontSize: 24, position: 'absolute', top: 4, left: 5, color: '#F60001' }} />
                        }
                    </Box>

                    <CardMedia
                        component="img"
                        height="200"
                        image={item.listImage ?? item.image}
                        alt={isLocEn ? item.title : item.titleRu}
                    />

                    <CardHeader
                        sx={{ paddingTop: 1 }}
                        title={isLocEn ? item.title : item.titleRu}
                        subheader={new Intl
                            .DateTimeFormat(isLocEn ? 'en-US' : 'ru-RU', {
                                year: 'numeric',
                                month: 'long',
                                day: '2-digit',
                            })
                            .format(item.createAt)}
                    />
                    <CardContent className={"BlogItemContent"}>
                        <Typography className={"BlogItemSubtitle"} variant="textCard">
                            {isLocEn ? item.description : item.descriptionRu}
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing sx={{
                        background: "#ffffff",
                        display: 'block'
                    }}>
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                        >
                            <Tooltip title={t("common.t_copy_link")}>
                                <IconButton
                                    aria-label="Copy"
                                    onClick={async (i, e) => {
                                        if (item.url) {
                                            await navigator.clipboard.writeText(item.url);
                                        } else {
                                            await navigator.clipboard.writeText(ConstantConf.publicPath + route.createLink(conf.routes.ps.article, item.id));
                                        }
                                        setCopy(true);
                                    }}
                                >
                                    <ShareOutlined
                                        sx={{ color: '#2298db' }}
                                    />
                                </IconButton>
                            </Tooltip>

                            <Button
                                size={'small'}
                                variant="outlined"
                                sx={{
                                    height: '34px',
                                    marginTop: '3px'
                                }}
                                onClick={() => {
                                    if (item.url && item.type !== 'BLOG') {
                                        route.openUrlNewTab(item.url)
                                    } else {
                                        route.toLocation(conf.routes.ps.article, item.id)
                                    }
                                }}
                            >
                                {item.type ? t("pages.blogs.t_open_btn") : t("pages.blogs.t_open_video_btn")}
                            </Button>

                        </Stack>
                    </CardActions>
                </Card>
            </Grid>
        );
    })

    return (
        <Container maxWidth="lg" className={"Page PagePaddings BlogsPage"}>
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
                <ScrollRecovery recovery={!(request1.loading && request2.loading)} />
                <Fade timeout={500} in={true}>
                    <Grid container spacing={isMiddle || (request1.loading && request2.loading) ? 8 : 14}>
                        <Grid item xs={7}>
                            <Stack spacing={4}>
                                <Typography align={"center"} variant="h4">
                                    {t("pages.blogs.t_title_page")}
                                </Typography>

                                <Typography align={"center"} variant="h2">
                                    {t("pages.blogs.t_subtitle")}
                                </Typography>
                                <Divider component="div" className={"Small"} />
                            </Stack>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container spacing={isMiddle ? 3 : 6}>
                                {request1.loading || request1.loading ? (
                                    <Grid item xs={12}>
                                        <Zoom timeout={1000} in={true}>
                                            <Stack alignItems={"center"}>
                                                <CircularProgress />
                                            </Stack>
                                        </Zoom>
                                    </Grid>
                                ) : (
                                    <>
                                        {cards.length !== 0 && !(request1.error && request2.error) ? cards : <Grid item xs={12}>
                                            <Zoom timeout={200} in={true}>
                                                <Stack alignItems={"center"}>

                                                    <Stack alignItems={"center"} spacing={2}>
                                                        <Lottie style={{
                                                            width: 250,
                                                        }} animationData={ConstantLottie.work_from_home} />
                                                    </Stack>

                                                    <Typography align={"center"} variant="h6">
                                                        {t("pages.projects.t_empty")}
                                                    </Typography>
                                                </Stack>
                                            </Zoom>
                                        </Grid>}
                                    </>
                                )}
                            </Grid>
                        </Grid>

                    </Grid>
                </Fade>
            </>
        </Container>
    );
}
