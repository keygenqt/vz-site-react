import Container from "@mui/material/Container";
import {Alert, ButtonGroup, Collapse, Fab, Grid, IconButton, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import {WindowHeight} from '../utils/helpers'
import {Email, ExpandMore, Telegram, Twitter} from "@mui/icons-material";
import CloseIcon from '@mui/icons-material/Close';
import {useState, useRef} from 'react';

function Index() {

    const height = WindowHeight();
    const [open, setOpen] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    const myRef = useRef(null)
    const executeScroll = () => myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })

    return (
        <Container maxWidth="lg" className={"Index"}>

            <div style={{height: height - 70}} className={"MainBlock AppTable"}>

                <div className={"AppTableCell"}>

                    <div className={"Hello"}>
                        Hello
                    </div>

                    <div className={"Iam"}>
                        I am a computer programmer
                    </div>

                    <Container maxWidth="sm">

                        <Collapse in={open}>
                            <Alert
                                action={
                                    <IconButton
                                        aria-label="close"
                                        color="inherit"
                                        size="small"
                                        onClick={() => {
                                            setOpen(false);
                                        }}
                                    >
                                        <CloseIcon fontSize="inherit"/>
                                    </IconButton>
                                }
                                sx={{mb: 2}}
                            >
                                Thank you for your interest! I will send as soon as possible.
                            </Alert>
                        </Collapse>

                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{mt: 1}}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={8}>
                                    <TextField
                                        variant="outlined"
                                        autoComplete="email"
                                        name="email"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <Button
                                        onClick={() => {
                                            setOpen(true);
                                        }}
                                        style={{"height": "55px"}}
                                        fullWidth
                                        size="large"
                                        variant="outlined"
                                    >Get my resume</Button>
                                </Grid>
                            </Grid>
                        </Box>

                        <div className={"GetResume"}>
                            * Get my resume directly in your mailbox
                        </div>

                    </Container>

                    <Fab
                        onClick={executeScroll}
                        className={"BottomButton"}
                        variant="extended"
                        color="primary"
                        aria-label="add"
                    >
                        <ExpandMore/>
                    </Fab>
                </div>
            </div>

            <div ref={myRef} style={{height: height-479 /* todo */ }} className={"AboutBlock"}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <div className={"Title"}>
                            About Me
                        </div>
                        <div className={"About"}>
                            I'm a programmer, In the broadest sense of the word
                        </div>
                        <div className={"Line"}></div>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <div className={"Text"}>
                            <p>
                                Jetpack Compose is Android’s modern toolkit for building native UI. It simplifies and
                                accelerates UI development on Android. Quickly bring your app to life with less code,
                                powerful tools, and intuitive Kotlin APIs.
                            </p>
                            <p>
                                React makes it painless to create interactive UIs. Design simple views for each state in
                                your application, and React will efficiently update and render just the right components
                                when your data changes.
                            </p>
                            <p>
                                Java is a high-level, class-based, object-oriented programming language that is designed
                                to have as few implementation dependencies as possible.
                            </p>
                        </div>
                        <div className={"Follow"}>
                            Follow me
                        </div>
                        <ButtonGroup size="small" aria-label="small button group">
                            <Button key="one">
                                <Telegram/>
                            </Button>
                            <Button key="two">
                                <Twitter/>
                            </Button>
                            <Button key="three">
                                <Email/>
                            </Button>
                        </ButtonGroup>
                    </Grid>
                </Grid>
            </div>

        </Container>
    );
}

export default Index;
