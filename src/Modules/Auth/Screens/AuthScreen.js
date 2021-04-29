import React from 'react';
import { View, Text } from 'react-native';
import { useThemedValues } from '../../Theming/';

import getStyles from '../Styles/AuthScreenStyles';

const AuthScreen = () => {

  const { styles, colors } = useThemedValues(getStyles);

  return (
    <View style={styles.container}>
      <Text>AuthScreen</Text>
    </View>
  )
}

export default AuthScreen;