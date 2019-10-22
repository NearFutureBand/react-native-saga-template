import { all } from 'redux-saga/effects';

import watchRequestSaga from './watchRequest';
import SignInSaga from "./SignInSaga";

function* rootSaga() {
  yield all([watchRequestSaga(), SignInSaga()]);
}

export default rootSaga;
