import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { tn, useLocalization } from '../../Localization';
import { useThemedValues } from '../../Theming/';
import AuthButton from '../Components/AuthButton';
import AuthInput from '../Components/AuthInput';

import getStyles from '../Styles/AuthScreenStyles';

const AuthScreenUI = () => {

    const { styles, colors } = useThemedValues(getStyles);

    const loc = useLocalization();

    const [isLogin, setIsLogin] = useState(true)

    const _onPress_SwitchLoginOrSignUp = () => {
        setIsLogin(!isLogin);
    }

    const authButtonText = isLogin? loc.t(tn.login) : loc.t(tn.signUp);

    return (
        <SafeAreaView style={{flex:1}}>
            <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Text style={styles.fakeLogo}>O</Text>
            </View>
            <View style={styles.headerContainer}>
            <Text style={styles.header}>
                {isLogin ? loc.t(tn.login) : loc.t(tn.signUp)}
            </Text>
            </View>
            <View style={styles.inputsContainer}>
                {
                    isLogin?
                    null
                    :
                    <AuthInput placeholder={loc.t(tn.username)}/>
                }
                <AuthInput placeholder={loc.t(tn.email)}/>
                <AuthInput placeholder={loc.t(tn.password)}/>
            </View>
            <View>
                <AuthButton text={authButtonText} />
            </View>
            <View style={styles.bottomContainer}>
                <Text>
                    {isLogin ? loc.t(tn.dontHaveAccount) : loc.t(tn.alreadyHaveAccount)}
                </Text>
                <TouchableOpacity onPress={_onPress_SwitchLoginOrSignUp}>
                    <Text style={styles.touchableText}>
                        {isLogin ? loc.t(tn.signUp) : loc.t(tn.login)}
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.appNameContainer}>
                <Text style={styles.appNameText}>APPNAME</Text>
            </View>
        </View>
        </SafeAreaView>
    )
}

export default AuthScreenUI;