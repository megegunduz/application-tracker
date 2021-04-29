import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import AuthScreen from '../Modules/Auth/Screens/AuthScreen';

const AuthStack = createStackNavigator();

const AuthNavigation = props => {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen
                name="auth-screen"
                component={AuthScreen}
            />
        </AuthStack.Navigator>
    );
};

export default AuthNavigation;
