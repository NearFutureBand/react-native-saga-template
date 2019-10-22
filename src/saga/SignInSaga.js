import { all, put, call, takeEvery } from 'redux-saga/effects';
import auth from '@react-native-firebase/auth';

import { navigate } from 'src/navigation/navigationService';
import * as actions from '../actions';
import routes from 'src/navigation/routes';
import map from 'src/actions/map';

function* signInSuccess(action) {
  if (action.response.data.action) {
    yield call(map[action.response.data.action]);
  }
}

function* signIn({ payload: { email, password } }) {
  try {
    const response = yield call(signInApiRequest, email, password);
    yield put({
      type: 'SIGN_IN_SUCCESS',
      response,
      payload: {
        email,
        password,
      }
    });
  } catch (err) {
    console.log(err);
  }
}

async function signInApiRequest(email, password) {
  try {
    const response = await auth().signInWithEmailAndPassword(email, password);
    return response;
  } catch (err) {}
}

function* signupSuccess() {
  yield call(navigate, routes.dashboard);
}

function* logUserOut() {
  yield call(navigate, routes.signIn);
}

const loginSaga = function* loginSaga() {
  yield all([
    takeEvery([actions.signInStart], signIn),
    takeEvery([actions.signInSuccess], signInSuccess)
    /*takeEvery([actions.signupSuccess], signupSuccess),
    takeEvery([actions.logUserOut], logUserOut),*/
  ]);
};

export default loginSaga;
