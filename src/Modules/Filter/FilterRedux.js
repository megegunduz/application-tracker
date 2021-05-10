export const FILTER_NAMESPACE = "filter";

const INITIAL_STATE = {
    filterType: null,
}

export const FilterSelectors = {
    filterType: globalState => globalState[FILTER_NAMESPACE].filterType,
};

export const FilterActionTypes = {
    SET_FILTER_TYPE: "filter/set_filter_type",
};

export const FilterActionCreators = {
    setFilterType: filterType => {
        return {
            type: FilterActionTypes.SET_FILTER_TYPE,
            payload: { filterType },
        };
    },
};

export const filterReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FilterActionTypes.SET_FILTER_TYPE:
            return {
                filterType: action.payload.filterType,
            };
        default:
            return state;
    }
};