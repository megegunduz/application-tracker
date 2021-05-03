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
        alignItems: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'space-between',
        paddingHorizontal: Metrics.marginHorizontal,
        marginHorizontal: Metrics.marginHorizontalLarge * 1.1,
    },
    appLogoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center', 
    },
    image: {
        width: undefined,
        height: '80%',
        aspectRatio: 1,
        resizeMode: 'contain',
    },
    headerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        fontFamily: Fonts.type.bold,
        fontSize: Fonts.size(30),
        color: Colors[cn.auth.inputsHeader],
    },
    inputsContainer: {
        // minHeight: Metrics.width * 0.615,
        justifyContent: 'center',
        flexShrink: 1,
        marginTop: Metrics.marginHorizontal * 0.5,
        alignItems: 'center',
        width: Metrics.width * 0.8,
    },
    inputContainer: {
        marginTop: Metrics.width * 0.005,
    },
    buttonsContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    textsContainer: {
        flexDirection: 'row',
        marginTop: Metrics.marginVertical * 0.1,
        alignSelf: 'flex-end',
        marginRight: Metrics.width * 0.02,

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
