import { all } from 'redux-saga/effects';
// Modüllerde oluşturduğun saga'ları burda import et

export default function* rootSaga() {
    yield all([
        // import edilen sagaları burda kopyalayarak kullan:
        // ...userSagas,
    ]);
}