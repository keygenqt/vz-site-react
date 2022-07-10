import Container from "@mui/material/Container";
import {
    Alert,
    AlertTitle,
    ButtonGroup,
    CardActionArea,
    Collapse,
    Fab,
    Grid,
    IconButton,
    TextField
} from "@mui/material";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import {WindowHeight} from '../utils/helpers'
import {Email, ExpandMore, Telegram, Twitter} from "@mui/icons-material";
import CloseIcon from '@mui/icons-material/Close';
import {useState, useRef} from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import contemplativeReptile from '../../static/images/index/contemplative-reptile.jpg'

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
    const executeScroll = () => myRef.current.scrollIntoView({behavior: 'smooth', block: 'start'})

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

            <div ref={myRef} className={"AboutBlock"}>
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

            <div className={"CardsBlock"}>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={4}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="140"
                                image={contemplativeReptile}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="140"
                                image={contemplativeReptile}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="140"
                                image={contemplativeReptile}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </div>

            <div className={"Resume"}>
                <Container maxWidth="md">

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


                </Container>
            </div>

            <div className={"Projects"}>
                <Grid container spacing={6}>
                    <Grid item xs={12} sm={3}>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={contemplativeReptile}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Lizard
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={contemplativeReptile}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Lizard
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={contemplativeReptile}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Lizard
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={contemplativeReptile}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Lizard
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={contemplativeReptile}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Lizard
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={contemplativeReptile}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Lizard
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={contemplativeReptile}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Lizard
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={contemplativeReptile}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Lizard
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            </div>

            <div className={"Skills"}>

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

        </Container>
    );
}

export default Index;
