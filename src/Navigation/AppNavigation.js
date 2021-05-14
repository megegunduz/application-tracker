import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeDrawer from './HomeDrawer';
import SettingsScreen from '../Modules/Settings/Screens/SettingsScreen';
import SettingsButton from './Components/SettingsButton';
import AddApplicationScreen from '../Modules/Home/Screens/AddApplicationScreen';
import EditApplicationScreen from '../Modules/Home/Screens/EditApplicationScreen';

import { useThemedValues } from '../Modules/Theming';
import { tn, useLocale, useLocalization } from '../Modules/Localization';

import getStackScreenOptions from './Styles/StackScreenOptions';
import { customUpperCase } from '../Utils/CustomUpperCase';
import MenuButton from './Components/MenuButton';

const AppStack = createStackNavigator();

const AppNavigation = props => {

    const { styles, colors } = useThemedValues(getStackScreenOptions)

    const loc = useLocalization();
    const locale = useLocale();
    const upperCaseText = (text) => {
        return customUpperCase(loc.t(text), locale);
    }

    return (
        <AppStack.Navigator
        screenOptions={styles}
        >
            <AppStack.Screen
                name="home-drawer"
                component={HomeDrawer}
                options={{
                    title: upperCaseText(tn.home),
                    headerLeft: () => <SettingsButton />,
                    headerRight: () => <MenuButton />
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
