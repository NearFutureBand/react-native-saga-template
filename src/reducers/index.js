import { combineReducers } from 'redux';

import list from './ListReducer';
import signIn from './SignInReducer';

const appReducer = combineReducers({
  list,
  signIn,
});

export default appReducer;
