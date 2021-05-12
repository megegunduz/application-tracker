import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from '../../../Components/Icon';
import { Svgs } from '../../../StylingConstants';
import { cn, useThemedValues } from '../../Theming';

import getStyles from '../Styles/ApplicationItemStyles';

const ApplicationItem = props => {

    const { appItem } = props;

    let { deleteMode } = props;
    let isConcluded = appItem.isConcluded ? appItem.isConcluded : false;

    const stylingParams = {
        deleteMode,
        isConcluded,
    };

    const [isSelected, setIsSelected] = useState(false);

    const { styles, colors } = useThemedValues(getStyles, stylingParams);

    const svg = isSelected ? Svgs.CheckboxChecked : Svgs.CheckboxUnchecked;

    const appItemKey = appItem.key;
    
    const _onPress_SelectItem = () => {
        setIsSelected(!isSelected);
        props.onSelect(appItemKey);
    }

    return (
        <TouchableOpacity style={styles.container}
            onPress={props.onPress}
            onLongPress={props.onLongPress}>
            <View style={styles.companyNameAndDateContainer}>
                {
                    props.deleteMode ?
                        <TouchableOpacity style={styles.iconContainer} onPress={_onPress_SelectItem}>
                            <Icon svg={svg} iconStyle={{color: colors[cn.home.applicationItemBorder]}}></Icon>
                        </TouchableOpacity>
                        :
                        null
                }
                <View style={styles.companyNameContainer}>
                    <Text style={styles.companyNameText} numberOfLines={1}>{appItem.companyName}</Text>
                </View>
                <View style={styles.dateContainer}>
                    <Text style={styles.dateText}>{appItem.applicationDate}</Text>
                </View>
            </View>
            <View style={styles.positionTextContainer}>
                <Text style={styles.positionText} numberOfLines={1}>{appItem.position}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default ApplicationItem;
