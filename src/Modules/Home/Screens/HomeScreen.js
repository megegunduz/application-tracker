import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import getStyles from '../Styles/HomeScreenStyles';
import { useThemedValues } from '../../Theming';

const HomeScreen = () => {

    const { styles, colors } = useThemedValues(getStyles);

    const navigation = useNavigation();

    const _onPress_GoToSettingsScreen = () => {
        navigation.navigate("settings-screen")
    }

    return (
        <View style={styles.container}>
            <Text>Welcome To Application Tracker</Text>
            <Text>HomeScreen</Text>
            <TouchableOpacity onPress={_onPress_GoToSettingsScreen}>
                <Text>Go to settings screen</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HomeScreen;