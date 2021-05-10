import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { useThemedValues } from '../Theming';
import { FilterScreen } from '../Filter';

import getStyles from './Styles/MenuDrawerScreenStyles';

const MenuDrawerScreen = props => {

    const { styles } = useThemedValues(getStyles);

    return (
        <View style={styles.container}>
            <FilterScreen />
            <Text>DUMMY TEXT</Text>
        </View>
    );
};

export default MenuDrawerScreen;
