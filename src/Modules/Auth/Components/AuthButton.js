import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { tn, useLocale, useLocalization } from '../../Localization';
import { cn, useThemedValues } from '../../Theming';

import getStyles from '../Styles/AuthButtonStyles';

const AuthButton = props => {

    const { styles, colors } = useThemedValues(getStyles);

    const text = props.text.toLocaleUpperCase('tr-TR');
 
    return (
        <TouchableOpacity style={styles.touchable} onPress={props.onPress}>
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    );
};

export default AuthButton;
