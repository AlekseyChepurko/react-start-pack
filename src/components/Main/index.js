import React from 'react';
import { object } from 'prop-types';
/* eslint-disable camelcase */
export const Main = (props) => {
  const {
    username,
    profile_picture,
  } = props.userInfo;
  return (<div>
    <div>{username}</div>
    <img src={ profile_picture } alt='user avatar' />
  </div>);
};
Main.propTypes = {
  userInfo: object,
};

Main.defaultProps = {
  userInfo: {},
};
