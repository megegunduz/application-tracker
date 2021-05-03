import { combineReducers } from 'redux';
import { userReducer, USER_NAMESPACE } from '../Modules/Auth/Redux/UserRedux';
import { LocalizationReducer, LOCALIZATION_NAMESPACE } from '../Modules/Localization';
import { ThemeReducer, THEMING_NAMESPACE } from '../Modules/Theming';
import { LOADING_NAMESPACE, loadingReducer } from '../Modules/Loading';
// Reducer'ları kendi modüllerinde oluştur, burda import edip combineReducers ile export et


export default combineReducers({
   // Buraya oluşturulan reducerlar gelecek. Mesela:
   // [THEMING_NAMESPACE]: ThemeReducer,
   // [LOCALIZATION_NAMESPACE]: LocalizationReducer ,
   // ...
   [USER_NAMESPACE]: userReducer,
   [THEMING_NAMESPACE]: ThemeReducer,
   [LOCALIZATION_NAMESPACE]: LocalizationReducer,
   [LOADING_NAMESPACE]: loadingReducer,
});