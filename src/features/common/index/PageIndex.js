import * as React from 'react';
import {Container, Grid, useMediaQuery, useTheme} from "@mui/material";

import BlockMain from "./BlockMain";
import BlockAbout from "./BlockAbout";
import BlockResume from "./BlockResume";
import BlockProjects from "./BlockProjects";
import BlockSkills from "./BlockSkills";

function PageIndex() {

    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
    const blockAboutRef = React.useRef(null)

    return (
        <Container maxWidth="lg" className={"Page Index"}>
            <Grid container spacing={isSmall ? 8 : 16}>
                <Grid item xs={12}>
                    <BlockMain onClick={() => {
                        blockAboutRef.current.scrollIntoView({behavior: 'smooth', block: 'start'})
                    }}/>
                </Grid>
                <Grid ref={blockAboutRef} item xs={12}>
                    <BlockAbout/>
                </Grid>
                <Grid item xs={12}>
                    <BlockProjects/>
                </Grid>
                <Grid item md={9} sm={12} xs={12}>
                    <BlockResume/>
                </Grid>
                <Grid item xs={12}>
                    <BlockSkills/>
                </Grid>
            </Grid>
        </Container>
    );
}

export default PageIndex;
