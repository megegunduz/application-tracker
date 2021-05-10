import React from 'react';
import { View, Text } from 'react-native';

import { tn, useLocalization } from '../../Localization';
import { useThemedValues } from '../../Theming';
import Data from '../DummyJobApplicationData';

import getStyles from '../Styles/FlatListFooterStyles';

const FlatListFooter = props => {

    const { styles } = useThemedValues(getStyles);

    const loc = useLocalization();

    const numberOfApplications = props.applications[0]?.length + props.applications[1]?.length;

    const text = numberOfApplications ? loc.t(tn.flatListFooterText, {numberOfApplications}) : "";
    const pastNumber = props.applications[1]?.length;
    const futureNumber = props.applications[0]?.length;

    const pastText = pastNumber ? loc.t(tn.flatListFooterPast, {pastNumber}) : "";
    const futureText = futureNumber ? loc.t(tn.flatListFooterFuture, {futureNumber}) : "";

    const pastOrFutureText = props.isPast ? pastText : futureText;

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{text + " " + pastOrFutureText}</Text>
        </View>
    );
};

export default FlatListFooter;
