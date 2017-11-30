const SET_AUTH_TOKEN = 'AUTH/SET_AUTH_TOKEN';

const intialState = {
  token: window.sessionStorage.instagramToken || '',
};

export default function (state = intialState, { type, payload }) {
  switch (type) {
    case SET_AUTH_TOKEN: return {
      ...state,
      token: payload.token,
    };
    default: return { ...state };
  }
}

export const setAuthToken = (token) => ({
  type: SET_AUTH_TOKEN,
  payload: {
    token,
  },
});
