import { createTheme, ThemeProvider } from '@material-ui/core';
import { PropsWithChildren } from 'react';
import { useAppSelector } from '../store/hooks';
import { appColors, darkModeColors } from './colors';

const CustomThemeProvider = (props: PropsWithChildren<{}>) => {
  const darkMode = useAppSelector((state) => state.darkMode);
  const theme = createTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: appColors.primary,
      },
      background: {
        default: darkMode ? darkModeColors.background : appColors.background,
      },
      text: {
        primary: darkMode ? darkModeColors.font : appColors.font,
      },
    },
  });
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default CustomThemeProvider;
