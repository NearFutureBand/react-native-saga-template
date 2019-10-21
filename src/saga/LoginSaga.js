import {all, put, call, takeEvery} from 'redux-saga/effects';

import {navigate} from 'src/navigation/navigationService';
import * as actions from '../actions';
import routes from 'src/navigation/routes';
import map from 'src/actions/map';

function* loginSuccess(action) {
  if (action.response.data.action) {
    yield call(map[action.response.data.action]);
  }
}

function* signupSuccess() {
  yield call(navigate, routes.dashboard);
}

function* logUserOut() {
  yield call(navigate, routes.signIn);
}

const loginSaga = function* loginSaga() {
  yield all([
    takeEvery([actions.loginSuccess], loginSuccess),
    /*takeEvery([actions.signupSuccess], signupSuccess),
    takeEvery([actions.logUserOut], logUserOut),*/
  ]);
};

export default loginSaga;
