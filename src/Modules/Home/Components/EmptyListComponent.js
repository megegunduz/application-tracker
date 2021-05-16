import React from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';

import { userSelector } from '../../Auth';
import { tn, useLocalization } from '../../Localization';
import { useThemedValues } from '../../Theming';

import getStyles from '../Styles/EmptyListComponentStyles';

const EmptyListComponent = props => {

    const { styles } = useThemedValues(getStyles);

    const loc = useLocalization();

    const username = useSelector(userSelector).displayName;
    const showConcludedOnly = props.showConcludedOnly;

    const text = showConcludedOnly ? loc.t(tn.emptyComponentConcludedText, {username}) : loc.t(tn.emptyComponentAllText, {username})

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </View>
    );
};

export default EmptyListComponent;
