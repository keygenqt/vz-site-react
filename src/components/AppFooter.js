import Container from "@mui/material/Container";
import {ButtonGroup, Grid, Link} from "@mui/material";
import Button from "@mui/material/Button";
import {ArrowUpward, Email, Telegram, Twitter} from "@mui/icons-material";

function AppFooter() {

    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    return (
        <Container maxWidth="lg" className={"Footer"}>

            <div className={"Text"}>
                <div>
                    Do you have any questions?
                </div>
                <div>
                    Don't be Shy, Say Hello!
                </div>
            </div>

            <div className={"TextSmall"}>
                <Link href="mailto:dev@keygenqt.com">
                    dev@keygenqt.com
                </Link>
            </div>

            <div className={"TextSmall"}>
                <div>Vitaliy Zarubin</div>
                <div>@keygenqt</div>
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
                            <Button key="tg">
                                <Telegram/>
                            </Button>
                            <Button key="tw">
                                <Twitter/>
                            </Button>
                            <Button key="em">
                                <Email/>
                            </Button>
                            <Button
                                onClick={scrollToTop}
                                key="up">
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
