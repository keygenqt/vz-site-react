import * as React from 'react';
import {useContext, useEffect} from 'react';

import {Container, Grid, useMediaQuery, useTheme} from "@mui/material";

import MainElement from "./elements/MainElement";
import AboutElement from "./elements/AboutElement";
import ResumeElement from "./elements/ResumeElement";
import ProjectsElement from "./elements/ProjectsElement";
import SkillsElement from "./elements/SkillsElement";
import {LanguageContext} from "../../base";

export function HomePage(props) {

    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
    const blockAboutRef = React.useRef(null)
    const {t} = useContext(LanguageContext)

    useEffect(() => {
        document.title = t('pages.home.t_title');

        // console.log(AppUtils.getListLocalization(enLocalization).join('\n\n-----------------------------\n\n'))
        // console.log(AppUtils.getListLocalization(ruLocalization).join('\n\n-----------------------------\n\n'))
    });

    return (
        <Container maxWidth="lg" className={"Page HomePage"}>
            <Grid container spacing={isSmall ? 8 : 16}>
                <Grid item xs={12}>
                    <MainElement onClick={() => {
                        blockAboutRef.current.scrollIntoView({behavior: 'smooth', block: 'start'})
                    }}/>
                </Grid>
                <Grid ref={blockAboutRef} item xs={12}>
                    <AboutElement/>
                </Grid>
                <Grid item xs={12}>
                    <ProjectsElement/>
                </Grid>
                <Grid item md={9} sm={12} xs={12}>
                    <ResumeElement/>
                </Grid>
                <Grid item xs={12}>
                    <SkillsElement/>
                </Grid>
            </Grid>
        </Container>
    );
}