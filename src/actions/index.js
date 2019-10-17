import createAction from 'redux-actions/es/createAction';

export const setChosenItems = createAction('SET_CHOSEN_ITEMS');

export const loginRequest = createAction('LOGIN_REQUEST');
export const loginFailed = createAction('LOGIN_FAILED');
export const loginSuccess = createAction('LOGIN_SUCCESS');
