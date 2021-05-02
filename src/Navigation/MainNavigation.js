import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import { userSelector } from '../Modules/Auth'
import AppNavigation from './AppNavigation';
import AuthNavigation from './AuthNavigation';

const MainNavigation = props => {

    const loggedInUser = useSelector(userSelector);

    return (
       <NavigationContainer>
           {
               loggedInUser?
               <AppNavigation />
               :
               <AuthNavigation />
           }
       </NavigationContainer> 
    );
};

export default MainNavigation;
