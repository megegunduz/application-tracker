export const USER_NAMESPACE = "auth";

const INITIAL_STATE = {
    user: null
};

// Selectors
export const userSelector = globalState => globalState[USER_NAMESPACE].user;

// Action types
export const UserActionTypes = {
    SET_USER: 'user/set_user',
    SIGN_IN_REQUEST: 'user/sign_in_request',
    SIGN_UP_REQUEST: 'user/sign_up_request',
    SIGN_OUT_REQUEST: 'user/sign_out_request',
    PASSWORD_RESET_REQUEST: 'user/password_reset_request',
}

// Action creators
export const UserActionCreators = {
    setUser: (user) => ({
        type: UserActionTypes.SET_USER,
        payload: {user},
    }),
    signInRequest: (email, password) => ({
        type: UserActionTypes.SIGN_IN_REQUEST,
        payload: {email, password},
    }),
    signUpRequest: (email, password, displayName) => ({
        type: UserActionTypes.SIGN_UP_REQUEST,
        payload: {email, password, displayName},
    }),
    signOutRequest: () => ({
        type: UserActionTypes.SIGN_OUT_REQUEST,
    }),
    passwordResetRequest: (email) => ({
        type: UserActionTypes.PASSWORD_RESET_REQUEST,
        payload: {email}
    })
};

// Reducer
export const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.SET_USER:
            const newUser = action.payload.user;
            const lastUserEmail = newUser ? newUser.email : state.lastUserEmail;
            return {
                user: newUser,
                lastUserEmail,
            }
        default:
            return state;
    }
}