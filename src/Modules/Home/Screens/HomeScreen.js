import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import getStyles from '../Styles/HomeScreenStyles';
import { useThemedValues } from '../../Theming';

const HomeScreen = () => {

    const { styles, colors } = useThemedValues(getStyles);


    return (
        <View style={styles.container}>
            <Text>Application Tracker</Text>
            <Text>HomeScreen</Text>
        </View>
    )
}

export default HomeScreen;