import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

import { cn, useThemedValues } from '../../Theming';
import Icon from '../../../Components/Icon';

import getStyles from '../Styles/AuthInputStyles';
import { Svgs } from '../../../StylingConstants';

const AuthInput = props => {

    const { styles, colors } = useThemedValues(getStyles);

    return (
        <View style={styles.inputContainer}>
            <TextInput
                autoCapitalize={props.autoCapitalize}
                secureTextEntry={props.secureTextEntry}
                value={props.value}
                autoCorrect={false}
                placeholderTextColor={colors[cn.auth.placeholder]}
                placeholder={props.placeholder}
                style={styles.input}
                onChangeText={props.onChangeText}
                numberOfLines={1}
                multiline={false}
            />
            {
                props.secureTextEntry ?
                <TouchableOpacity style={styles.iconContainer}>
                    <Icon svg={Svgs.ShowPassword} iconStyle={styles.iconStyle}/>
                </TouchableOpacity>
                :
                null
            }
        </View>
    );
};

export default AuthInput;
