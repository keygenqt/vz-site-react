import * as React from 'react';
import {Button, Grid} from "@mui/material";

function BlockResume() {
    return (
        <React.Fragment>





            <div className={"BlockResume"}>

                    <div className={"Title"}>
                        Brief Resume
                    </div>

                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={6}>
                            <div className={"ItemTitle"}>
                                Professional UX design
                            </div>
                            <div className={"ItemTime"}>
                                2015 - Present
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <div className={"ItemText"}>
                                Cursus in hac habitasse platea dictumst. Maecenas volutpat blandit aliquam etiam erat
                                velit.
                            </div>
                        </Grid>
                    </Grid>

                    <div className={"Line"}/>

                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={6}>
                            <div className={"ItemTitle"}>
                                Professional UX design
                            </div>
                            <div className={"ItemTime"}>
                                2015 - Present
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <div className={"ItemText"}>
                                Cursus in hac habitasse platea dictumst. Maecenas volutpat blandit aliquam etiam erat
                                velit.
                            </div>
                        </Grid>
                    </Grid>

                    <div className={"Line"}/>

                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={6}>
                            <div className={"ItemTitle"}>
                                Professional UX design
                            </div>
                            <div className={"ItemTime"}>
                                2011 - 2015
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <div className={"ItemText"}>
                                Cursus in hac habitasse platea dictumst. Maecenas volutpat blandit aliquam etiam erat
                                velit.
                            </div>
                        </Grid>
                    </Grid>

                    <div className={"Line"}/>

                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={6}>
                            <div className={"ItemTitle"}>
                                Professional UX design
                            </div>
                            <div className={"ItemTime"}>
                                2010
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <div className={"ItemText"}>
                                Cursus in hac habitasse platea dictumst. Maecenas volutpat blandit aliquam etiam erat
                                velit.
                            </div>
                        </Grid>
                    </Grid>


                    <div className={"ButtonBlock"}>
                        <Button
                            onClick={() => {

                            }}
                            style={{"height": "55px"}}
                            size="large"
                            variant="outlined"
                        >Learn More</Button>
                    </div>

            </div>
        </React.Fragment>
    );
}

export default BlockResume;