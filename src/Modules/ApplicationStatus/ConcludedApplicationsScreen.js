import React from 'react';
import { Text, View } from 'react-native';
import { useThemedValues } from '../Theming';

import getStyles from './Styles/ConcludedApplicationsScreenStyles';

const ConcludedApplicationsScreen = props => {

    const { styles } = useThemedValues(getStyles);

    return (
        <View style={styles.container}>
            <Text>ConcludedApplicationsScreen</Text>
        </View>
    );
};

export default ConcludedApplicationsScreen;
