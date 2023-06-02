import * as React from 'react';
import {useContext, useEffect, useState} from 'react';

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
    Alert
} from "@mui/material";

import {ShareOutlined} from '@mui/icons-material';
import {LanguageContext, NavigateContext, useRequest} from "../../base";
import {MethodsRequest} from "../../services/MethodsRequest";
import {ScrollRecovery} from "../../components/other/ScrollRecovery";
import Lottie from "lottie-react";
import {ConstantLottie} from "../../base/constants/ConstantLottie";
import {ConstantConf} from "../../ConstantConf";

export function ArticlesPage(props) {

    const {route, conf} = useContext(NavigateContext)
    const {t, isLocEn} = useContext(LanguageContext)
    const theme = useTheme();
    const isMiddle = useMediaQuery(theme.breakpoints.down('md'));
    const {loading, data, error} = useRequest(MethodsRequest.articles);
    const [copy, setCopy] = React.useState(false);

    useEffect(() => {
        document.title = t('pages.blogs.t_title');
    });

    const cards = []
    const value = data ?? []

    value.forEach((data, index) => {
        cards.push(
            <Grid style={{margin: 0}} key={"item-blog-" + index} item md={4} sm={6} xs={12}>
                <Card
                    variant="outlined"
                    className={"CardBg"}
                >
                    <CardMedia
                        component="img"
                        height="200"
                        image={data.listImage}
                        alt={isLocEn ? data.title : data.titleRu}
                    />
                    <CardHeader
                        title={isLocEn ? data.title : data.titleRu}
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
                            {isLocEn ? data.description : data.descriptionRu}
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
                                        await navigator.clipboard.writeText(ConstantConf.publicPath + route.createLink(conf.routes.ps.article, data.id));
                                        setCopy(true);
                                    }}
                                >
                                    <ShareOutlined
                                        sx={{color: '#2298db'}}
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
                                    route.toLocation(conf.routes.ps.article, data.id)
                                }}
                            >
                                {t("pages.blogs.t_open_btn")}
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
