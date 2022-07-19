import {createTheme} from '@mui/material/styles';

import {palette} from "./impl/palette.js";
import {typography} from "./impl/typography.js";

export const AppTheme = createTheme({
    palette: palette,
    typography: typography,
});