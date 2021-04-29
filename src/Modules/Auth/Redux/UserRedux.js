export const USER_NAMESPACE = "auth";

const INITIAL_STATE = {
    user: null
};

export const SET_USER = "user/set_user";

export const setUser = (userName) => {
    return {
        type: SET_USER,
        payload: {
            userName,
        }
    }
};

export const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_USER:
            // Bu tipte action gelince dönecek olan obje    
        default:
            return state;
    }
}