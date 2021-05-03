import { StyleSheet } from 'react-native';
import { Fonts, Metrics } from '../../../StylingConstants';
import { cn } from '../../Theming';

export default (Colors) => StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        borderRadius: Metrics.borderRadiusStandard,
        borderWidth: 1,
        borderColor: Colors[cn.auth.inputBorder],
        width: Metrics.width * 0.8,
        backgroundColor: Colors[cn.auth.inputBackground],
        paddingHorizontal: Metrics.textMargin,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    input: {
        fontFamily: Fonts.type.semiBold,
        fontSize: Fonts.size(15),
        flexGrow: 1,
        minWidth: Metrics.width * 0.2,
    },
    iconContainer: {
        flexDirection: 'row',
        width: Metrics.width * 0.07,
        height: undefined,
        aspectRatio: 1,
        marginLeft: Metrics.textMargin,
    },
    iconStyle: {
        color: Colors[cn.auth.placeholder],
    }
});
