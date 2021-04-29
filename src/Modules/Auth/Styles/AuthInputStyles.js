import { StyleSheet } from 'react-native';
import { Metrics } from '../../../StylingConstants';
import { cn } from '../../Theming';

export default (Colors) => StyleSheet.create({
    inputContainer: {
        borderRadius: Metrics.borderRadiusStandard,
        borderWidth: 1,
        borderColor: Colors[cn.auth.inputBorder],
        width: Metrics.width * 0.68,
        marginBottom: Metrics.marginHorizontal / 1.5,
        backgroundColor: Colors[cn.auth.inputBackground],
    },
});
