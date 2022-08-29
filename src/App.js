import * as React from 'react';
import {useContext} from 'react';
import {ThemeProvider} from "@mui/material";
import {AppTheme} from "./base/theme/AppTheme";
import {NavigateContext} from "./base";

export default function App() {

    const {route} = useContext(NavigateContext)

    return (
        <ThemeProvider theme={AppTheme}>
            {route.render()}
        </ThemeProvider>
    );
}
