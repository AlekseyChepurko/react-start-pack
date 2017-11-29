import React from 'react';
import { Switch, Route } from 'react-router';
import { NotFound } from '../index';

const Root = () => <div>Root</div>;
const Some = () => <div>Some</div>;
export const Main = () => (<Switch>
  <Route exact path='/' component={ Root } />
  <Route exact path='/some' component={ Some } />
  <Route path='*' component={ NotFound } />
</Switch>);
