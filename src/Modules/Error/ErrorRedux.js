export const ERROR_NAMESPACE = 'error';

const INITIAL_STATE = {
    errorExists: false,
    errorMessage: null,
}

export const ErrorSelectors = {
    errorExists: globalState => globalState[ERROR_NAMESPACE].errorExists,
    errorMessage: globalState => globalState[ERROR_NAMESPACE].errorMessage,
}

export const ErrorActionTypes = {
    SET_ERROR_EXISTS: "error/set_error_exists",
};

export const ErrorActionCreators = {
    setErrorExists: (errorExists, errorMessage) => {
        return {
            type: ErrorActionTypes.SET_ERROR_EXISTS,
            payload: { errorExists, errorMessage },
        };
    },
};

export const errorReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ErrorActionTypes.SET_ERROR_EXISTS:
            return {
                errorExists: action.payload.errorExists,
                errorMessage: action.paylaod.errorMessage,
            }  
        default:
            return state;
    }
};