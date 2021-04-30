import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import Icon from '../../Components/Icon';
import { useThemedValues } from '../../Modules/Theming';
import { Svgs } from '../../StylingConstants';

import getStyles from '../Styles/SettingsButtonStyles';

const SettingsButton = props => {

    const { styles, colors } = useThemedValues(getStyles);

    const navigation = useNavigation();

    const _onPress_NavigateToSettingsScreen = () => {
        navigation.navigate('settings-screen');
    }

    return (
        <TouchableOpacity style={styles.iconContainer} onPress={_onPress_NavigateToSettingsScreen}>
            <Icon svg={Svgs.Settings} iconStyle={styles.icon}/>
        </TouchableOpacity>
    );
};

export default SettingsButton;
