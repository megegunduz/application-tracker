import { takeEvery, call, put, fork } from '@redux-saga/core/effects'
import { getCurrentUser, signIn, signOut, signUp, updateUser } from '../API/Firebase';
import { UserActionCreators, UserActionTypes } from './UserRedux'

function* signUpAndCreareDisplayName(email, password, displayName) {
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
        console.log(error);
    }
}

function* workerSignUp(action) {

    const { email, password, displayName } = action.payload;

    try {
        yield call(signUpAndCreareDisplayName, email, password, displayName);

    } catch (error) {
        console.log(error);
    }

}

function* watchSignUpRequest() {
    yield takeEvery(UserActionTypes.SIGN_UP_REQUEST, workerSignUp);
};

function* workerSignIn (action) {
    const { email, password } = action.payload;
    
    try {
        yield call(signIn, email, password);

        const currentUser = getCurrentUser();
        yield put(UserActionCreators.setUser(currentUser));
    } catch (error) {
        console.log(error)
    }
};

function* watchSignInRequest() {
    yield takeEvery(UserActionTypes.SIGN_IN_REQUEST, workerSignIn);
};

function* workerSignOut() {
    try {
        yield call(signOut);
        yield put(UserActionCreators.setUser(null));
    } catch (error) {
        
    }
}

function* watchSignOutRequest() {
    yield takeEvery(UserActionTypes.SIGN_OUT_REQUEST, workerSignOut)
};

export const userSagas = [
    fork(watchSignUpRequest),
    fork(watchSignInRequest),
    fork(watchSignOutRequest),
];