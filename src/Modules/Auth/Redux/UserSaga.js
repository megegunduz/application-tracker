import { takeEvery, call, put, fork } from '@redux-saga/core/effects'
import { getCurrentUser, signIn, signOut, signUp, updateUser, resetPassword } from '../API/Firebase';
import { UserActionCreators, UserActionTypes } from './UserRedux';
import { LoadingActionCreators } from '../../Loading';
import { ErrorActionCreators } from '../../Error/ErrorRedux';

function* signUpAndCreateDisplayName(email, password, displayName) {
    try {

        // Sign Up user
        yield call(signUp, email, password);

        // Update user displayName at Firebase
        yield call(updateUser, displayName);

        // Get user data from Firebase
        const currentUser = getCurrentUser();
        // Transfer signed up user to redux
        yield put(UserActionCreators.setUser(currentUser));

    } catch (error) {
        yield put(ErrorActionCreators.setErrorExists(true, error.code))
    }
}

function* workerSignUp(action) {

    const { email, password, displayName } = action.payload;

    try {

        yield put(LoadingActionCreators.setIsLoading(true));

        yield call(signUpAndCreateDisplayName, email, password, displayName);

    } catch (error) {
        console.log(error);
    } finally {
        yield put(LoadingActionCreators.setIsLoading(false));
    }

}

function* watchSignUpRequest() {
    yield takeEvery(UserActionTypes.SIGN_UP_REQUEST, workerSignUp);
};

function* workerSignIn (action) {
    const { email, password } = action.payload;
    
    try {

        yield put(LoadingActionCreators.setIsLoading(true));

        yield call(signIn, email, password);

        const currentUser = getCurrentUser();
        yield put(UserActionCreators.setUser(currentUser));
    } catch (error) {
        yield put(ErrorActionCreators.setErrorExists(true, error.code))
    } finally {
        yield put(LoadingActionCreators.setIsLoading(false));
    }
};

function* watchSignInRequest() {
    yield takeEvery(UserActionTypes.SIGN_IN_REQUEST, workerSignIn);
};

function* workerSignOut() {
    try {

        yield put(LoadingActionCreators.setIsLoading(true));

        yield call(signOut);
        yield put(UserActionCreators.setUser(null));
    } catch (error) {
        
    } finally {
        yield put(LoadingActionCreators.setIsLoading(false));
    }
}

function* watchSignOutRequest() {
    yield takeEvery(UserActionTypes.SIGN_OUT_REQUEST, workerSignOut)
};

function* workerPasswordReset(action) {

    const {email} = action.payload;

    try {
        yield put(LoadingActionCreators.setIsLoading(true));

        yield call(resetPassword, email)
        
    } catch (error) {
        console.log(error)
        yield put(ErrorActionCreators.setErrorExists(true, error.code))
    } finally {
        yield put(LoadingActionCreators.setIsLoading(false))
    }
}

function* watchPasswordResetRequest() {
    yield takeEvery(UserActionTypes.PASSWORD_RESET_REQUEST, workerPasswordReset)
}

export const userSagas = [
    fork(watchSignUpRequest),
    fork(watchSignInRequest),
    fork(watchSignOutRequest),
    fork(watchPasswordResetRequest),
];