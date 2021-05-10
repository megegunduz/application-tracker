import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { tn, useLocale, useLocalization } from '../Modules/Localization';
import { customUpperCase } from '../Utils/CustomUpperCase';

import HomeScreen from '../Modules/Home/Screens/HomeScreen';
import MenuDrawerScreen from '../Modules/Menu/MenuDrawerScreen';

const HomeDrawerNavigator = createDrawerNavigator();

const HomeDrawer = props => {

    const loc = useLocalization();
    const locale = useLocale();
    const upperCaseText = (text) => {
        return customUpperCase(loc.t(text), locale);
    }

    return (
        <HomeDrawerNavigator.Navigator drawerPosition={'right'} drawerContent={() => <MenuDrawerScreen />}  drawerType={"front"}>
            <HomeDrawerNavigator.Screen
                name="home-screen"
                component={HomeScreen}
                options={{
                    title: upperCaseText(tn.home),
                }}
            />

        </HomeDrawerNavigator.Navigator>
    )
}

export default HomeDrawer;