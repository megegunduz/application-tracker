import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { useSelector } from 'react-redux';

import { useThemedValues } from '../../Theming';
import { tn, useLocale, useLocalization } from '../../Localization';
import ApplicationItem from '../Components/ApplicationItem';
import Icon from '../../../Components/Icon';
import { Svgs } from '../../../StylingConstants';
import FlatListFooter from '../Components/FlatListFooter';
import { subscribeToAppItemData, deleteAppItem } from '../API/Firebase';
import EmptyListComponent from '../Components/EmptyListComponent';
import { FilterSelectors } from '../../Filter';
import getConcludedApplications from '../../../Utils/GetConcludedApplications';

import getStyles from '../Styles/HomeScreenStyles';
import FlatListHeader from '../Components/FlatListHeader';

const HomeScreen = () => {

    const [isDeleteMode, setIsDeleteMode] = useState(false);
    const [applications, setApplications] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);
    const [showConcludedOnly, setShowConcludedOnly] = useState(false);

    const { styles, colors } = useThemedValues(getStyles);

    const navigation = useNavigation();
    const locale = useLocale();
    const loc = useLocalization();

    const filterType = useSelector(FilterSelectors.filterType);

    useEffect(() => {
        const off = subscribeToAppItemData(locale, filterType, data => {
            setApplications(data);
        });

        return () => {
            off();
        }
    }, [locale, filterType])

    const _addItemToSelectedList = async (appItemKey) => {
        let copyList = [...selectedItems];
        if (copyList.includes(appItemKey)) {
            let indexOfExistingItem = copyList.indexOf(appItemKey)
            copyList.splice(indexOfExistingItem, 1);
            setSelectedItems(copyList);
        }
        else if (!copyList.includes(appItemKey)) {
            copyList.push(appItemKey);
            setSelectedItems(copyList);
        }
    }

    const _renderApplicatonItem = ({ item }) => {
        return (
            <ApplicationItem
                appItem={item}
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
            setSelectedItems([]);
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

    

    let concludedApplications = getConcludedApplications(applications);

    const data = showConcludedOnly ? concludedApplications : applications;
    let numberOfApplications = data?.length;

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <View style={styles.listContainer}>
                    <FlatList
                        data={data}
                        renderItem={_renderApplicatonItem}
                        keyExtractor={(item, index) => item.key}
                        ListEmptyComponent={<EmptyListComponent showConcludedOnly={showConcludedOnly}/>}
                        ListHeaderComponent={<FlatListHeader numberOfApplications={applications.length} onPress={(value) => setShowConcludedOnly(value)} />}
                        ListFooterComponent={<FlatListFooter numberOfApplications={numberOfApplications} showConcludedOnly={showConcludedOnly}/>}
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