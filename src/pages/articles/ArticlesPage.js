import * as React from 'react';
import {useContext, useEffect, useState} from 'react';

import {
    Card,
    CardActionArea,
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
    Zoom
} from "@mui/material";

import {Favorite, InsertLink} from '@mui/icons-material';
import {LanguageContext, NavigateContext, useRequest} from "../../base";
import {MethodsRequest} from "../../services/MethodsRequest";
import {ScrollRecovery} from "../../components/other/ScrollRecovery";
import Lottie from "lottie-react";
import {ConstantLottie} from "../../base/constants/ConstantLottie";
import {ConstantConf} from "../../ConstantConf";
import {MD5} from "crypto-js";

export function ArticlesPage(props) {

    const {route, conf} = useContext(NavigateContext)
    const {t, isLocEn} = useContext(LanguageContext)
    const theme = useTheme();
    const isMiddle = useMediaQuery(theme.breakpoints.down('md'));
    const {loading, data, error} = useRequest(MethodsRequest.articles);
    const [likes, setLikes] = useState({})

    useEffect(() => {
        document.title = t('pages.blogs.t_title');
    });

    useEffect(() => {
        if (data) {
            let likes = {}
            data.forEach((item) => {
                likes[item.id] = item.isLike
            })
            setLikes(likes)
        }
    }, [data]);

    const cards = []
    const value = data ?? []

    value.forEach((data, index) => {
        cards.push(
            <Grid style={{margin: 0}} key={"item-blog-" + index} item md={4} sm={6} xs={12}>
                <Card variant="outlined" className={"CardBg"}>
                    <CardActionArea onClick={() => {
                        route.toLocation(conf.routes.ps.article, data.id)
                    }}>
                        <CardMedia
                            component="img"
                            height="200"
                            image={data.publicImage}
                            alt={data.title}
                        />
                        <CardHeader
                            title={data.title}
                            subheader={new Intl
                                .DateTimeFormat(isLocEn ? 'en-US' : 'ru-RU', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: '2-digit',
                                })
                                .format(data.createAt)}
                        />
                        <CardContent className={"BlogItemContent"}>
                            <Typography className={"BlogItemSubtitle"} variant="textCard">
                                {data.description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions disableSpacing sx={{
                        background: "#ffffff",
                        display: 'block'
                    }}>
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                        >
                            <Tooltip title={likes[data.id] === true ? t("common.t_unlike") : t("common.t_like")}>
                                <IconButton
                                    aria-label="Like"
                                    onClick={() => {
                                        if (likes[data.id]) {
                                            MethodsRequest.unlikeArticle(data.id)
                                        } else {
                                            MethodsRequest.likeArticle(data.id)
                                        }
                                        setLikes({...likes, [data.id]: !likes[data.id]})
                                    }}
                                >
                                    <Favorite
                                        sx={{color: likes[data.id] === true ? '#c13131' : undefined}}
                                    />
                                </IconButton>
                            </Tooltip>

                            <Tooltip title={t("pages.blogs.t_copy_link")}>
                                <IconButton
                                    onClick={() => {
                                        const url = `${ConstantConf.publicPath}${route.createLink(conf.routes.ps.article, data.id)}`
                                        navigator.clipboard.writeText(url)
                                    }}
                                >
                                    <InsertLink/>
                                </IconButton>
                            </Tooltip>

                        </Stack>
                    </CardActions>
                </Card>
            </Grid>
        );
    })

    return (
        <Container maxWidth="lg" className={"Page PagePaddings BlogsPage"}>
            <>
                <ScrollRecovery recovery={!loading}/>
                <Fade timeout={500} in={true}>
                    <Grid container spacing={isMiddle || (loading) ? 8 : 14}>
                        <Grid item xs={7}>
                            <Stack spacing={4}>
                                <Typography align={"center"} variant="h4">
                                    {t("pages.blogs.t_title_page")}
                                </Typography>

                                <Typography align={"center"} variant="h2">
                                    {t("pages.blogs.t_subtitle")}
                                </Typography>
                                <Divider component="div" className={"Small"}/>
                            </Stack>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container spacing={isMiddle ? 3 : 6}>
                                {loading ? (
                                    <Grid item xs={12}>
                                        <Zoom timeout={1000} in={true}>
                                            <Stack alignItems={"center"}>
                                                <CircularProgress/>
                                            </Stack>
                                        </Zoom>
                                    </Grid>
                                ) : (
                                    <>
                                        {cards.length !== 0 && !error ? cards : <Grid item xs={12}>
                                            <Zoom timeout={200} in={true}>
                                                <Stack alignItems={"center"}>

                                                    <Stack alignItems={"center"} spacing={2}>
                                                        <Lottie style={{
                                                            width: 250,
                                                        }} animationData={ConstantLottie.work_from_home}/>
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
