import { combineReducers } from 'redux';

import list from './ListReducer';
import signIn from './SignInReducer';
import user from './UserReducer';

const appReducer = combineReducers({
  list,
  signIn,
  user,
});

export default appReducer;
