import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import { useThemedValues } from '../../Theming';
import { tn, useLocale, useLocalization } from '../../Localization';
import ApplicationItem from '../Components/ApplicationItem';
import Icon from '../../../Components/Icon';
import { Svgs } from '../../../StylingConstants';
import FlatListFooter from '../Components/FlatListFooter';
import { subscribeToAppItemData, deleteAppItem } from '../API/Firebase';
import EmptyListComponent from '../Components/EmptyListComponent';

import getStyles from '../Styles/HomeScreenStyles';

const HomeScreen = () => {

    const [isDeleteMode, setIsDeleteMode] = useState(false);
    const [applications, setApplications] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);
    const [isPast, setIsPast] = useState(false);

    const { styles, colors } = useThemedValues(getStyles);

    const navigation = useNavigation();
    const locale = useLocale();
    const loc = useLocalization();

    useEffect(() => {
        const off = subscribeToAppItemData(locale, data => {
            setApplications(data);
        });

        return () => {
            off();
        }
    }, [locale])

    const _addItemToSelectedList = async (appItemKey) => {
        let copyList = [...selectedItems];
        copyList.push(appItemKey);
        setSelectedItems(copyList);
    }

    const _renderApplicatonItem = ({ item }) => {
        return (
            <ApplicationItem
                companyName={item.companyName}
                position={item.position}
                applicationDate={item.applicationDate}
                appItemKey={item.key}
                onPress={() => _onPress_NavigateToEditAppScreen(item)}
                onLongPress={_onLongPress_TurnOnDeleteMode}
                deleteMode={isDeleteMode}
                onSelect={_addItemToSelectedList}
            />
        )
    }

    const _onPress_NavigateToEditAppScreen = applicationItem => {
        if (!isDeleteMode) {
            // Navigate to EditApplicationScreen route with pressed item as params
            navigation.navigate("edit-application-screen", {
                applicationItem,
                appItemKey: applicationItem.key,
            });
        }

    }

    const _onPress_NavigateOrDelete = () => {
        if (isDeleteMode) {
            for (let item in selectedItems) {
                deleteAppItem(selectedItems[item]);
            }
            setIsDeleteMode(false);
        }
        else {
            navigation.navigate("add-application-screen");
        }
    }

    const _onLongPress_TurnOnDeleteMode = () => {
        setIsDeleteMode(true);
    }

    const _onPress_TurnOffDeleteMode = () => {
        setIsDeleteMode(false);
    }

    const add_deleteIcon = isDeleteMode ? Svgs.Delete : Svgs.Plus;

    let numberOfApplications = applications ? applications.length : 0;

    const appsToRender = isPast ? applications[1] : applications[0];

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <View style={styles.pastFutureContainer}>
                    <TouchableOpacity onPress={() => setIsPast(false)}>
                        <Text style={styles.furuteText}>{loc.t(tn.futureApplications)}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setIsPast(true)}>
                        <Text style={styles.pastText}>{loc.t(tn.pastApplications)}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.listContainer}>
                    <FlatList
                        data={appsToRender}
                        renderItem={_renderApplicatonItem}
                        keyExtractor={(item, index) => index}
                        ListEmptyComponent={<EmptyListComponent />}
                        ListFooterComponent={<FlatListFooter applications={applications} isPast={isPast}/>}
                    />
                </View>
                <TouchableOpacity style={styles.add_deleteIconContainer} onPress={_onPress_NavigateOrDelete}>
                    <Icon svg={add_deleteIcon} iconStyle={styles.add_deleteIcon} />
                </TouchableOpacity>
                {
                    isDeleteMode ?
                        <TouchableOpacity style={styles.cancelIconContainer} onPress={_onPress_TurnOffDeleteMode}>
                            <Icon svg={Svgs.Cancel} iconStyle={styles.cancelIcon} />
                        </TouchableOpacity>
                        :
                        null
                }
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen;