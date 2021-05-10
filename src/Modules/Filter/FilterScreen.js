import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';

import { useThemedValues } from '../Theming';
import { FilterActionCreators } from './FilterRedux';

import getStyles from './Styles/FilterScreenStyles';

const FilterScreen = props => {

    const { styles } = useThemedValues(getStyles);

    const dispatch = useDispatch();

    const _onPress_SetFilterAscending = () => {
        dispatch(FilterActionCreators.setFilterType("ascending"));
    }

    const _onPress_SetFilterDescending = () => {
        dispatch(FilterActionCreators.setFilterType("descending"));
    }

    return (
        <View style={styles.container}>
            <Text>FİLTRELE</Text>
            <TouchableOpacity style={styles.touchable} onPress={_onPress_SetFilterAscending}>
                <Text>Eskiden yeniye</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchable} onPress={_onPress_SetFilterDescending}>
                <Text>Yeniden eskiye</Text>
            </TouchableOpacity>
        </View>
        
    );
};

export default FilterScreen;
