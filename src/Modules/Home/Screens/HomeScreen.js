import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

import { useThemedValues } from '../../Theming';
import ApplicationItem from '../Components/ApplicationItem';

import getStyles from '../Styles/HomeScreenStyles';

import DummyData from '../DummyJobApplicationData';

const HomeScreen = () => {

    const { styles, colors } = useThemedValues(getStyles);

    const _renderApplicatonItem = ({ item }) => {
        return (
            <ApplicationItem
                companyName={item.companyName}
                position={item.position}
                applicationDate={item.applicationDate}
                />
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={DummyData}
                renderItem={_renderApplicatonItem}
                keyExtractor={(item, index) => item.id}
            />
        </View>
    )
}

export default HomeScreen;