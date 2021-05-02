import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { cn, useThemedValues } from '../../Theming';

import getStyles from '../Styles/AuthInputStyles';

const AuthInput = props => {

    const { styles, colors } = useThemedValues(getStyles);

    return (
        <TouchableOpacity style={styles.inputContainer}>
            <TextInput
                placeholderTextColor={colors[cn.auth.placeholder]}
                placeholder={props.placeholder}
                style={styles.input}
                onChangeText={props.onChangeText}
            />
        </TouchableOpacity>
    );
};

export default AuthInput;
