import * as React from 'react';
import {useContext, useEffect} from 'react';

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
    Grid,
    IconButton,
    Stack,
    Typography,
    useMediaQuery,
    useTheme,
    Zoom
} from "@mui/material";

import {Favorite, Share} from '@mui/icons-material';
import {LanguageContext, NavigateContext, useRequest} from "../../base";
import {MethodsRequest} from "../../services/MethodsRequest";

export function ArticlesPage(props) {

    const {route, conf} = useContext(NavigateContext)
    const {t, isLocEn} = useContext(LanguageContext)
    const theme = useTheme();
    const isMiddle = useMediaQuery(theme.breakpoints.down('md'));
    const {loading, data, error} = useRequest(MethodsRequest.articles, false);

    useEffect(() => {
        document.title = t('pages.blogs.t_title');
    });

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
                    <CardActions disableSpacing style={{
                        background: "#ffffff"
                    }}>
                        <IconButton aria-label="add to favorites">
                            <Favorite/>
                        </IconButton>
                        <IconButton aria-label="share">
                            <Share/>
                        </IconButton>
                    </CardActions>
                </Card>
            </Grid>
        );
    })

    return (
        <Container maxWidth="lg" className={"Page PagePaddings BlogsPage"}>
            <Grid container spacing={isMiddle || (loading || error) ? 8 : 14}>
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
                        {loading || error ? (
                            <Grid item xs={12}>
                                <Zoom timeout={1000} in={true}>
                                    <Stack alignItems={"center"}>
                                        <CircularProgress/>
                                    </Stack>
                                </Zoom>
                            </Grid>
                        ) : (
                            <>
                                {cards}
                            </>
                        )}
                    </Grid>
                </Grid>

            </Grid>
        </Container>
    );
}
