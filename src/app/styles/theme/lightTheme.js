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
    success: {
      main: 'rgba(22, 160, 133,1.0)',
    },
    carousell: {
      main: 'rgba(192, 57, 43,1.0)',
      hover: 'rgba(192, 57, 43,0.7)',
    },
  },
});

export default lightTheme;
