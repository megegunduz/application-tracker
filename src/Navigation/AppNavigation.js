import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../Modules/Home/Screens/HomeScreen';
import SettingsScreen from '../Modules/Settings/Screens/SettingsScreen';
import { useThemedValues } from '../Modules/Theming';

import getStackScreenOptions from './Styles/StackScreenOptions';
import { tn, useLocalization } from '../Modules/Localization';

const AppStack = createStackNavigator();

const AppNavigation = props => {

    const { styles, colors } = useThemedValues(getStackScreenOptions)

    const loc = useLocalization();
    const upperCaseText = (text) => {
        console.log(tn.home)
        return loc.t(text).toLocaleUpperCase();
    }

    return (
        <AppStack.Navigator
        screenOptions={styles}
        >
            <AppStack.Screen
                name="home-screen"
                component={HomeScreen}
                options={{
                    title: upperCaseText("home")
                }}
            />
            <AppStack.Screen
                name="settings-screen"
                component={SettingsScreen}
                options={{
                    title: upperCaseText("settings")
                }}
            />
        </AppStack.Navigator>
    );
};

export default AppNavigation;
