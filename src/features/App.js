import '../static/css/common.css';

import AppTopBar from "../components/AppTopBar";

import * as React from 'react';
import RootAnimationBg from "../components/RootAnimationBg.js";
import PageIndex from "./common/index/PageIndex";
import AppFooter from "../components/AppFooter";
import {ThemeProvider} from "@mui/material";
import {AppTheme} from "../theme/AppTheme";


function App() {
    return (
        <ThemeProvider theme={AppTheme}>
            <React.Fragment>
                <RootAnimationBg/>
                <AppTopBar/>
                <div className={"App AppTable"}>
                    <div className={"AppTableRow"}>
                        <main>
                            <PageIndex/>
                        </main>
                    </div>
                    <div className={"AppTableRow"}>
                        <footer>
                            <AppFooter/>
                        </footer>
                    </div>
                </div>
            </React.Fragment>
        </ThemeProvider>
    );
}

export default App;
