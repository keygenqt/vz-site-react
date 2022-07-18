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
    Paper,
    Stack,
    ToggleButton,
    ToggleButtonGroup,
    Typography,
    useMediaQuery,
    useTheme
} from "@mui/material";

import {Android, Apple, DesktopWindows, Download, GitHub, Language, Share, Store} from "@mui/icons-material";

import {AppImages} from "../../../utils/AppImages";
import {useTranslation} from "react-i18next";
import {styled} from '@mui/material/styles';

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({theme}) => ({
    '& .MuiToggleButtonGroup-grouped': {
        margin: theme.spacing(0.5),
        border: 0,
        '&.Mui-disabled': {
            border: 0,
        },
        '&:not(:first-of-type)': {
            borderRadius: theme.shape.borderRadius,
        },
        '&:first-of-type': {
            borderRadius: theme.shape.borderRadius,
        },
    },
}));

const listData = [
    {
        img: AppImages.temp.blog_item1,
        title: "Shrimp and Chorizo Paella",
        subheader: "September 14, 2016",
        text: "Алгоритмы или очередной фреймворк? Во что вложиться? Инструмент который тебе поможет решить поставленную задачу.",
    },
    {
        img: AppImages.temp.blog_item2,
        title: "Shrimp and Chorizo Paella",
        subheader: "September 14, 2016",
        text: "Алгоритмы или очередной фреймворк? Во что вложиться? Инструмент который тебе поможет решить поставленную задачу.",
    },
    {
        img: AppImages.temp.blog_item3,
        title: "Shrimp and Chorizo Paella Shrimp and Chorizo Paella Shrimp and Chorizo Paella",
        subheader: "September 14, 2016",
        text: "Алгоритмы или очередной фреймворк? Во что вложиться? Инструмент который тебе поможет решить поставленную задачу.",
    },
    {
        img: AppImages.temp.blog_item4,
        title: "Shrimp and Chorizo Paella",
        subheader: "September 14, 2016",
        text: "Алгоритмы или очередной фреймворк? Во что вложиться? Инструмент который тебе поможет решить поставленную задачу.",
    },
    {
        img: AppImages.temp.blog_item5,
        title: "Shrimp and Chorizo Paella",
        subheader: "September 14, 2016",
        text: "Алгоритмы или очередной фреймворк? Во что вложиться? Инструмент который тебе поможет решить поставленную задачу.",
    },
    {
        img: AppImages.temp.blog_item6,
        title: "Shrimp and Chorizo Paella Chorizo Paella",
        subheader: "September 14, 2016",
        text: "Алгоритмы или очередной фреймворк? Во что вложиться? Инструмент который тебе поможет решить поставленную задачу. Алгоритмы или очередной фреймворк? Во что вложиться? Инструмент который тебе поможет решить поставленную задачу.",
    },
]

function PageProjectsList() {

    const theme = useTheme();
    const isMiddle = useMediaQuery(theme.breakpoints.down('md'));
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

    const {t} = useTranslation();

    const [isRaised, setIsRaised] = useState(-1);
    const [formats, setFormats] = React.useState(() => ['android', 'ios', 'web', 'pc']);

    const handleFormat = (event, newFormats) => {
        setFormats(newFormats);
    };

    const cards = []

    listData.forEach((data, index) => {
        cards.push(
            <Grid key={"item-projects-" + index} item md={4} sm={6} xs={12}>
                <Card raised={isRaised === index}
                      onMouseEnter={() => setIsRaised(index)}
                      onMouseLeave={() => setIsRaised(-1)}
                >
                    <CardActionArea>
                        <CardHeader
                            title={data.title}
                            subheader={data.subheader}
                        />
                        <CardMedia
                            component="img"
                            height="140"
                            image={data.img}
                            alt={data.title}
                        />
                        <CardContent className={"ProjectsItemContent"}>
                            <Typography className={"ProjectsItemSubtitle"} variant="textCard">
                                {data.text}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions disableSpacing>
                        <IconButton aria-label="To GitHub">
                            <GitHub/>
                        </IconButton>
                        <IconButton aria-label="To store">
                            <Store/>
                        </IconButton>
                        <IconButton aria-label="Download">
                            <Download/>
                        </IconButton>
                        <IconButton aria-label="Share">
                            <Share/>
                        </IconButton>
                    </CardActions>
                </Card>
            </Grid>
        );
    })

    return (
        <Container maxWidth="lg" className={"Page PagePaddings ProjectsList"}>
            <Grid container spacing={isMiddle ? 8 : 14}>
                <Grid item xs={7}>
                    <Stack spacing={4}>
                        <Typography align={"center"} variant="h4">
                            {t("projects.list.t_title")}
                        </Typography>
                        <Typography align={"center"} variant="h2">
                            {t("projects.list.t_subtitle")}
                        </Typography>
                        <Divider component="div" style={{background: "#5ac140"}} className={"Small"}/>
                    </Stack>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={isMiddle ? 3 : 6}>
                        <Grid style={{textAlign: "end", paddingTop: 0}} item xs={12}>
                            <Paper
                                elevation={0}
                                sx={{
                                    display: 'inline-block',
                                    border: (theme) => `1px solid ${theme.palette.divider}`,
                                }}
                            >
                                <StyledToggleButtonGroup
                                    value={formats}
                                    onChange={handleFormat}
                                    aria-label="text formatting"
                                >
                                    <ToggleButton size={"small"} color={"primary"} value="android" aria-label="Android">
                                        <Android/>
                                    </ToggleButton>
                                    <ToggleButton size={"small"} color={"primary"} value="ios" aria-label="iOS">
                                        <Apple/>
                                    </ToggleButton>
                                    <ToggleButton size={"small"} color={"primary"} value="web" aria-label="Web">
                                        <Language/>
                                    </ToggleButton>
                                    <ToggleButton size={"small"} color={"primary"} value="pc" aria-label="PC">
                                        <DesktopWindows/>
                                    </ToggleButton>
                                </StyledToggleButtonGroup>
                            </Paper>
                        </Grid>
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

export default PageProjectsList;
