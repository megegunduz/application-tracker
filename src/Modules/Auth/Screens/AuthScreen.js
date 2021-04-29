import React from 'react';
import { View, Text } from 'react-native';
import { tn, useLocalization } from '../../Localization';
import { useThemedValues } from '../../Theming/';

import getStyles from '../Styles/AuthScreenStyles';

const AuthScreen = () => {

  const { styles, colors } = useThemedValues(getStyles);

  const loc = useLocalization();

  return (
    <View style={styles.container}>
      <Text>AuthScreen</Text>
      <View>
      <Text>{loc.t(tn.dontHaveAccount)}</Text>
      </View>
    </View>
  )
}

export default AuthScreen;