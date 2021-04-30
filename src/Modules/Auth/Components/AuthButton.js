import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { tn, useLocale, useLocalization } from '../../Localization';
import { cn, useThemedValues } from '../../Theming';

import getStyles from '../Styles/AuthButtonStyles';

const AuthButton = props => {

    const { styles, colors } = useThemedValues(getStyles);

    // const locale = useLocale();
    // const loc = useLocalization();
    const text = props.text.toLocaleUpperCase('tr-TR');
    // const buttonText = text.toLocaleUpperCase('TR');
    // const text = props.text.toLocaleUpperCase(locale);
    // const trialText = loc.t(tn.login).toLocaleUpperCase(locale);

 
    return (
        <TouchableOpacity style={styles.touchable}>
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    );
};

export default AuthButton;
