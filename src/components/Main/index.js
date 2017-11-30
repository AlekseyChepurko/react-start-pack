import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import { getSelfInfo } from '../../ducks/modules/UserInfo';
import { NotFound } from '../index';

const Root = () => <div>Root</div>;
const Some = () => <div>Some</div>;

class Main extends Component {
  componentWillMount() {
    this.props.getSelfInfo();
  }
  render() {
    return (<Switch>
      <Route exact path='/' component={ Root } />
      <Route exact path='/some' component={ Some } />
      <Route path='*' component={ NotFound } />
    </Switch>);
  }
}

Main.propTypes = {
  getSelfInfo: func,
};

Main.defaultProps = {
  getSelfInfo: () => {},
};

export default connect(null, {
  getSelfInfo,
})(Main);
