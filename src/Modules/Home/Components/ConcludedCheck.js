import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import Icon from '../../../Components/Icon';
import { Svgs } from '../../../StylingConstants';
import { tn, useLocalization } from '../../Localization';
import { useThemedValues } from '../../Theming';

import getStyles from '../Styles/ConcludedCheckStyles';

const ConcludedCheck = props => {

    const { styles } = useThemedValues(getStyles);

    const loc = useLocalization();

    const { isConcluded } = props;

    const svg = isConcluded ? Svgs.CheckboxChecked : Svgs.CheckboxUnchecked;

    const text = loc.t(tn.applicationConcluded);

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.iconContainer} onPress={props.onSelect}>
                <Icon svg={svg} iconStyle={styles.icon} />
            </TouchableOpacity>
            <Text style={styles.text}>{text}</Text>
        </View>
    );
};

export default ConcludedCheck;
