import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, Platform, Keyboard, Image } from 'react-native';

import { Images } from '../../../StylingConstants';
import { customUpperCase } from '../../../Utils/CustomUpperCase';
import { tn, useLocale, useLocalization } from '../../Localization';
import { useTheme, useThemedValues } from '../../Theming/';
import AuthButton from '../Components/AuthButton';
import AuthInput from '../Components/AuthInput';

import getStyles from '../Styles/AuthScreenStyles';

const AuthScreenUI = (props) => {

    const { styles, colors } = useThemedValues(getStyles);
    const currentTheme = useTheme();

    const loc = useLocalization();
    const locale = useLocale();

    const [isLogin, setIsLogin] = useState(true)

    const _onPress_SwitchLoginOrSignUp = () => {
        setIsLogin(!isLogin);
    }

    const logo = currentTheme === 'light' ? Images.LogoLight : Images.LogoDark;

    const loginUpperCase = customUpperCase(loc.t(tn.login), locale);
    const signUpUpperCase = customUpperCase(loc.t(tn.signUp), locale);
    const authButtonText = isLogin ? loginUpperCase : signUpUpperCase;

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
                        <Image source={logo} style={styles.image}/>
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
                                    <AuthInput
                                        value={props.usernameValue}
                                        autoCapitalize={'words'}
                                        onChangeText={props.onChangeText_Username}
                                        placeholder={loc.t(tn.username)} />
                                </View>
                        }
                        <View style={styles.inputContainer}>
                            <AuthInput
                                value={props.emailValue}
                                autoCapitalize={'none'}
                                onChangeText={props.onChangeText_Email}
                                placeholder={loc.t(tn.email)} />
                        </View>
                        <View style={styles.inputContainer}>
                            <AuthInput
                                value={props.passwordValue}
                                autoCapitalize={'none'}
                                secureTextEntry={true}
                                onChangeText={props.onChangeText_Password}
                                placeholder={loc.t(tn.password)}
                                />
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
                                    <AuthInput
                                        value={props.passwordRepeatValue}
                                        autoCapitalize={'none'}
                                        secureTextEntry={true}
                                        onChangeText={props.onChangeText_PasswordRepeat}
                                        placeholder={loc.t(tn.repeatPassword)} />
                                </View>
                        }
                    </View>
                    <View style={styles.buttonsContainer}>
                        <AuthButton
                        onPress={isLogin ? props.onPress_SignIn : props.onPress_SignUp}
                        text={authButtonText} />
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