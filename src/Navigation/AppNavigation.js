import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../Modules/Home/Screens/HomeScreen';
import SettingsScreen from '../Modules/Settings/Screens/SettingsScreen';
import SettingsButton from './Components/SettingsButton';
import AddApplicationScreen from '../Modules/Home/Screens/AddApplicationScreen';
import EditApplicationScreen from '../Modules/Home/Screens/EditApplicationScreen';

import { useThemedValues } from '../Modules/Theming';
import { tn, useLocalization } from '../Modules/Localization';

import getStackScreenOptions from './Styles/StackScreenOptions';


const AppStack = createStackNavigator();

const AppNavigation = props => {

    const { styles, colors } = useThemedValues(getStackScreenOptions)

    const loc = useLocalization();
    const upperCaseText = (text) => {
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
                    title: upperCaseText(tn.home),
                    headerRight: () => <SettingsButton />
                }}
            />
            <AppStack.Screen
                name="settings-screen"
                component={SettingsScreen}
                options={{
                    title: upperCaseText(tn.settings)
                }}
            />
            <AppStack.Screen
                name="add-application-screen"
                component={AddApplicationScreen}
                options={{
                    title: upperCaseText(tn.addApplication)
                }}
            />
            <AppStack.Screen
                name="edit-application-screen"
                component={EditApplicationScreen}
                options={{
                    title: upperCaseText(tn.edit)
                }}
            />
        </AppStack.Navigator>
    );
};

export default AppNavigation;
