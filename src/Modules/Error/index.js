export {
    ERROR_NAMESPACE,
    ErrorSelectors,
    ErrorActionTypes,
    ErrorActionCreators,
    errorReducer,
} from './ErrorRedux';

import _ErrorManager from './ErrorManager';
export const ErrorManager = _ErrorManager;