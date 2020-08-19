import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import RouterRoutes from 'utils/routes/RouterRoutes';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isLoggedIn = localStorage.getItem('x-auth-token') || '';

  return isLoggedIn ? (
    <Route {...rest} render={props => <Component {...props} />} />
  ) : (
    <Redirect to={RouterRoutes.auth} />
  );
};

export default PrivateRoute;
