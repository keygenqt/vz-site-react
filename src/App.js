import * as React from 'react';
import {useContext} from 'react';
import {ThemeProvider} from "@mui/material";
import {AppTheme} from "./base/theme/AppTheme";
import {AppFooter, AppTopBar, RootAnimationBg, TitleSquareAnimation} from "./components";
import {AppContext} from "./base";

export default function App() {

    const {route, conf} = useContext(AppContext)

    const [isCenter, setIsCenter] = React.useState(false);

    return (
        <ThemeProvider theme={AppTheme}>
            <React.Fragment>

                {route.isPage(
                    conf.routes.home.index,
                ) ? <RootAnimationBg/> : null}

                {route.isPage(
                    conf.routes.blog.index,
                    conf.routes.utils.index,
                    conf.routes.projects.index,
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
