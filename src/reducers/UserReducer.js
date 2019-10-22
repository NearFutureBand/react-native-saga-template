import { handleActions } from 'redux-actions';

import * as actions from 'src/actions';

const defaultState = {
  username: null,
  displayName: null,
  refreshToken: null,
  uid: null,
};

const myCareReducer = handleActions(
  {
    [actions.signInSuccess]: (
      state,
      { response: { additionalUserInfo, user } }
    ) => {
      return {
        ...state,
        username: additionalUserInfo.username,
        displayName: user._user.displayName,
        refreshToken: user._user.refreshToken,
        uid: user._user.uid,
      };
    },
  },
  defaultState
);

export default myCareReducer;
