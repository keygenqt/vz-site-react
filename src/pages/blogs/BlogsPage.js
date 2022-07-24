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
    useTheme
} from "@mui/material";

import {Favorite, Share} from '@mui/icons-material';
import {AppContext, ConstantDemoData} from "../../base";

export function BlogsPage(props) {

    const {route, conf, t} = useContext(AppContext)
    const theme = useTheme();
    const isMiddle = useMediaQuery(theme.breakpoints.down('md'));

    useEffect(() => {
        document.title = t(props.title);
    });

    const cards = []

    ConstantDemoData.blog.forEach((data, index) => {
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
        <Container maxWidth="lg" className={"Page PagePaddings BlogsPage"}>
            <Grid container spacing={isMiddle ? 8 : 14}>
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
