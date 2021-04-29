import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { useLocale, tn, useLocaleOptions, useLocalization } from '../../Localization';
import { useTheme, useThemedValues, useThemeOptions } from '../../Theming';
import OptionsRadioInput from '../Components/OptionsRadioInput';

import getStyles from '../Styles/SettingsScreenStyles';

const SettingsScreen = () => {

  const { styles, colors } = useThemedValues(getStyles);
  const themeOptions = useThemeOptions();
  const currentTheme = useTheme();

  const loc = useLocalization();
  const localeOptions = useLocaleOptions();
  const currentLocale = useLocale();


  return (
    <View style={styles.container}>
      <SafeAreaView style={{flex: 1}}>
        <Text style={styles.nameText}>{loc.t(tn.username)}</Text>
        <Text style={styles.emailText}>{loc.t(tn.email)}</Text>
        <View style={styles.optionMenuContainer}>
          <OptionsRadioInput
            options={themeOptions}
            menuTitle={loc.t(tn.colorTheme)}
            selectedOptionKey={currentTheme}
          />
          <OptionsRadioInput
            options={localeOptions}
            menuTitle={loc.t(tn.language)}
            selectedOptionKey={currentLocale}
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