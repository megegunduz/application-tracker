import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useThemedValues } from '../../Theming';

import getStyles from '../Styles/ApplicationItemStyles';

const ApplicationItem = props => {

    const { styles, colors } = useThemedValues(getStyles);

    return (
        <TouchableOpacity style={styles.container}
        onPress={props.onPress}
        onLongPress={props.onLongPress}>
            <View style={styles.companyNameAndDateContainer}>
                <View style={styles.companyNameContainer}>
                    <Text style={styles.companyNameText}>{props.companyName}</Text>
                </View>
                <View style={styles.dateContainer}>
                    <Text style={styles.dateText}>{props.applicationDate}</Text>
                </View>
            </View>
            <Text style={styles.positionText}>{props.position}</Text>
        </TouchableOpacity>
    );
};

export default ApplicationItem;
