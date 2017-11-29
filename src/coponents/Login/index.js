import React, { Component } from 'react';
import { Redirect, Route } from 'react-router';
import { connect } from 'react-redux';

const clientID = INSTAGRAM_CLIENT_ID; // eslint-disable-line

class _AuthRedirect extends Component {
  componentWillMount() {
  }
  render() {
    return (<Redirect to={ { pathname: '/' } } />);
  }
}

const AuthRedirect = connect(null, {
})(_AuthRedirect);

export const Login = () => (<div>
  <Route
    path='login/callback'
  >
    <AuthRedirect />
  </Route>
  <a href={ `https://www.instagram.com/oauth/authorize/?client_id=${ clientID }&redirect_uri=http://localhost:3000/login/callback&response_type=token` }>login</a>
</div>);

