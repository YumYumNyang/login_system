import { put, call, all, takeEvery, take, race } from 'typed-redux-saga';
import {
  gettingUserProfileStart,
  gettingUserProfileSuccess,
  gettingUserProfileFailure,
  logOut,
} from './main.action';
import { tokenStore } from '../../../api/tokenStore';
import { getUserProfile } from './main.api';
import Router from 'next/router';

function* getUserInfoSaga() {
  try {
    const token = tokenStore.get();
    if (!token) {
      console.log('token is undefined');
      return;
    }
    console.log('token', token);
    const user = yield call(getUserProfile);
    yield put(gettingUserProfileSuccess(user));
    console.log(user);
  } catch (err) {
    yield put(gettingUserProfileFailure());
    console.log(err);
  }
}
function* logOutSaga() {
  try {
    const clear = yield tokenStore.clear();
    console.log('로그아웃');
    yield put(logOut());
    console.log('잉?');
  } catch (err) {
    console.log(err);
  }
}

export function* watchMain() {
  yield race([
    takeEvery(gettingUserProfileStart.type, getUserInfoSaga),
    takeEvery(logOut.type, logOutSaga),
  ]);
}
