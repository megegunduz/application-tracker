import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { useThemedValues } from '../Theming';
import { FilterScreen } from '../Filter';

import getStyles from './Styles/MenuDrawerScreenStyles';
import { useNavigation } from '@react-navigation/core';
import { tn, useLocalization } from '../Localization';

const MenuDrawerScreen = props => {

    const { styles } = useThemedValues(getStyles);

    const navigation = useNavigation();
    const loc = useLocalization();

    return (
        <View style={styles.container}>
            <FilterScreen />
        </View>
    );
};

export default MenuDrawerScreen;
