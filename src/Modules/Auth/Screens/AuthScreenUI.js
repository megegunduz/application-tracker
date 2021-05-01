import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
import Icon from '../../../Components/Icon';
import { Svgs } from '../../../StylingConstants';
import { tn, useLocalization } from '../../Localization';
import { useTheme, useThemedValues } from '../../Theming/';
import AuthButton from '../Components/AuthButton';
import AuthInput from '../Components/AuthInput';

import getStyles from '../Styles/AuthScreenStyles';

const AuthScreenUI = () => {

    const { styles, colors } = useThemedValues(getStyles);
    const currentTheme = useTheme();

    const loc = useLocalization();

    const [isLogin, setIsLogin] = useState(false)

    const _onPress_SwitchLoginOrSignUp = () => {
        setIsLogin(!isLogin);
    }

    const logo = currentTheme === 'light' ? Svgs.LogoLight : Svgs.LogoDark;

    const authButtonText = isLogin ? loc.t(tn.login) : loc.t(tn.signUp);

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
                    <View style={styles.appLogoContainer}>
                        <Icon svg={logo} />
                    </View>
                    <View style={styles.headerContainer}>
                        <Text style={styles.header}>
                            {isLogin ? loc.t(tn.login) : loc.t(tn.signUp)}
                        </Text>
                    </View>
                    <View style={styles.inputsContainer}>
                        {
                            isLogin ?
                                null
                                :
                                <View style={styles.inputContainer}>
                                    <AuthInput placeholder={loc.t(tn.username)} />
                                </View>
                        }
                        <View style={styles.inputContainer}>
                            <AuthInput placeholder={loc.t(tn.email)} />
                        </View>
                        <View style={styles.inputContainer}>
                            <AuthInput placeholder={loc.t(tn.password)} />
                        </View>
                        {
                            isLogin ?
                                <View style={styles.textsContainer}>
                                    <Text style={styles.plainText}>{loc.t(tn.forgotPassword)}</Text>
                                    <TouchableOpacity>
                                        <Text style={styles.touchableText}>
                                            {loc.t(tn.reset)}
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                :
                                null
                        }
                        {
                            isLogin ?
                                null
                                :
                                <View style={styles.inputContainer}>
                                    <AuthInput placeholder={loc.t(tn.repeatPassword)} />
                                </View>
                        }
                    </View>
                    <View style={styles.buttonsContainer}>
                        <AuthButton text={authButtonText} />
                        <View style={styles.textsContainer}>
                            <Text style={styles.plainText}>
                                {isLogin ? loc.t(tn.dontHaveAccount) : loc.t(tn.alreadyHaveAccount)}
                            </Text>
                            <TouchableOpacity onPress={_onPress_SwitchLoginOrSignUp}>
                                <Text style={styles.touchableText}>
                                    {isLogin ? loc.t(tn.signUp) : loc.t(tn.login)}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.appNameContainer}>
                        <Text style={styles.appNameText}>JOBLY</Text>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

export default AuthScreenUI;