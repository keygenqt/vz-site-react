import '../static/css/common.css';

import AppTopBar from "../components/AppTopBar";

import * as React from 'react';
import RootAnimationBg from "../components/RootAnimationBg.js";
import AppFooter from "../components/AppFooter";
import {ThemeProvider} from "@mui/material";
import {AppTheme} from "../theme/AppTheme";

import PageBlogList from "./blog/list/PageBlogList";
import PageIndex from "./common/index/PageIndex";
import PageWorksList from "./works/list/PageWorksList";
import PageUtilsList from "./utils/list/PageUtilsList";

import {Route, Routes, useLocation} from "react-router-dom";
import PageError404 from "./common/errors/PageError404";

function App() {

    const location = useLocation()

    return (
        <ThemeProvider theme={AppTheme}>
            <React.Fragment>
                {location.pathname === '/' ? <RootAnimationBg /> : null}
                <AppTopBar/>
                <div className={"App AppTable"}>
                    <div className={"AppTableRow"}>
                        <main>
                            <Routes>
                                <Route exact path="/" element={<PageIndex/>}/>
                                <Route exact path="/blog" element={<PageBlogList/>}/>
                                <Route exact path="/works" element={<PageWorksList/>}/>
                                <Route exact path="/utils" element={<PageUtilsList/>}/>
                                <Route path="*" element={<PageError404/>}/>
                            </Routes>
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
