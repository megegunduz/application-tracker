import { StyleSheet } from 'react-native';
import { cn } from '../Modules/Theming';
import { Fonts, Metrics } from '../StylingConstants';

export default (Colors) => StyleSheet.create({
    buttonTouchable: {
        width: Metrics.width * 0.85,
        height: Metrics.width * 0.12,
        backgroundColor: Colors[cn.home.addIcon],
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: Metrics.borderRadiusStandard,
    },
    buttonText: {
        color: Colors[cn.home.background],
        fontFamily: Fonts.type.semiBold,
        fontSize: Fonts.size(16),
    }
});
