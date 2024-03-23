import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: 'rgb(65, 66, 68)',
    },
    secondary: {
      main: 'rgba(155, 156, 157,0.5)',
    },
  },
});

export default lightTheme;
