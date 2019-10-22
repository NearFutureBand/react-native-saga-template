import { handleActions } from 'redux-actions';

import * as actions from 'src/actions';

const defaultState = {
  email: 'test@test.com',
  password: 'password',
};

const myCareReducer = handleActions(
  {
    [actions.changeCredentials]: (state, { payload: { inputName, value } }) => {
      return {
        ...state,
        [inputName]: value,
      };
    },
  },
  defaultState
);

export default myCareReducer;
