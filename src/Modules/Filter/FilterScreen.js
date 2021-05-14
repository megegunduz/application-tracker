import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import Icon from '../../Components/Icon';
import { Svgs } from '../../StylingConstants';
import { tn, useLocalization } from '../Localization';

import { useThemedValues } from '../Theming';
import { FilterActionCreators } from './FilterRedux';

import getStyles from './Styles/FilterScreenStyles';

const FilterScreen = props => {

    const { styles } = useThemedValues(getStyles);

    const loc = useLocalization();

    const dispatch = useDispatch();

    const _onPress_SetFilterAscending = () => {
        dispatch(FilterActionCreators.setFilterType("ascending"));
    }

    const _onPress_SetFilterDescending = () => {
        dispatch(FilterActionCreators.setFilterType("descending"));
    }

    const filterText = loc.t(tn.filter);
    const ascendingText = loc.t(tn.fromOlderToNewer);
    const descendingText = loc.t(tn.fromNewerToOlder);

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>{filterText}</Text>
            <TouchableOpacity style={styles.touchable} onPress={_onPress_SetFilterAscending}>
                <View style={styles.iconContainer}>
                    <Icon svg={Svgs.FromOlderToNewer} iconStyle={styles.icon} />
                </View>
                <Text style={styles.ascendingText}>{ascendingText}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchable} onPress={_onPress_SetFilterDescending}>
                <View style={styles.iconContainer}>
                    <Icon svg={Svgs.FromNewerToOlder} iconStyle={styles.icon} />
                </View>
                <Text style={styles.descendingText}>{descendingText}</Text>
            </TouchableOpacity>
        </View>

    );
};

export default FilterScreen;
