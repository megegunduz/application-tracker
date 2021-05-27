import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { tn, useLocalization } from '../Modules/Localization';
import { useThemedValues } from '../Modules/Theming';
import getStackScreenOptions from './Styles/AuthStackOptions';

import AuthScreen from '../Modules/Auth/Screens/AuthScreen';
import PaswordResetScreen from '../Modules/Auth/Screens/PasswordResetScreen';

const AuthStack = createStackNavigator();

const AuthNavigation = props => {

    const {styles} = useThemedValues(getStackScreenOptions);

    const loc = useLocalization();

    return (
        <AuthStack.Navigator
            screenOptions={styles}    
        >
            <AuthStack.Screen
                name="auth-screen"
                component={AuthScreen}
                options={{
                    headerShown: false,
                }}
            />
            <AuthStack.Screen
                name="password-reset-screen"
                component={PaswordResetScreen}
                options={{
                    title: loc.t(tn.resetScreenHeader),
                }}
            />
        </AuthStack.Navigator>
    );
};

export default AuthNavigation;
