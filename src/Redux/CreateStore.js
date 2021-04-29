import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';

import ReduxPersist from './ReduxPersistConfig';
import Reducers from './Reducers';
import rootSaga from './Sagas';

const configureStore = (rootReducer) => {

    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

    let sagasManager = sagaMiddleware.run(rootSaga);

    const persistor = persistStore(store);

    return {
        store,
        persistor,
        sagasManager,
        sagaMiddleware,
    };
};

export default () => {
    let finalReducers = Reducers;
    if (ReduxPersist.active) {
        const persistconfig = ReduxPersist.storeConfig;
        finalReducers = persistReducer(persistconfig, Reducers);
    }

    let { store, persistor, sagasManager, sagaMiddleware } = configureStore(finalReducers);
    
    if (module.hot) {
        module.hot.accept(() => {
            const nextRootReducer = require('./Reducers').reducers;
            store.replaceReducer(nextRootReducer);

            const newYieldedSagas = require('./Sagas').default;
            sagasManager.cancel();
            sagasManager.done.then(() => {
                sagasManager = sagaMiddleware(newYieldedSagas);
            });
        });
    }

    return { store, persistor };
}