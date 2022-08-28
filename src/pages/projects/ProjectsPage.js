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
    useTheme,
    Zoom
} from "@mui/material";
import Lottie from "lottie-react";

import {Android, Apple, DesktopWindows, Favorite, GitHub, Language, OpenInNew} from "@mui/icons-material";

import {AppContext, useRequest} from "../../base";
import {styled} from '@mui/material/styles';
import {useParams} from "react-router-dom";
import {MethodsRequest} from "../../base/request/MethodsRequest";
import {ConstantLottie} from "../../base/constants/ConstantLottie";

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

export function ProjectsPage(props) {

    const theme = useTheme();
    const {t, isLocEn, route, conf} = useContext(AppContext)
    const {loading, data, error} = useRequest(MethodsRequest.projects, false);

    let {filter} = useParams();

    const isMiddle = useMediaQuery(theme.breakpoints.down('md'));

    const [formats, setFormats] = useState(filter === undefined ? [] : [filter.replace('filter-', '').toUpperCase()]);

    const handleFormat = (event, newFormats) => {
        setFormats(newFormats !== null && !formats.includes(newFormats) ? newFormats : []);
        if (filter !== undefined) {
            route.toLocationReplace(conf.routes.projects.index.route)
        }
    };

    useEffect(() => {
        document.title = t(props.title);
    });

    const cards = []
    const value = data ?? []

    value.forEach((data, index) => {
        if (formats.includes(data.category) || formats.length === 0) {
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
                                        {new Intl
                                            .DateTimeFormat(isLocEn ? 'en-US' : 'ru-RU', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: '2-digit',
                                            })
                                            .format(data.createAt)}
                                    </Typography>
                                </Stack>
                            }
                        />
                        <CardMedia
                            component="img"
                            height="140"
                            image={data.publicImage}
                            alt={data.title}
                        />
                        <CardContent className={"ProjectsItemContent"}>
                            <Typography className={"ProjectsItemSubtitle"} variant="textCard">
                                {data.description}
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
            <Grid container spacing={isMiddle || (loading || error) ? 8 : 14}>
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
                                <Grid
                                    style={{
                                        textAlign: "end",
                                        paddingTop: 0,
                                    }}
                                    item xs={12}>
                                    <Paper
                                        elevation={0}
                                        sx={{
                                            display: 'inline-block',
                                            border: (theme) => `1px solid ${theme.palette.divider}`,
                                        }}
                                    >
                                        <StyledToggleButtonGroup
                                            exclusive
                                            value={formats}
                                            onChange={handleFormat}
                                            aria-label="text formatting"
                                        >
                                            <Tooltip title="Android" value="ANDROID">
                                                <ToggleButton
                                                    size="small"
                                                    color="primary"
                                                    aria-label="Android"
                                                    value="ANDROID"
                                                >
                                                    <Android/>
                                                </ToggleButton>
                                            </Tooltip>
                                            <Tooltip title="iOS" value="IOS">
                                                <ToggleButton
                                                    size={"small"}
                                                    color={"primary"}
                                                    aria-label="iOS"
                                                    value="IOS"
                                                >
                                                    <Apple/>
                                                </ToggleButton>
                                            </Tooltip>
                                            <Tooltip title="Web" value="WEB">
                                                <ToggleButton
                                                    size={"small"}
                                                    color={"primary"}
                                                    aria-label="Web"
                                                    value="WEB"
                                                >
                                                    <Language/>
                                                </ToggleButton>
                                            </Tooltip>
                                            <Tooltip title="PC" value="OTHER">
                                                <ToggleButton
                                                    size={"small"}
                                                    color={"primary"}
                                                    aria-label="Other"
                                                    value="OTHER"
                                                >
                                                    <DesktopWindows/>
                                                </ToggleButton>
                                            </Tooltip>
                                        </StyledToggleButtonGroup>
                                    </Paper>
                                </Grid>
                                {cards.length !== 0 ? cards : <Grid item xs={12}>
                                    <Zoom timeout={200} in={true}>
                                        <Stack alignItems={"center"}>

                                            <Stack alignItems={"center"} spacing={2}>
                                                <Lottie style={{
                                                    width: 250,
                                                    borderRadius: '50%',
                                                    backgroundColor: 'white'
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
        </Container>
    );
}
