import * as React from 'react';
import {Alert, Grid, Typography} from "@mui/material";
import {Android, Apple, ViewQuilt, AccountTree, Language, DesktopWindows} from '@mui/icons-material';

const listData = [
    {
        icon: <Android fontSize="inherit" />,
        title: "Android",
        text: "Более 7 лет работю андройд программистом. Помню те времена когда еще MVVM не были популярным и MVP вполне всех устраивал."
    },
    {
        icon: <Apple fontSize="inherit" />,
        title: "iOS",
        text: "Опыта не много, но он есть. Изучаю swiftUI. На досуге пишу KMM проект. Рзаработка очень схожа с jetpack compose на котором пишу уже год."
    },
    {
        icon: <ViewQuilt fontSize="inherit" />,
        title: "Markup",
        text: "Около 5 лет клепал сайты как пулемет. Сейчас только для себя и open source. Например этот я сделал сам, так же как и его дизайн."
    },
    {
        icon: <AccountTree fontSize="inherit" />,
        title: "Database",
        text: "Моя любимая база с которой я работал больше всего - MySql. Много работал как с реляционными базами так и no noSql."
    },
    {
        icon: <Language fontSize="inherit" />,
        title: "Web",
        text: "Много писал сайтов на Yii2. Сейчас плотно изучаю React, к сожалению похоже на то что yii загибаеться и больше не пригодиться."
    },
    {
        icon: <DesktopWindows fontSize="inherit" />,
        title: "Linux",
        text: "Я из тех барадатых любителей linux. Долгое время собирал gentoo пока не надоело. Пишу приложения на разных языках open source."
    },
]

function BlockSkills() {

    const items = []

    listData.forEach((data, index) => {
        items.push(
            <Grid item md={6} sm={6} xs={12}>
                <Alert icon={data.icon} severity="info" className={"SkillAlert"}>
                    <Typography gutterBottom variant="h5">
                        {data.title}
                    </Typography>
                    <Typography component="div" gutterBottom variant="text2" style={{paddingBottom: 3}}>
                        {data.text}
                    </Typography>
                </Alert>
            </Grid>
        )
    });

    return (
        <React.Fragment>
            <React.Fragment>
                <Typography align={"center"} gutterBottom variant="h3" style={{marginBottom: 40}}>
                    My skills
                </Typography>
                <Grid className={"BlockSkills"} container spacing={3}>
                    {items}
                </Grid>
            </React.Fragment>
        </React.Fragment>
    );
}

export default BlockSkills;