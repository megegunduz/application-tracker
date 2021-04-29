import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useLocale, useLocalization } from '../../Localization';
import { cn, useThemedValues } from '../../Theming';

import getStyles from '../Styles/AuthButtonStyles';

const AuthButton = props => {

    const { styles, colors } = useThemedValues(getStyles);

    const locale = useLocale();
    const text = props.text.toLocaleUpperCase('TR');
    // const buttonText = text.toLocaleUpperCase('TR');

 
    return (
        <TouchableOpacity style={styles.touchable}>
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    );
};

export default AuthButton;
