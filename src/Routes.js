import React from 'react';
import { Router, Switch, Route } from 'react-router';
import { connect } from 'react-redux';
import { object, bool } from 'prop-types';

import { Login } from './coponents/Login';
import { Common, Main } from './coponents/';

const Check = (Component) => (<div>
  <Route path='/' component={ Component } />
</div>);

const Routes = (props) => (<Router history={ props.history }>
  <Switch>
    <Common>
      <Route path='/'>
        { Check(props.auth ? Main : Login) }
      </Route>
    </Common>
  </Switch>
</Router>
);

Routes.propTypes = {
  history: object,
  auth: bool,
};
Routes.defaultProps = {
  history: {},
  auth: false,
};

const mapStateToProps = (state) => ({
  auth: !!state.Auth.token,
});
export default connect(mapStateToProps)(Routes);
export { Routes };

