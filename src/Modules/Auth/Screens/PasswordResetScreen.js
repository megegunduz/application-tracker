import React, { useState } from 'react';
import { Keyboard, KeyboardAvoidingView, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

import { useDispatch } from 'react-redux';
import { ErrorActionCreators } from '../../Error/ErrorRedux';
import { UserActionCreators } from '../Redux/UserRedux';

import { tn, useLocalization } from '../../Localization';
import { useThemedValues } from '../../Theming';

import AuthButton from '../Components/AuthButton';
import AuthInput from '../Components/AuthInput';

import getStyles from '../Styles/PasswordResetScreenStyles';

const PaswordResetScreen = props => {

    const [email, setEmail] = useState("");

    const { styles } = useThemedValues(getStyles);

    const loc = useLocalization();

    const dispatch = useDispatch();

    const _onPress = async () => {
        if (email.length === 0) {
            dispatch(ErrorActionCreators.setErrorExists(true, tn.errorCodes['custom/fill-every-field']))
        }
        else {
            dispatch(UserActionCreators.passwordResetRequest(email))
        }
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <KeyboardAvoidingView
                style={styles.keyboardAvoiding}
                behavior={Platform.OS === 'ios' ? 'padding' : null}
                keyboardVerticalOffset={0}>
                <TouchableOpacity
                    style={styles.container}
                    activeOpacity={1}
                    onPress={Keyboard.dismiss}
                >
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>
                            {loc.t(tn.resetScreenText)}
                        </Text>
                    </View>
                    <View style={styles.inputContainer}>
                        <AuthInput
                            placeholder={loc.t(tn.email)}
                            onChangeText={setEmail}
                            autoCapitalize='none'
                        />
                    </View>

                    <AuthButton text={loc.t(tn.reset)} onPress={_onPress} />
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default PaswordResetScreen;
