export const USER_NAMESPACE = "auth";

const INITIAL_STATE = {
    user: null
};

// Selectors
export const userSelector = globalState => globalState[USER_NAMESPACE].user;

// Action types
export const UserActionTypes = {
    SET_USER: 'user/set_user',
    SING_IN_REQUEST: 'user/sign_in_request',
    SIGN_UP_REQUEST: 'user/sign_up_request',
    SIGN_OUT_REQUEST: 'user/sign_out_request',
}

// Action creators
export const UserActionCreators = {
    setUser: (user) => ({
        type: SET_USER,
        payload: {user},
    }),
    signInRequest: (email, password) => ({
        type: SIGN_OUT_REQUEST,
        payload: {email, password},
    }),
    signUpRequest: (email, password, displayName) => ({
        type: SIGN_UP_REQUEST,
        payload: {email, password, displayName},
    }),
    signOutRequest: () => ({
        type: SIGN_OUT_REQUEST,
    }),
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