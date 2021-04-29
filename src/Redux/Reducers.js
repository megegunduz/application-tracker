import { combineReducers } from 'redux';
import { userReducer, USER_NAMESPACE } from '../Modules/Auth/Redux/UserRedux';
// Reducer'ları kendi modüllerinde oluştur, burda import edip combineReducers ile export et


export default combineReducers({
   // Buraya oluşturulan reducerlar gelecek. Mesela:
   // [THEMING_NAMESPACE]: ThemeReducer,
   // [LOCALIZATION_NAMESPACE]: LocalizationReducer ,
   // ...
   [USER_NAMESPACE]: userReducer,
});