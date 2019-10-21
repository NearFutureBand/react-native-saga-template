import {combineReducers} from 'redux';

import list from './ListReducer';

const appReducer = combineReducers({
  list,
});

export default appReducer;
