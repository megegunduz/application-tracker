import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import { useThemedValues } from '../../Theming';
import ApplicationItem from '../Components/ApplicationItem';
import DummyData from '../DummyJobApplicationData';
import Icon from '../../../Components/Icon';
import { Svgs } from '../../../StylingConstants';

import getStyles from '../Styles/HomeScreenStyles';

const HomeScreen = () => {

    const [isDeleteMode, setIsDeleteMode] = useState(false);

    const { styles, colors } = useThemedValues(getStyles);

    const navigation = useNavigation();

    const _renderApplicatonItem = ({ item }) => {
        return (
            <ApplicationItem
                companyName={item.companyName}
                position={item.position}
                applicationDate={item.applicationDate}
                onPress={() => _onPress_NavigateToEditAppScreen(item)}
                onLongPress={_onLongPress_TurnOnDeleteMode}
                deleteMode={isDeleteMode}
            />
        )
    }

    const _onPress_NavigateToEditAppScreen = applicationItem => {
        if (!isDeleteMode) {
            // Navigate to EditApplicationScreen route with pressed item as params
            navigation.navigate("edit-application-screen", {
                applicationItem,
            });
        }

    }

    const _onPress_NavigateToAddAppScreen = () => {
        navigation.navigate("add-application-screen")
    }

    const _onLongPress_TurnOnDeleteMode = () => {
        setIsDeleteMode(true);
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
                <TouchableOpacity style={styles.addIconContainer} onPress={_onPress_NavigateToAddAppScreen}>
                    <Icon svg={Svgs.Plus} iconStyle={styles.addIcon} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen;