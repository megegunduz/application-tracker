import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

import MainNavigation from './Navigation/MainNavigation';
import createStore from './Redux/CreateStore';
import { LoadingManager } from './Modules/Loading';
import { ErrorManager } from './Modules/Error';
import SplashScreen from 'react-native-splash-screen';

const { store, persistor } = createStore();

const App = () => {

    useEffect(() => {
        SplashScreen.hide();
    }, []);

    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <ErrorManager />
                <LoadingManager />
                <MainNavigation />
            </PersistGate>
        </Provider>
    )
}

export default App;