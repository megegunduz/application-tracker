import { StyleSheet } from 'react-native';
import { Fonts, Metrics } from '../../../StylingConstants';
import { cn } from '../../Theming';

export default (Colors) => StyleSheet.create({
    inputContainer: {
        borderRadius: Metrics.borderRadiusStandard,
        borderWidth: 1,
        borderColor: Colors[cn.auth.inputBorder],
        width: Metrics.width * 0.68,
        marginTop: Metrics.marginHorizontal / 8,
        backgroundColor: Colors[cn.auth.inputBackground],
    },
    input: {
        fontFamily: Fonts.type.medium,
        fontSize: Fonts.size(15),
    }
});
