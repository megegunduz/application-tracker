import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import Icon from '../../Components/Icon';
import { useThemedValues } from '../../Modules/Theming';
import { Svgs } from '../../StylingConstants';
import { DrawerActions, navigation } from '@react-navigation/core'

import getStyles from '../Styles/MenuButtonStyles';

const MenuButton = props => {

    const { styles, colors } = useThemedValues(getStyles);

    const navigation = useNavigation();

    const _onPress_ = () => {
        navigation.dispatch(DrawerActions.toggleDrawer())
    }

    return (
        <TouchableOpacity style={styles.iconContainer} onPress={_onPress_}>
            <Icon svg={Svgs.Menu} iconStyle={styles.icon}/>
        </TouchableOpacity>
    );
};

export default MenuButton;
