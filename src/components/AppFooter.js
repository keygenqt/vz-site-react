import * as React from 'react';
import {useContext} from 'react';
import Container from "@mui/material/Container";
import {Button, ButtonGroup, Grid, Link} from "@mui/material";
import {ArrowUpward, Email, GitHub, LinkedIn, Telegram} from "@mui/icons-material";
import {AppContext, ConstantLinks, ConstantOther} from "../base";

export default function AppFooter() {

    const {route, conf, t} = useContext(AppContext)

    return (
        <Container maxWidth="lg" className={"Footer"}>

            {route.isPage(conf.routes.home.index) ? <React.Fragment>
                <div className={"Text"}>
                    <div>
                        {t("footer.t_questions")}
                    </div>
                    <div>
                        {t("footer.t_say")}
                    </div>
                </div>
                <div className={"TextSmall"}>
                    <Link href={`mailto:${ConstantOther.email}`}>
                        {ConstantOther.email}
                    </Link>
                </div>
                <div className={"TextSmall"}>
                    <div>{t("footer.t_name")}</div>
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
                            <Button onClick={() => route.openUrlNewTab(ConstantLinks.github)}>
                                <GitHub style={{width: 20}}/>
                            </Button>
                            <Button onClick={() => route.openUrlNewTab(ConstantLinks.linkedIn)}>
                                <LinkedIn/>
                            </Button>
                            <Button onClick={() => route.openUrlNewTab(ConstantLinks.telegram)}>
                                <Telegram/>
                            </Button>
                            <Button onClick={() => route.openUrl(`mailto:${ConstantOther.email}`)}>
                                <Email/>
                            </Button>
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
