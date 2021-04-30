import React from 'react';
import { Text, View } from 'react-native';

import { useThemedValues } from '../../Theming';

import getStyles from '../Styles/AddApplicationScreenStyles';

const AddApplicationScreen = props => {

    const { styles, colors } = useThemedValues(getStyles);

    return (
        <View style={styles.container}>
            <Text>AddApplicationScreen</Text>
        </View>
    );
};

export default AddApplicationScreen;
