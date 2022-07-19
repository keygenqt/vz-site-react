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
    Tooltip,
    Typography,
    useMediaQuery,
    useTheme
} from "@mui/material";

import {Android, Apple, DesktopWindows, Download, GitHub, Language, Share, Store} from "@mui/icons-material";

import {AppImages} from "../../../utils/AppImages";
import {useTranslation} from "react-i18next";
import {styled} from '@mui/material/styles';
import {AppRoutes} from "../../../base/routes/AppRoutes";

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
        icon: <Apple sx={{fontSize: 20, color: '#000000'}}/>,
        img: AppImages.temp.blog_item1,
        title: "Shrimp and Chorizo Paella",
        subheader: "September 14, 2016",
        text: "Алгоритмы или очередной фреймворк? Во что вложиться? Инструмент который тебе поможет решить поставленную задачу.",
    },
    {
        type: "pc",
        icon: <DesktopWindows sx={{fontSize: 18, padding: '2px', color: '#2468d1'}}/>,
        img: AppImages.temp.blog_item2,
        title: "Shrimp and Chorizo Paella",
        subheader: "September 14, 2016",
        text: "Алгоритмы или очередной фреймворк? Во что вложиться? Инструмент который тебе поможет решить поставленную задачу.",
    },
    {
        type: "android",
        icon: <Android sx={{fontSize: 20, color: '#3BD580'}}/>,
        img: AppImages.temp.blog_item3,
        title: "Shrimp and Chorizo Paella Shrimp and Chorizo Paella Shrimp and Chorizo Paella",
        subheader: "September 14, 2016",
        text: "Алгоритмы или очередной фреймворк? Во что вложиться? Инструмент который тебе поможет решить поставленную задачу.",
    },
    {
        type: "ios",
        icon: <Apple sx={{fontSize: 20, color: '#000000'}}/>,
        img: AppImages.temp.blog_item4,
        title: "Shrimp and Chorizo Paella",
        subheader: "September 14, 2016",
        text: "Алгоритмы или очередной фреймворк? Во что вложиться? Инструмент который тебе поможет решить поставленную задачу.",
    },
    {
        type: "android",
        icon: <Android sx={{fontSize: 20, color: '#3BD580'}}/>,
        img: AppImages.temp.blog_item5,
        title: "Shrimp and Chorizo Paella",
        subheader: "September 14, 2016",
        text: "Алгоритмы или очередной фреймворк? Во что вложиться? Инструмент который тебе поможет решить поставленную задачу.",
    },
    {
        type: "web",
        icon: <Language sx={{fontSize: 20, color: '#3198c1'}}/>,
        img: AppImages.temp.blog_item6,
        title: "Shrimp and Chorizo Paella Chorizo Paella",
        subheader: "September 14, 2016",
        text: "Алгоритмы или очередной фреймворк? Во что вложиться? Инструмент который тебе поможет решить поставленную задачу. Алгоритмы или очередной фреймворк? Во что вложиться? Инструмент который тебе поможет решить поставленную задачу.",
    },
]

function PageProjectsList(prop) {

    const theme = useTheme();
    const isMiddle = useMediaQuery(theme.breakpoints.down('md'));
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

    const {t} = useTranslation();

    const [isRaised, setIsRaised] = useState(-1);
    const [formats, setFormats] = useState(prop.filter);

    AppRoutes.onChangeRoute(() => {
        setFormats(prop.filter);
    })

    const handleFormat = (event, newFormats) => {
        if (newFormats.length !== 0) {
            setFormats(newFormats);
        }
    };

    const cards = []

    listData.forEach((data, index) => {
        if (formats.includes(data.type)) {
            cards.push(
                <Grid style={{margin: 0}} key={"item-projects-" + index} item md={4} sm={6} xs={12}>
                    <Card raised={isRaised === index}
                          onMouseEnter={() => setIsRaised(index)}
                          onMouseLeave={() => setIsRaised(-1)}
                    >
                        <CardActionArea>
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
        }
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
                        <Grid style={{display: cards.length === 6 ? 'block' : 'none'}} item xs={12}>
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
