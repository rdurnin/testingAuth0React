import { useAuth0 } from '@auth0/auth0-react';
import { AppBar, makeStyles, Switch, Toolbar, Typography } from '@material-ui/core';
import DarkModeIcon from '@material-ui/icons/Brightness2';

import { toggleDarkMode } from '../store/dark-mode/reducer';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import SignIn from './SignIn';
import SignOut from './SignOut';

const Header = () => {
  const { isAuthenticated } = useAuth0();
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const darkMode = useAppSelector((state) => state.darkMode);
  const onChangeDarkMode = () => {
    dispatch(toggleDarkMode());
  };
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Code Editor App
        </Typography>
        <DarkModeIcon />
        <Switch onChange={onChangeDarkMode} color="default" checked={darkMode} />
        {isAuthenticated ? <SignOut /> : <SignIn />}
      </Toolbar>
    </AppBar>
  );
};

const useStyles = makeStyles(() => ({
  title: {
    flex: 1,
  },
}));

export default Header;
