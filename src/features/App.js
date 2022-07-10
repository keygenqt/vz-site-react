import '../static/css/common.css';

import AppTopBar from "../components/AppTopBar";
import Container from '@mui/material/Container';

import * as React from 'react';
import RootAnimationBg from "../components/RootAnimationBg.js";
import Index from "./common/Index";

function App() {
    return (
        <React.Fragment>
            <RootAnimationBg/>
            <div className={"App Root-table"}>
                <div className={"Root-row"}>
                    <AppTopBar/>
                </div>
                <div className={"Root-row"}>
                    <main>
                        <Index/>
                    </main>
                </div>
                <div className={"Root-row"}>
                    <footer>
                        <Container maxWidth="lg">
                            footer
                        </Container>
                    </footer>
                </div>
            </div>
        </React.Fragment>
    );
}

export default App;
