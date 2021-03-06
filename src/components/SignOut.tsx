import { useAuth0 } from '@auth0/auth0-react';
import { Button, makeStyles } from '@material-ui/core';
import { commonColors } from '../theme/colors';

const SignOut = () => {
  const { logout } = useAuth0();
  const classes = useStyles();
  const signOut = () => {
    logout({
      returnTo: window.location.origin,
    });
  };
  return (
    <Button className={classes.button} onClick={signOut}>
      Sign Out
    </Button>
  );
};

const useStyles = makeStyles({
  button: {
    color: commonColors.white,
  },
});
export default SignOut;
