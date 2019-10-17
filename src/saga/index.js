import {all} from 'redux-saga/effects';

import watchRequestSaga from './watchRequest';
import loginSaga from './LoginSaga';

function* rootSaga() {
  yield all([watchRequestSaga(), loginSaga()]);
}

export default rootSaga;
