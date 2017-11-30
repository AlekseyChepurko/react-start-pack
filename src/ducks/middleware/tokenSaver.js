/* eslint-disable */

export const tokenSaver = store => next => action => {
  if (action.type === 'AUTH/SET_AUTH_TOKEN' &&
      window.sessionStorage.instagramToken !== action.payload.token
  ) {
    window.sessionStorage.instagramToken = action.payload.token;
    console.log('Token was saved');
  }
  return next(action);
};
