import * as React from 'react';
import {useContext} from 'react';
import Container from "@mui/material/Container";
import {Button, ButtonGroup, Grid, Link} from "@mui/material";
import {ArrowUpward} from "@mui/icons-material";
import {AppContext, ConstantOther} from "../../base";
import ButtonsFollow from "./elements/ButtonsFollow";

export function AppFooter() {

    const {route, conf, t} = useContext(AppContext)

    return (
        <Container maxWidth="lg" className={"Footer"}>

            {route.isPage(conf.routes.home.index) ? <React.Fragment>
                <div className={"Text"}>
                    <div>
                        {t("components.footer.t_questions")}
                    </div>
                    <div>
                        {t("components.footer.t_say")}
                    </div>
                </div>
                <div className={"TextSmall"}>
                    <Link href={`mailto:${ConstantOther.email}`}>
                        {ConstantOther.email}
                    </Link>
                </div>
                <div className={"TextSmall"}>
                    <div>{t("components.footer.t_name")}</div>
                    <div>{ConstantOther.nickname}</div>
                </div>
                <div className={"Line"}/>
            </React.Fragment> : null}

            <div className={"ButtonsBlock"}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <div className={"Copy"}>
                            {ConstantOther.copy}
                        </div>
                    </Grid>
                    <Grid className={"Buttons"} item xs={12} sm={6}>
                        <ButtonGroup color="white6" size="small" aria-label="small button group">
                            <ButtonsFollow/>
                            <Button onClick={() => {
                                route.scrollToTopSmooth()
                            }}>
                                <ArrowUpward/>
                            </Button>
                        </ButtonGroup>
                    </Grid>
                </Grid>
            </div>
        </Container>
    );
}
