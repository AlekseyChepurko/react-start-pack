import React from 'react';
import { array, object, oneOfType } from 'prop-types';

export const Common = (props) => (<div>
  <header><h1>Common component text</h1></header>
  <div>{ props.children }</div>
</div>);
Common.propTypes = {
  children: oneOfType([array, object]),
};
Common.defaultProps = {
  children: null,
};
