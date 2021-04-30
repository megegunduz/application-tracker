import React from 'react';
import { View, Text, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';

import { useThemedValues } from '../../Theming';
import ApplicationItem from '../Components/ApplicationItem';

import getStyles from '../Styles/HomeScreenStyles';

import DummyData from '../DummyJobApplicationData';
import Icon from '../../../Components/Icon';
import { Svgs } from '../../../StylingConstants';

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
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <View style={styles.listContainer}>
                    <FlatList
                        data={DummyData}
                        renderItem={_renderApplicatonItem}
                        keyExtractor={(item, index) => item.id}
                    />
                </View>
                <View style={styles.addIconContainer}>
                    {/* <Text>O</Text> */}
                    <Icon svg={Svgs.Plus} iconStyle={styles.addIcon} />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen;