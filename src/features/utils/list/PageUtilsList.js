import * as React from 'react';
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

import {useTranslation} from "react-i18next";

const listData = [
    {
        icon: <YouTube sx={{fontSize: 140, color: '#c50404'}}/>,
        title: "YouTube\nDownload",
        text: "utils.data.t_you_tube",
    },
    {
        icon: <AccessTime sx={{fontSize: 140, color: '#565656'}}/>,
        title: "Unix\nTimestamp",
        text: "utils.data.t_unix_timestamp",
    },
    {
        icon: <CallMerge sx={{fontSize: 140, color: '#0462c5'}}/>,
        title: "Test\nAPI Query",
        text: "utils.data.t_api_tests",
    },
    {
        icon: <SnippetFolder sx={{fontSize: 140, color: '#01969f'}}/>,
        title: "Direct\nDemo Files",
        text: "utils.data.t_direct_demo",
    },
]

function PageUtilsList() {

    const {t} = useTranslation();

    const theme = useTheme();
    const isMiddle = useMediaQuery(theme.breakpoints.down('md'));

    const cards = []

    listData.forEach((data, index) => {
        cards.push(
            <Grid key={index + "item-utils"} item lg={3} md={6} sm={6} xs={12}>
                <Zoom timeout={700} in={true}>
                    <Card style={{textAlign: 'center', padding: '20px 15px'}}>
                        {data.icon}
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
                        <CardActions style={{
                            display: 'block'
                        }}>
                            <Button disabled size="small" variant={"outlined"} onClick={() => {

                                }}>
                                    {t("utils.list.t_btn_open")}
                                </Button>
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
                            {t("utils.list.t_title")}
                        </Typography>
                        <Typography align={"center"} variant="h2">
                            {t("utils.list.t_subtitle")}
                        </Typography>
                        <Divider component="div" style={{background: "#ff9e36"}} className={"Small"}/>
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

export default PageUtilsList;
