import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from '../../../Components/Icon';
import { Svgs } from '../../../StylingConstants';
import { useThemedValues } from '../../Theming';

import getStyles from '../Styles/ApplicationItemStyles';

const ApplicationItem = props => {

    const stylingParams = {
        deleteMode
    } = props;

    const [isSelected, setIsSelected] = useState(false);

    const { styles, colors } = useThemedValues(getStyles, stylingParams);

    const svg = isSelected ? Svgs.CheckboxChecked : Svgs.CheckboxUnchecked;
    
    const _onPress_SelectItem = () => {
        setIsSelected(!isSelected);
    }

    return (
        <TouchableOpacity style={styles.container}
            onPress={props.onPress}
            onLongPress={props.onLongPress}>
            <View style={styles.companyNameAndDateContainer}>
                {
                    props.deleteMode ?
                        <TouchableOpacity style={styles.iconContainer} onPress={_onPress_SelectItem}>
                            <Icon svg={svg}></Icon>
                        </TouchableOpacity>
                        :
                        null
                }
                <View style={styles.companyNameContainer}>
                    <Text style={styles.companyNameText} numberOfLines={1}>{props.companyName}</Text>
                </View>
                <View style={styles.dateContainer}>
                    <Text style={styles.dateText}>{props.applicationDate}</Text>
                </View>
            </View>
            <View style={styles.positionTextContainer}>
                <Text style={styles.positionText} numberOfLines={1}>{props.position}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default ApplicationItem;
