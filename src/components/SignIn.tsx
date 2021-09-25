import { useAuth0 } from '@auth0/auth0-react';
import { Button, makeStyles } from '@material-ui/core';
import { commonColors } from '../theme/colors';

const SignIn = () => {
  const { loginWithRedirect } = useAuth0();
  const classes = useStyles();
  const signIn = () => {
    loginWithRedirect().catch((e) => {
      console.log('Failed to login: FUCKSAKE');
    });
  };
  return (
    <Button className={classes.button} onClick={signIn}>
      Sign In
    </Button>
  );
};

const useStyles = makeStyles({
  button: {
    color: commonColors.white,
  },
});
export default SignIn;
