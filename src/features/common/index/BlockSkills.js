import * as React from 'react';
import {Alert, AlertTitle, Grid} from "@mui/material";

function BlockSkills() {
    return (
        <React.Fragment>
            <div className={"BlockSkills"}>

                <div className={"Title"}>
                    My Skills
                </div>

                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6}>
                        <Alert severity="success">
                            <AlertTitle>Success</AlertTitle>
                            This is a success alert — <strong>check it out!</strong>
                        </Alert>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Alert severity="success">
                            <AlertTitle>Success</AlertTitle>
                            This is a success alert — <strong>check it out!</strong>
                        </Alert>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Alert severity="success">
                            <AlertTitle>Success</AlertTitle>
                            This is a success alert — <strong>check it out!</strong>
                        </Alert>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Alert severity="success">
                            <AlertTitle>Success</AlertTitle>
                            This is a success alert — <strong>check it out!</strong>
                        </Alert>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Alert severity="success">
                            <AlertTitle>Success</AlertTitle>
                            This is a success alert — <strong>check it out!</strong>
                        </Alert>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Alert severity="success">
                            <AlertTitle>Success</AlertTitle>
                            This is a success alert — <strong>check it out!</strong>
                        </Alert>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Alert severity="success">
                            <AlertTitle>Success</AlertTitle>
                            This is a success alert — <strong>check it out!</strong>
                        </Alert>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Alert severity="success">
                            <AlertTitle>Success</AlertTitle>
                            This is a success alert — <strong>check it out!</strong>
                        </Alert>
                    </Grid>
                </Grid>

            </div>
        </React.Fragment>
    );
}

export default BlockSkills;