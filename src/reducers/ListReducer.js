import {handleActions} from 'redux-actions';

import * as actions from '../actions';

const defaultState = {
  chosenItems: {},
  phone: '',
  token: '',
};

const myCareReducer = handleActions(
  {
    [actions.setChosenItems]: (state, action) => {
      return {
        ...state,
      };
    },
    [actions.loginSuccess]: (state, {response: {data}}) => {
      return {
        ...state,
        phone: data.phone,
        token: data.token,
      };
    },
  },
  defaultState,
);

export default myCareReducer;
