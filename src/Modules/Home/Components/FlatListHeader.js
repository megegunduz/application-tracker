import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import { tn, useLocalization } from '../../Localization';
import { useThemedValues } from '../../Theming';

import getStyles from '../Styles/FlatListHeaderStyles';

const FlatListHeader = props => {

    const [allChosen, setAllChosen] = useState(true);
    const [concludedChosen, setConcludedChosen] = useState(false);

    const stylingParams = {allChosen, concludedChosen};
    const { styles } = useThemedValues(getStyles, stylingParams);
    const loc = useLocalization();

    const _showAll = () => {
        props.onPress(false);
        setAllChosen(true);
        setConcludedChosen(false);
    };

    const _showConcluded = () => {
        props.onPress(true);
        setConcludedChosen(true);
        setAllChosen(false);
    };

    const allText = loc.t(tn.all);
    const concludedText = loc.t(tn.concluded);

    const numberOfApplications = props.numberOfApplications;

    if (numberOfApplications === 0) {
        return <View style={styles.container}></View>;
    }
    else {
        return (
            <View style={styles.container}>
                <View style={styles.touchableContainer}>
                    <TouchableOpacity style={styles.touchable} onPress={_showAll}>
                        <Text style={styles.allText}>{allText}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.touchableContainer}>
                    <TouchableOpacity style={styles.touchable} onPress={_showConcluded}>
                        <Text style={styles.concludedText}>{concludedText}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
};

export default FlatListHeader;
