import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import { connect } from 'react-redux';
import { func, object } from 'prop-types';
import { getSelfInfo } from '../../ducks/modules/UserInfo';
import { Main } from '../Main/index';
import { NotFound } from '../index';

const Some = () => <div>Some</div>;

class Auth extends Component {
  componentWillMount() {
    this.props.getSelfInfo();
  }
  renderMain = () => <Main userInfo={ this.props.userInfo } />;
  render() {
    return (<Switch>
      <Route
        exact
        path='/'
        render={ this.renderMain }
      />
      <Route exact path='/some' component={ Some } />
      <Route path='*' component={ NotFound } />
    </Switch>);
  }
}

Auth.propTypes = {
  getSelfInfo: func,
  userInfo: object,
};

Auth.defaultProps = {
  getSelfInfo: () => {},
  userInfo: {},
};

const mapStateToProps = (state) => ({
  userInfo: state.UserInfo.SELF,
});

export default connect(mapStateToProps, {
  getSelfInfo,
})(Auth);
