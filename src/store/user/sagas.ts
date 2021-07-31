import { all, fork, put, takeLatest } from 'redux-saga/effects';
import { PayloadAction } from 'typesafe-actions';
import { signupFailed, signupSuccess } from './actions';
import { StartUserSignup, UserActionTypes, UserSignupFailed } from './types';

function* handleSignupWorker(
  action: PayloadAction<UserActionTypes.START_SIGNUP, StartUserSignup>
) {
  try {
    console.log(action);
    yield put(
      signupSuccess({
        fullName: 'idea-frontend',
        email: 'idea-frontend@idea.io',
      })
    );
  } catch (ex) {
    const errors = (ex?.response?.data?.error ?? []) as UserSignupFailed;
    yield put(signupFailed(errors));
  }
}

function* watchForSignup() {
  yield takeLatest(UserActionTypes.START_SIGNUP, handleSignupWorker);
}

function* userSagas() {
  yield all([watchForSignup].map(fork));
}

export default userSagas;
