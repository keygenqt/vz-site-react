import * as React from 'react';
import {useContext, useEffect} from 'react';
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Container,
    Divider,
    Grid,
    Stack,
    Typography,
    useMediaQuery,
    useTheme,
    Zoom
} from "@mui/material";

import {AccessTime, CallMerge, SnippetFolder, YouTube} from "@mui/icons-material";
import {AppContext} from "../../base";

const listData = [
    {
        icon: <YouTube sx={{fontSize: 140, color: '#c50404'}}/>,
        title: "YouTube\nDownload",
        text: "pages.utils.t_you_tube",
    },
    {
        icon: <AccessTime sx={{fontSize: 140, color: '#565656'}}/>,
        title: "Unix\nTimestamp",
        text: "pages.utils.t_unix_timestamp",
    },
    {
        icon: <CallMerge sx={{fontSize: 140, color: '#0462c5'}}/>,
        title: "Test\nAPI Query",
        text: "pages.utils.t_api_tests",
    },
    {
        icon: <SnippetFolder sx={{fontSize: 140, color: '#01969f'}}/>,
        title: "Direct\nDemo Files",
        text: "pages.utils.t_direct_demo",
    },
]

export function UtilsPage(props) {

    const {t} = useContext(AppContext)

    const theme = useTheme();
    const isMiddle = useMediaQuery(theme.breakpoints.down('md'));

    useEffect(() => {
        document.title = t(props.title);
    });

    const cards = []

    listData.forEach((data, index) => {
        cards.push(
            <Grid key={index + "item-utils"} item lg={3} md={6} sm={6} xs={12}>
                <Zoom timeout={700} in={true}>
                    <Card className={"CardBg"} variant="outlined" style={{
                        textAlign: 'center',
                    }}>
                        <div style={{
                            paddingTop: 20
                        }}>
                            {data.icon}
                        </div>
                        <CardHeader
                            style={{
                                whiteSpace: "pre"
                            }}
                            title={data.title}
                        />
                        <CardContent>
                            <Typography variant="textCard">
                                {t(data.text)}
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing style={{
                            display: 'block',
                        }}>
                            <Stack alignItems={"center"} spacing={1}>
                                <Divider/>
                                <Button disabled size="small" variant={"outlined"} onClick={() => {
                                }}>
                                    {t("pages.utils.t_btn_open")}
                                </Button>
                                <Divider/>
                            </Stack>
                        </CardActions>
                    </Card>
                </Zoom>
            </Grid>
        )
    })

    return (
        <Container maxWidth="lg" className={"Page PagePaddings UtilsList"}>
            <Grid container spacing={isMiddle ? 8 : 14}>
                <Grid item xs={7}>
                    <Stack spacing={4}>
                        <Typography align={"center"} variant="h4">
                            {t("pages.utils.t_title_page")}
                        </Typography>
                        <Typography align={"center"} variant="h2">
                            {t("pages.utils.t_subtitle")}
                        </Typography>
                        <Divider component="div" className={"Small"}/>
                    </Stack>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={isMiddle ? 3 : 6}>
                        {cards}
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
}
