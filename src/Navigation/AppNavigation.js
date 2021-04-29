import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../Modules/Home/Screens/HomeScreen';
import SettingsScreen from '../Modules/Settings/Screens/SettingsScreen';


const AppStack = createStackNavigator();

const AppNavigation = props => {
    return (
        <AppStack.Navigator>
            <AppStack.Screen
                name="home-screen"
                component={HomeScreen}
            />
            <AppStack.Screen
                name="settings-screen"
                component={SettingsScreen}
            />
        </AppStack.Navigator>
    );
};

export default AppNavigation;
