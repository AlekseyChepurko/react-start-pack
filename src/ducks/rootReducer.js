import { combineReducers } from 'redux';
import Auth from './modules/Auth';
import { UserInfo } from './modules/UserInfo';

export default combineReducers({
  Auth,
  UserInfo,
});
