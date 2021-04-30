import { StyleSheet } from 'react-native';
import { Fonts, Metrics } from '../../../StylingConstants';
import { cn } from '../../Theming';

export default (Colors) => StyleSheet.create({
    container: {
        flex: 1,
        padding: Metrics.marginHorizontal,
        backgroundColor: Colors[cn.settings.background]
    },
    nameText: {
        fontSize: Fonts.size(18),
        marginBottom: Metrics.marginVertical / 2,
        fontFamily: Fonts.type.extraBold,
    },
    emailText: {
        fontSize: Fonts.size(16),
        marginBottom: Metrics.marginVertical,
    },
    optionMenuContainer: {
        flexGrow: 1,
    },
    signOutTouchable: {
        height: Metrics.width * 0.14,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: Metrics.borderRadiusStandard,
        borderWidth: 2,
        borderColor: Colors[cn.settings.signOutButtonBorder],
    },
    signOutText: {
        fontSize: Fonts.size(18),
        color: Colors[cn.settings.signOutButtonText],
    },
});
