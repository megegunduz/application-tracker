export const ERROR_NAMESPACE = 'error';

const INITIAL_STATE = {
    errorExists: false,
    errorCode: null,
}

export const ErrorSelectors = {
    errorExists: globalState => globalState[ERROR_NAMESPACE].errorExists,
    errorCode: globalState => globalState[ERROR_NAMESPACE].errorCode
}

export const ErrorActionTypes = {
    SET_ERROR_EXISTS: "error/set_error_exists",
};

export const ErrorActionCreators = {
    setErrorExists: (errorExists, errorCode) => {
        return {
            type: ErrorActionTypes.SET_ERROR_EXISTS,
            payload: { errorExists, errorCode },
        };
    },
};

export const errorReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ErrorActionTypes.SET_ERROR_EXISTS:
            return {
                errorExists: action.payload.errorExists,
                errorCode: action.payload.errorCode,
            }  
        default:
            return state;
    }
};