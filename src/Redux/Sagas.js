import { all } from 'redux-saga/effects';
import { userSagas } from '../Modules/Auth/Redux/UserSaga';
// Modüllerde oluşturduğun saga'ları burda import et

export default function* rootSaga() {
    yield all([
        // import edilen sagaları burda kopyalayarak kullan:
        ...userSagas,
    ]);
}