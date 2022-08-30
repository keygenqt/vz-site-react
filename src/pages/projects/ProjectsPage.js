import * as React from 'react';
import {useContext, useEffect, useState} from 'react';
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
    Fade,
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

import {LanguageContext, NavigateContext, ProjectsCustomPages, useRequest} from "../../base";
import {styled} from '@mui/material/styles';
import {useParams} from "react-router-dom";
import {MethodsRequest} from "../../services/MethodsRequest";
import {ConstantLottie} from "../../base/constants/ConstantLottie";
import {ScrollRecovery} from "../../components/other/ScrollRecovery";

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

/**
 * Custom page projects
 *
 * @param id
 * @param conf
 */
const pagesById = (id, conf) => {
    const pages = ProjectsCustomPages(conf)
    const key = Object.keys(pages).find(key => pages[key].id === id)
    return pages[key].route ?? null
}

export function ProjectsPage(props) {

    const theme = useTheme();
    const {route, conf} = useContext(NavigateContext)
    const {t, isLocEn} = useContext(LanguageContext)
    const {loading, data, error} = useRequest(MethodsRequest.projects);
    const [likes, setLikes] = useState({})

    let {filter} = useParams();

    const isMiddle = useMediaQuery(theme.breakpoints.down('md'));

    const [formats, setFormats] = useState(filter === undefined ? [] : [filter.replace("filter:", "").toUpperCase()]);

    const handleFormat = (event, newFormats) => {
        setFormats(newFormats !== null && !formats.includes(newFormats) ? newFormats : []);
        if (filter !== undefined) {
            route.toLocationReplace(conf.routes.ps.projects)
        }
    };

    useEffect(() => {
        document.title = t('pages.projects.t_title');
    });

    useEffect(() => {
        if (data) {
            let likes = {}
            data.forEach((item) => {
                likes[item.id] = item.isLike
            })
            setLikes(likes)
        }
    }, [data]);

    const getIcon = (data) => {
        switch (data.category) {
            case 'ANDROID':
                return <Android sx={{fontSize: 20, color: '#3BD580'}}/>
            case 'IOS':
                return <Apple sx={{fontSize: 20, color: '#a1a1a1'}}/>
            case 'WEB':
                return <Language sx={{fontSize: 20, color: '#3198c1'}}/>
            default:
                return <DesktopWindows sx={{fontSize: 18, padding: '2px', color: '#2468d1'}}/>
        }
    }

    const cards = []
    const value = data ?? []

    value.forEach((data, index) => {
        if (formats.includes(data.category) || formats.length === 0) {
            cards.push(
                <Grid style={{margin: 0}} key={"item-projects-" + index} item md={4} sm={6} xs={12}>
                    <Card variant="outlined" className={"CardBg"}>
                        <CardActionArea disabled={pagesById(data.id, conf) === null} onClick={() => {
                            route.toLocation(pagesById(data.id, conf))
                        }}>
                            <CardHeader
                                title={
                                    <Stack spacing={1}>
                                        {getIcon(data)}
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
                        </CardActionArea>

                        <CardActions disableSpacing style={{
                            display: 'block'
                        }}>

                            <Tooltip title={likes[data.id] === true ? t("common.t_unlike") : t("common.t_like")}>
                                <IconButton
                                    aria-label="Like"
                                    onClick={() => {
                                        if (likes[data.id]) {
                                            MethodsRequest.unlikeProject(data.id)
                                        } else {
                                            MethodsRequest.likeProject(data.id)
                                        }
                                        setLikes({...likes, [data.id]: !likes[data.id]})
                                    }}
                                >
                                    <Favorite
                                        sx={{color: likes[data.id] === true ? '#c13131' : undefined}}
                                    />
                                </IconButton>
                            </Tooltip>

                            {data.url ? <Tooltip title={t("pages.projects.t_to_project")}>
                                <IconButton
                                    style={{float: 'right'}}
                                    onClick={() => {
                                        route.openUrlNewTab(data.url)
                                    }}
                                >
                                    <OpenInNew/>
                                </IconButton>
                            </Tooltip> : null}

                            {data.urlGitHub ? <Tooltip title={t("pages.projects.t_to_github")}>
                                <IconButton
                                    style={{float: 'right'}}
                                    onClick={() => {
                                        route.openUrlNewTab(data.urlGitHub)
                                    }}
                                >
                                    <GitHub/>
                                </IconButton>
                            </Tooltip> : null}


                        </CardActions>
                    </Card>
                </Grid>
            );
        }
    })

    return (
        <Container maxWidth="lg" className={"Page PagePaddings ProjectsPage"}>
            <>
                <ScrollRecovery recovery={!loading}/>
                <Fade timeout={500} in={true}>
                    <Grid container spacing={isMiddle || (loading) ? 8 : 14}>
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
