import { StyleSheet } from 'react-native';
import { Fonts, Metrics } from '../../../StylingConstants';
import { cn } from '../../Theming';

export default (Colors, params) => StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: Colors[cn.auth.background],
    },
    keyboardAvoiding: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'space-between',
        paddingBottom: Metrics.width * 0.03,
        paddingHorizontal: Metrics.marginHorizontal,
        alignItems: 'center',
    },
    appLogoContainer: {
        width: Metrics.width * 0.4,
        height: undefined,
        aspectRatio: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: Metrics.marginVertical,
    },
    headerContainer: {
        justifyContent: 'center',
    },
    header: {
        fontFamily: Fonts.type.bold,
        fontSize: Fonts.size(30),
        color: Colors[cn.auth.inputsHeader],
    },
    inputsContainer: {
        height: Metrics.width * 0.7,
        justifyContent: 'center',
    },
    inputContainer: {
        marginTop: Metrics.width * 0.02,
    },
    buttonsContainer: {
        justifyContent: 'center',
    },
    textsContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: Metrics.marginVertical * 0.1
    },
    plainText: {
        color: Colors[cn.auth.plainText],
        fontFamily: Fonts.type.semiBold,
        fontSize: Fonts.size(14),
    },
    touchableText: {
        color: Colors[cn.auth.touchableText],
        marginLeft: Metrics.textMargin * 0.8,
        fontFamily: Fonts.type.semiBold,
        fontSize: Fonts.size(14),
    },
    appNameContainer: {
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    appNameText: {
        fontFamily: Fonts.type.blackItalic,
        fontSize: Fonts.size(50),
        letterSpacing: Metrics.width * 0.02,
        color: Colors[cn.auth.button]
    },
});
