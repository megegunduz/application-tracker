import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppNavigation from './AppNavigation';
import AuthNavigation from './AuthNavigation';

const MainNavigation = props => {

    const isLoggedIn = true;

    return (
       <NavigationContainer>
           {
               isLoggedIn?
               <AppNavigation />
               :
               <AuthNavigation />
           }
       </NavigationContainer> 
    );
};

export default MainNavigation;
