import React from 'react';
import { View, Text } from 'react-native';

import { tn, useLocalization } from '../../Localization';
import { useThemedValues } from '../../Theming';

import getStyles from '../Styles/FlatListFooterStyles';

const FlatListFooter = props => {

    const { styles } = useThemedValues(getStyles);

    const loc = useLocalization();

    const numberOfApplications = props.numberOfApplications;
    
    const showConcludedOnly = props.showConcludedOnly;

    const getText = () => {
        let text;
        if (numberOfApplications) {
            if (showConcludedOnly) {
                text = loc.t(tn.flatListFooterTextConcluded, {numberOfApplications});
            }
            else text = loc.t(tn.flatListFooterText, {numberOfApplications});
        }

        else text = "";
        return text;
    }

    const text = getText();


    return (
        <View style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </View>
    );
};

export default FlatListFooter;
