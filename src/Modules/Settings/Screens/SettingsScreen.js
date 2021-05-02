import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { userSelector } from '../../Auth';
import { useLocale, tn, useLocaleOptions, useLocalization, useChangeLocale } from '../../Localization';
import { useChangeTheme, useTheme, useThemedValues, useThemeOptions } from '../../Theming';
import OptionsRadioInput from '../Components/OptionsRadioInput';

import getStyles from '../Styles/SettingsScreenStyles';

const SettingsScreen = () => {

    const { styles, colors } = useThemedValues(getStyles);
    const themeOptions = useThemeOptions();
    const currentTheme = useTheme();
    const changeTheme = useChangeTheme();

    const _onPress_ChangeTheme = (theme) => {
        changeTheme(theme);
    }

    const loc = useLocalization();
    const localeOptions = useLocaleOptions();
    const currentLocale = useLocale();
    const changeLocale = useChangeLocale();
    const _onPress_ChangeLocale = (locale) => {
        changeLocale(locale);
    }

    const currentUser = useSelector(userSelector);
    console.log(currentUser)


    return (
        <View style={styles.container}>
            <SafeAreaView style={{ flex: 1 }}>
                <Text style={styles.nameText}>{currentUser.displayName}</Text>
                <Text style={styles.emailText}>{currentUser.email}</Text>
                <View style={styles.optionMenuContainer}>
                    <OptionsRadioInput
                        options={themeOptions}
                        menuTitle={loc.t(tn.colorTheme)}
                        selectedOptionKey={currentTheme}
                        onPress={_onPress_ChangeTheme}
                    />
                    <OptionsRadioInput
                        options={localeOptions}
                        menuTitle={loc.t(tn.language)}
                        selectedOptionKey={currentLocale}
                        onPress={_onPress_ChangeLocale}
                    />
                </View>
                <TouchableOpacity style={styles.signOutTouchable}>
                    <Text style={styles.signOutText}>{loc.t(tn.signOut)}</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </View>
    )
}

export default SettingsScreen;