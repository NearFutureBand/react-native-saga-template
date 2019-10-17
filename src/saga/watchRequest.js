import {put, all, takeEvery, select, call} from 'redux-saga/effects';
import _ from 'lodash';

import api from '../api';
import makeRequest from '../api/makeRequest';
//import {getToken} from 'src/modules/User/selectors';

function* watchRequest(action) {
  try {
    const requestProperties = api[_.camelCase(action.type)](action.payload);
    /*const token = yield select(getToken);

    if (token) {
      requestProperties.headers.Authorization = `Bearer ${token}`;
    }*/
    console.log(requestProperties);
    const response = yield call(makeRequest, requestProperties);
    if (response.data) {
      yield put({
        type: action.type.replace('_REQUEST', '_SUCCESS'),
        response,
        payload: action.payload,
      });
    }
  } catch (e) {
    console.log(e);
    const response = {
      status: 'WATCH_REQUEST',
      statusText: 'Something went wrong before calling axios',
      ...e.response,
    };
    // if (response.status === 401) {
    //   yield put(logUserOut());
    // }

    const errorModel = {
      type: action.type.replace('_REQUEST', '_FAILED'),
      payload: action.payload,
      message: response.statusText,
      status: response.status,
      response,
    };
    yield put(errorModel);
  }
}

function* watchRequestSaga() {
  yield all([
    takeEvery(action => _.endsWith(action.type, '_REQUEST'), watchRequest),
  ]);
}

export default watchRequestSaga;
