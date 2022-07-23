import * as React from 'react';
import {useContext} from 'react';
import {ThemeProvider} from "@mui/material";
import {AppTheme} from "../theme/AppTheme";
import RootAnimationBg from "../components/RootAnimationBg.js";
import TitleSquareAnimation from "../components/TitleSquareAnimation.js";
import AppTopBar from "../components/AppTopBar";
import AppFooter from "../components/AppFooter";
import {RouteContext} from "../base/route/RouteContext";

function App() {

    const {route, conf} = useContext(RouteContext)

    const [isCenter, setIsCenter] = React.useState(false);

    return (
        <ThemeProvider theme={AppTheme}>
            <React.Fragment>

                {route.isPage(
                    conf.routes.home.index.route,
                ) ? <RootAnimationBg/> : null}

                {route.isPage(
                    conf.routes.blog.index.route,
                    conf.routes.utils.index.route,
                    conf.routes.projects.index.route,
                    conf.routes.projects.filter_and,
                    conf.routes.projects.filter_ios,
                    conf.routes.projects.filter_web,
                    conf.routes.projects.filter_pc,
                ) ? <TitleSquareAnimation/> : null}

                <AppTopBar/>

                <div className={"App AppTable"}>
                    <div className={"AppTableRow"}>
                        <main style={{
                            verticalAlign: isCenter ? 'middle' : 'top'
                        }}>
                            {route.render(() => {
                                setIsCenter(true)
                            })}
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
