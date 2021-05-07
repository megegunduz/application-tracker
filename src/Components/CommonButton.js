import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { useThemedValues } from '../Modules/Theming';

import getStyles from './Styles/CommonButtonStyles';

const CommonButton = props => {

    const { styles, colors } = useThemedValues(getStyles);

    let buttonStyle = {
        ...styles.buttonTouchable,
        ...props.style,
    };

    return (
        <TouchableOpacity style={buttonStyle} onPress={props.onPress}>
            <Text style={styles.buttonText}>{props.text}</Text>
        </TouchableOpacity>
    );
};

export default CommonButton;
