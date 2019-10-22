import createAction from 'redux-actions/es/createAction';

export const changeCredentials = createAction('CHANGE_CREDENTIALS');

export const signInStart = createAction('SIGN_IN_START');
export const signInFailure = createAction('SIGN_IN_FAILED');
export const signInSuccess = createAction('SIGN_IN_SUCCESS');
