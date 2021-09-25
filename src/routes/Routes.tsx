import { useAuth0 } from '@auth0/auth0-react';
import { makeStyles } from '@material-ui/core';
import { Redirect, Route, Switch } from 'react-router';
import Header from '../components/Header';
import Loading from '../components/common/loading/Loading';
import ProtectedRoute from '../auth/ProtectedRoute';
import routes from './routesConfig';

const Routes = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  const classes = useStyles();
  const codeEditor = () => <div>Code Editor App</div>;
  const someRoute = () => <div>This is my test route</div>;
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className={classes.main}>
      <Header />
      <div className={classes.page}>
        <Switch>
          <ProtectedRoute exact path={routes.codeEditor} component={codeEditor} />
          <ProtectedRoute exact path={routes.redundantTest} component={someRoute} />
          <Route exact path={routes.home}>
            {isAuthenticated ? <Redirect to={routes.codeEditor} /> : <div>Home Is Where The Hole Is</div>}
          </Route>
        </Switch>
      </div>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  main: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  page: {
    height: '100%',
  },
}));

export default Routes;
