import * as React from 'react';
import Container from "@mui/material/Container";
import {ButtonGroup, Grid, Link} from "@mui/material";
import Button from "@mui/material/Button";
import {ArrowUpward, Email, GitHub, Telegram} from "@mui/icons-material";
import {openUrl, openUrlInNewTab} from "../utils/AppHelpers";
import {AppConstants} from "../utils/AppConstants";
import {useTranslation} from "react-i18next";

function AppFooter() {

    const {t} = useTranslation();

    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    return (
        <Container maxWidth="lg" className={"Footer"}>

            <div className={"Text"}>
                <div>
                    {t("footer.t_questions")}
                </div>
                <div>
                    {t("footer.t_say")}
                </div>
            </div>

            <div className={"TextSmall"}>
                <Link href={"mailto:" + AppConstants.data.email}>
                    {AppConstants.data.email}
                </Link>
            </div>

            <div className={"TextSmall"}>
                <div>{t("footer.t_name")}</div>
                <div>{AppConstants.data.key}</div>
            </div>

            <div className={"Line"}/>

            <div className={"ButtonsBlock"}>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6}>
                        <div className={"Copy"}>
                            © 2022 KeyGenQt
                        </div>
                    </Grid>
                    <Grid className={"Buttons"} item xs={12} sm={6}>
                        <ButtonGroup color="white6" size="small" aria-label="small button group">
                            <Button onClick={() => openUrlInNewTab(AppConstants.links.telegram)}>
                                <Telegram/>
                            </Button>
                            <Button onClick={() => openUrl("mailto:" + AppConstants.data.email)}>
                                <Email/>
                            </Button>
                            <Button onClick={() => openUrlInNewTab(AppConstants.links.github)}>
                                <GitHub/>
                            </Button>
                            <Button onClick={scrollToTop}>
                                <ArrowUpward/>
                            </Button>
                        </ButtonGroup>
                    </Grid>
                </Grid>
            </div>
        </Container>
    );
}

export default AppFooter;
