export const LOADING_NAMESPACE = 'loading';

const INITIAL_STATE = {
    isLoading: false,
};

export const loadingSelector = globalState => globalState[LOADING_NAMESPACE].isLoading;

export const LoadingActionTypes = {
    SET_IS_LOADING: 'loading/set_is_loading',
};

export const LoadingActionCreators = {
    setIsLoading: (isLoading) => {
        return {
            type: SET_IS_LOADING,
            payload: { isLoading },
        };
    },
};

export const loadingReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LoadingActionTypes.SET_IS_LOADING:
            return {
                isLoading: action.payload.isLoading,
            }
        default:
            return state;
    }
}