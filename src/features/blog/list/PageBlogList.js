import * as React from 'react';
import {useState} from 'react';
import {
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Container,
    Divider,
    Grid,
    IconButton,
    Pagination,
    Stack,
    Typography,
    useMediaQuery,
    useTheme
} from "@mui/material";

import {Favorite, Share} from '@mui/icons-material';
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {AppRoutes} from "../../../base/routes/AppRoutes";
import {BlogDemoData} from "../../../demo/BlogDemoData";


function PageBlogList() {

    const theme = useTheme();
    const isMiddle = useMediaQuery(theme.breakpoints.down('md'));
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

    const {t} = useTranslation();
    const [isRaised, setIsRaised] = useState(-1);

    const cards = []

    BlogDemoData.forEach((data, index) => {
        cards.push(
            <Grid key={"item-blog-" + index} item md={4} sm={6} xs={12}>
                <Card raised={isRaised === index}
                      onMouseEnter={() => setIsRaised(index)}
                      onMouseLeave={() => setIsRaised(-1)}
                >
                    <Link to={AppRoutes.getLink(AppRoutes.route.blog.view, data.id)}>
                        <CardActionArea>
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
                    </Link>
                    <CardActions disableSpacing>
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
                            <Stack alignItems={"end"} spacing={2}>
                                <Pagination count={11} siblingCount={isSmall ? 0 : 1} variant="outlined"/>
                            </Stack>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </Container>
    );
}

export default PageBlogList;
