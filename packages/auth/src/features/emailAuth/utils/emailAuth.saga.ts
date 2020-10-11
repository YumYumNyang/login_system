import { put, all, takeEvery } from 'redux-saga/effects';
import { call } from 'typed-redux-saga';
import { sendingEmailRequest, emailValidate, emailExistence } from './emailAuth.api';
import {
  sendingEmailRequestStart,
  sendingEmailRequestSuccess,
  sendingEmailRequestFailure,
  emailIsExistStart,
  emailIsExistSuccess,
  emailIsExistFailure,
} from './emailAuth.action';
import {
  emailValidationStart,
  emailValidationSuccess,
  emailValidationFailure,
} from './emailAuth.action';

// function* emailExistSaga(action: ReturnType<typeof emailIsExistStart>) {
//   try {
//     const email = action.payload;
//     const { existence } = yield call(emailExistence, email);
//     if (existence) {
//       alert('해당 이메일이 존재합니다.');
//     }
//     yield put(emailIsExistSuccess(existence));
//   } catch (err) {
//     yield put(emailIsExistFailure());
//     console.log(err);
//   }
// }
function* emailExistSaga(email: string) {
  try {
    yield put(emailIsExistStart(email));
    const { existence } = yield call(emailExistence, email);
    console.log('exist1', existence);
    yield put(emailIsExistSuccess(existence));
    return existence;
  } catch (err) {
    console.log(err);
    yield put(emailIsExistFailure());
  }
}

function* sendEmailSaga(action: ReturnType<typeof sendingEmailRequestStart>) {
  try {
    const email = action.payload;
    // yield takeEvery(emailIsExistStart.type, emailExistSaga);
    const existence = yield* call(emailExistSaga, email);
    console.log('exist2', existence);
    if (existence) {
      alert('해당이메일이 이미 존재합니다.');
    } else {
      console.log('request');
      const { emailAuthenticationId } = yield* call(sendingEmailRequest, email);
      yield put(sendingEmailRequestSuccess(email, emailAuthenticationId));
    }
  } catch (err) {
    yield put(sendingEmailRequestFailure());
    console.log(err);
  }
}

function* emailValidationSaga(action: ReturnType<typeof emailValidationStart>) {
  try {
    const { emailAuthenticationId, authenticationKey } = action.payload;
    yield call(emailValidate, emailAuthenticationId, authenticationKey);
    yield put(emailValidationSuccess());
  } catch (err) {
    yield put(emailValidationFailure());
  }
}

export function* watchEmailAuth() {
  yield all([
    takeEvery(sendingEmailRequestStart.type, sendEmailSaga),
    takeEvery(emailValidationStart.type, emailValidationSaga),
  ]);
}
