import React from 'react';
import { View } from 'react-native';

import { useThemedValues } from '../Modules/Theming';
import getStyles from './Styles/BorderedBoxStyles';

const BorderedBox = props => {

    const { styles, colors } = useThemedValues(getStyles);

    let containerStyle = {
        ...styles.container,
        borderColor: props.borderColor ? props.borderColor : styles.container.borderColor,
        height: props.tall ? styles.tallHeight.height : styles.normalHeight.height,
    };

    return (
        <View style={containerStyle}>
            {props.children}
        </View>
    );
};

export default BorderedBox;
