import * as React from 'react';
import {ThemeProvider} from "@mui/material";
import {AppTheme} from "../theme/AppTheme";
import {AppRoutes} from "../base/routes/AppRoutes";
import {RouteRender} from "../base/routes/RouteRender";
import RootAnimationBg from "../components/RootAnimationBg.js";
import AppTopBar from "../components/AppTopBar";
import AppFooter from "../components/AppFooter";

function App() {

    const [isCenter, setIsCenter] = React.useState(false);

    return (
        <ThemeProvider theme={AppTheme}>
            <React.Fragment>
                {AppRoutes.isHomePage() ? <RootAnimationBg/> : null}
                <AppTopBar/>
                <div className={"App AppTable"}>
                    <div className={"AppTableRow"}>
                        <main style={{
                            background: AppRoutes.isHomePage() ? '#caf4ff0d' : '#bff2ff36',
                            verticalAlign: isCenter ? 'middle' : 'top'
                        }}>
                            {RouteRender.render(() => {
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
