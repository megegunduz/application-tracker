import React from 'react';
import { View, Text } from 'react-native';

import { tn, useLocalization } from '../../Localization';
import { useThemedValues } from '../../Theming';
import Data from '../DummyJobApplicationData';

import getStyles from '../Styles/FlatListFooterStyles';

const FlatListFooter = props => {

    const { styles } = useThemedValues(getStyles);

    const loc = useLocalization();

    const numberOfApplications = props.numberOfApplications;

    const text = loc.t(tn.flatListFooterText, {numberOfApplications});

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </View>
    );
};

export default FlatListFooter;
