import * as React from 'react';
import {useContext, useEffect, useState} from 'react';
import {
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    CircularProgress,
    Container,
    Divider,
    Grid,
    IconButton,
    Paper,
    Stack,
    ToggleButton,
    ToggleButtonGroup,
    Tooltip,
    Typography,
    useMediaQuery,
    useTheme
} from "@mui/material";

import {Android, Apple, DesktopWindows, Favorite, GitHub, Language, OpenInNew} from "@mui/icons-material";

import {AppContext, ConstantImages} from "../../base";
import {styled} from '@mui/material/styles';
import {useParams} from "react-router-dom";

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
        type: "ios",
        icon: <Apple sx={{fontSize: 20, color: '#a1a1a1'}}/>,
        img: ConstantImages.temp.blog_item1,
        title: "Shrimp and Chorizo Paella",
        subheader: "September 14, 2016",
        text: "Алгоритмы или очередной фреймворк? Во что вложиться? Инструмент который тебе поможет решить поставленную задачу.",
    },
    {
        type: "pc",
        icon: <DesktopWindows sx={{fontSize: 18, padding: '2px', color: '#2468d1'}}/>,
        img: ConstantImages.temp.blog_item2,
        title: "Shrimp and Chorizo Paella",
        subheader: "September 14, 2016",
        text: "Алгоритмы или очередной фреймворк? Во что вложиться? Инструмент который тебе поможет решить поставленную задачу.",
    },
    {
        type: "android",
        icon: <Android sx={{fontSize: 20, color: '#3BD580'}}/>,
        img: ConstantImages.temp.blog_item3,
        title: "Shrimp and Chorizo Paella Shrimp and Chorizo Paella Shrimp and Chorizo Paella",
        subheader: "September 14, 2016",
        text: "Алгоритмы или очередной фреймворк? Во что вложиться? Инструмент который тебе поможет решить поставленную задачу.",
    },
    {
        type: "ios",
        icon: <Apple sx={{fontSize: 20, color: '#a1a1a1'}}/>,
        img: ConstantImages.temp.blog_item4,
        title: "Shrimp and Chorizo Paella",
        subheader: "September 14, 2016",
        text: "Алгоритмы или очередной фреймворк? Во что вложиться? Инструмент который тебе поможет решить поставленную задачу.",
    },
    {
        type: "android",
        icon: <Android sx={{fontSize: 20, color: '#3BD580'}}/>,
        img: ConstantImages.temp.blog_item5,
        title: "Shrimp and Chorizo Paella",
        subheader: "September 14, 2016",
        text: "Алгоритмы или очередной фреймворк? Во что вложиться? Инструмент который тебе поможет решить поставленную задачу.",
    },
    {
        type: "web",
        icon: <Language sx={{fontSize: 20, color: '#3198c1'}}/>,
        img: ConstantImages.temp.blog_item6,
        title: "Shrimp and Chorizo Paella Chorizo Paella",
        subheader: "September 14, 2016",
        text: "Алгоритмы или очередной фреймворк? Во что вложиться? Инструмент который тебе поможет решить поставленную задачу. Алгоритмы или очередной фреймворк? Во что вложиться? Инструмент который тебе поможет решить поставленную задачу.",
    },
]

const filters = ['android', 'ios', 'web', 'pc']

export function ProjectsPage(props) {

    const theme = useTheme();
    const {t} = useContext(AppContext)

    let {filter} = useParams();

    const isMiddle = useMediaQuery(theme.breakpoints.down('md'));

    const [formats, setFormats] = useState(filter === undefined ? filters : [filter.replace('filter-', '')]);
    const [showLoader, setShowLoader] = useState(true);

    const handleFormat = (event, newFormats) => {
        if (newFormats.length !== 0) {
            setFormats(newFormats);
        }
    };

    useEffect(() => {
        document.title = t(props.title);
        setTimeout(function () {
            setShowLoader(false)
        }, 2000);
    });

    useEffect(() => {
        if (filter === undefined) {
            setFormats(filters)
        } else {
            setFormats([filter.replace('filter-', '')])
        }
    }, [filter]);

    const cards = []

    listData.forEach((data, index) => {
        if (formats.includes(data.type)) {
            cards.push(
                <Grid style={{margin: 0}} key={"item-projects-" + index} item md={4} sm={6} xs={12}>
                    <Card variant="outlined" className={"CardBg"}>
                        <CardHeader
                            title={
                                <Stack spacing={1}>
                                    {data.icon}
                                    <Typography variant="h5">
                                        {data.title}
                                    </Typography>
                                </Stack>
                            }
                            subheader={
                                <Stack spacing={1}>
                                    <Typography variant="body2" color="text.secondary">
                                        {data.subheader}
                                    </Typography>
                                </Stack>
                            }
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
                        <CardActions disableSpacing style={{
                            display: 'block'
                        }}>

                            <IconButton aria-label="To GitHub">
                                <Favorite/>
                            </IconButton>

                            <IconButton style={{
                                float: 'right'
                            }} aria-label="To store">
                                <OpenInNew/>
                            </IconButton>

                            <IconButton style={{
                                float: 'right'
                            }} aria-label="To store">
                                <GitHub/>
                            </IconButton>

                        </CardActions>
                    </Card>
                </Grid>
            );
        }
    })

    return (
        <Container maxWidth="lg" className={"Page PagePaddings ProjectsPage"}>
            <Grid container spacing={isMiddle ? 8 : 14}>
                <Grid item xs={7}>
                    <Stack spacing={4}>
                        <Typography align={"center"} variant="h4">
                            {t("pages.projects.t_title_page")}
                        </Typography>
                        <Typography align={"center"} variant="h2">
                            {t("pages.projects.t_subtitle")}
                        </Typography>
                        <Divider component="div" className={"Small"}/>
                    </Stack>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={isMiddle ? 3 : 6}>
                        <Grid
                            style={{textAlign: "end", paddingTop: 0, display: filter === undefined ? 'block' : 'none'}}
                            item xs={12}>
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
                                    <Tooltip title="Android" value="android">
                                        <ToggleButton size="small" color="primary" aria-label="Android" value="android">
                                            <Android/>
                                        </ToggleButton>
                                    </Tooltip>
                                    <Tooltip title="iOS" value="ios">
                                        <ToggleButton size={"small"} color={"primary"} aria-label="iOS" value="ios">
                                            <Apple/>
                                        </ToggleButton>
                                    </Tooltip>
                                    <Tooltip title="Web" value="web">
                                        <ToggleButton size={"small"} color={"primary"} aria-label="Web" value="web">
                                            <Language/>
                                        </ToggleButton>
                                    </Tooltip>
                                    <Tooltip title="PC" value="pc">
                                        <ToggleButton size={"small"} color={"primary"} aria-label="PC" value="pc">
                                            <DesktopWindows/>
                                        </ToggleButton>
                                    </Tooltip>
                                </StyledToggleButtonGroup>
                            </Paper>
                        </Grid>
                        {cards}
                        <Grid item xs={12} style={{display: showLoader ? 'block' : 'none'}}>
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
