import * as React from 'react';
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

import {Favorite, Share} from "@mui/icons-material";

import {AppImages} from "../../../utils/AppImages";
import {useState} from "react";

const listData = [
    {},
    {},
    {},
    {},
    {},
    {},
]

function PageProjectsList() {

    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
    const [isRaised, setIsRaised] = useState(-1);
    const cards = []

    listData.forEach((data, index) => {
        cards.push(
            <Grid key={"item-projects-" + index} item md={4} sm={8} xs={12}>
                <Card raised={isRaised === index}
                    onMouseEnter={() => setIsRaised(index)}
                    onMouseLeave={() => setIsRaised(-1)}
                >
                    <CardActionArea>

                        <CardMedia
                            component="img"
                            height="140"
                            image={AppImages.temp.blog_item}
                            alt="green iguana"
                        />
                        <CardHeader
                            title="Shrimp and Chorizo Paella"
                            subheader="September 14, 2016"
                        />
                        <CardContent className={"ProjectsItemContent"}>
                            <Typography className={"ProjectsItemSubtitle"} variant="textCard">
                                Алгоритмы или очередной фреймворк? Во что вложиться? Для того, чтобы кодить, знание
                                алгоритмизации не требуется, если ты знаешь инструмент который тебе поможет решить
                                поставленную задачу.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        );
    })

    return (
        <Container maxWidth="lg" className={"Page PagePaddings ProjectsList"}>
            <Grid container spacing={isSmall ? 8 : 14}>
                <Grid item xs={7}>
                    <Stack spacing={4}>
                        <Divider>
                            <Typography align={"center"} variant="h4">
                                My Open Source
                            </Typography>
                        </Divider>
                        <Typography align={"center"} variant="h2">
                            Для развития и людей
                        </Typography>
                    </Stack>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={8}>
                        {cards}
                        <Grid item xs={12}>
                            <Stack alignItems={"end"} spacing={2}>
                                <Pagination count={10} variant="outlined" color="primary"/>
                            </Stack>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </Container>
    );
}

export default PageProjectsList;
