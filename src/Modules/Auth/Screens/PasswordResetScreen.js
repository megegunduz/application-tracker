import React, { useState } from 'react';
import { Keyboard, KeyboardAvoidingView, SafeAreaView, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import Icon from '../../../Components/Icon';
import { Images } from '../../../StylingConstants';
import { tn, useLocalization } from '../../Localization';
import { useTheme, useThemedValues } from '../../Theming';
import AuthButton from '../Components/AuthButton';
import AuthInput from '../Components/AuthInput';

import getStyles from '../Styles/PasswordResetScreenStyles';

const PaswordResetScreen = props => {

    const [email, setEmail] = useState(null);

    const { styles } = useThemedValues(getStyles);
    const currentTheme = useTheme();

    const loc = useLocalization();

    const logo = currentTheme === 'light' ? Images.LogoLight : Images.LogoDark;

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
                        />
                    </View>

                    <AuthButton text={loc.t(tn.reset)} onPress={() => props.navigation.goBack()} />
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default PaswordResetScreen;
