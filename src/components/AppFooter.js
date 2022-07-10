import Container from "@mui/material/Container";
import {ButtonGroup, Grid, Link, ThemeProvider} from "@mui/material";
import Button from "@mui/material/Button";
import {ArrowUpward, Email, Telegram, Twitter} from "@mui/icons-material";

import {createTheme} from '@mui/material/styles';

const theme = createTheme({
    palette: {
        white: {
            main: 'rgba(255,255,255,0.6)',
            contrastText: '#fff',
        },
    },
});


function AppFooter() {
    return (
        <ThemeProvider theme={theme}>
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
                            <ButtonGroup color="white" size="small" aria-label="small button group">
                                <Button key="tg">
                                    <Telegram/>
                                </Button>
                                <Button key="tw">
                                    <Twitter/>
                                </Button>
                                <Button key="em">
                                    <Email/>
                                </Button>
                                <Button key="up">
                                    <ArrowUpward/>
                                </Button>
                            </ButtonGroup>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </ThemeProvider>
    );
}

export default AppFooter;
