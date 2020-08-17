import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { useAuthContext } from '../../../context';

const PublicRoute = ({ component: Component, ...rest }) => {
  const { handleLogin } = useAuthContext();

  const isLoggedIn = localStorage.getItem('x-auth-token') || '';
  if (isLoggedIn) handleLogin();

  return <Route {...rest} render={props => <Component {...props} />} />;
};

export default PublicRoute;
