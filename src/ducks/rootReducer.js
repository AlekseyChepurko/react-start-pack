import { combineReducers } from 'redux';

export default combineReducers({
  yourFirstReducer: () => ({
    initField: 'some string is here',
  }),
});
