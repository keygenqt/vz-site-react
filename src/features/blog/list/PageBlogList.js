import * as React from 'react';
import {useContext} from 'react';
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
    useTheme
} from "@mui/material";

import {Favorite, Share} from '@mui/icons-material';
import {useTranslation} from "react-i18next";
import {BlogDemoData} from "../../../demo/BlogDemoData";
import {RouteContext} from "../../../base/route/RouteContext";


function PageBlogList() {

    const {route, conf} = useContext(RouteContext)
    const theme = useTheme();
    const isMiddle = useMediaQuery(theme.breakpoints.down('md'));

    const {t} = useTranslation();

    const cards = []

    BlogDemoData.forEach((data, index) => {
        cards.push(
            <Grid style={{margin: 0}} key={"item-blog-" + index} item md={4} sm={6} xs={12}>
                <Card variant="outlined" className={"CardBg"}>
                    <CardActionArea onClick={route.onClickToLocationDelay(conf.routes.blog.view.route, data.id)}>
                        <CardMedia
                            component="img"
                            height="200"
                            image={data.img}
                            alt={data.title}
                        />
                        <CardHeader
                            title={data.title}
                            subheader={data.subheader}
                        />
                        <CardContent className={"BlogItemContent"}>
                            <Typography className={"BlogItemSubtitle"} variant="textCard">
                                {data.text}
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
        <Container maxWidth="lg" className={"Page PagePaddings BlogList"}>
            <Grid container spacing={isMiddle ? 8 : 14}>
                <Grid item xs={7}>
                    <Stack spacing={4}>
                        <Typography align={"center"} variant="h4">
                            {t("blog.list.t_title")}
                        </Typography>

                        <Typography align={"center"} variant="h2">
                            {t("blog.list.t_subtitle")}
                        </Typography>
                        <Divider component="div" className={"Small"}/>
                    </Stack>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={isMiddle ? 3 : 6}>
                        {cards}
                        <Grid item xs={12}>
                            <Stack alignItems={"center"} spacing={2}>
                                <CircularProgress/>
                            </Stack>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </Container>
    );
}

export default PageBlogList;
