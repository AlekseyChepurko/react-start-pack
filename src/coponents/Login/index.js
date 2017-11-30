import React, {} from 'react';
import { Redirect, Route } from 'react-router';
import { connect } from 'react-redux';
import { object, string, func } from 'prop-types';
import { setAuthToken } from '../../ducks/modules/Auth';

const clientID = INSTAGRAM_CLIENT_ID;

const _AuthRedirect = (props) => { // eslint-disable-line
  if (props.token) {
    props.setAuthToken(props.token);
  }
  return (<Redirect to={ { pathname: '/' } } />);
};

_AuthRedirect.propTypes = {
  token: string,
  setAuthToken: func,
};

_AuthRedirect.defaultProps = {
  token: '',
  setAuthToken: () => {},
};

const AuthRedirect = connect(null, {
  setAuthToken,
})(_AuthRedirect);

export const Login = (props) => {
  const token = props.location.hash.substr('#access_token='.length);
  return (<div>
    <Route
      path='login/callback'
    >
      <AuthRedirect token={ token } />
    </Route>
    <a href={ `https://www.instagram.com/oauth/authorize/?client_id=${ clientID }&redirect_uri=http://localhost:3000/login/callback&response_type=token` }>login</a>
  </div>);
};

Login.propTypes = {
  location: object,
};

Login.defaultProps = {
  location: {},
};
