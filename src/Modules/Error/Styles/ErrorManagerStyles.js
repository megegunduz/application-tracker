import { StyleSheet } from 'react-native';
import { Metrics, Fonts } from '../../../StylingConstants';
import { cn } from '../../Theming';

export default (Colors) => StyleSheet.create({
    modal: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContentContainer: {
        backgroundColor: Colors[cn.error.background],
        width: Metrics.width * 0.8,
        height: Metrics.height * 0.3,
        padding: Metrics.marginHorizontal,
        paddingTop: Metrics.marginHorizontal * 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: Metrics.borderRadiusStandard,
        borderColor: Colors[cn.error.border],
        borderWidth: 2,
    },
    headerContainer: {
        flexDirection: 'row',
        width: Metrics.width * 0.8,
        paddingRight: Metrics.marginHorizontal,
        justifyContent: 'flex-end',
        borderBottomWidth: 2,
        borderBottomColor: Colors[cn.error.border],
    },
    headerText: {
        flexGrow: 0.42,
        fontFamily: Fonts.type.bold,
        fontSize: Fonts.size(20),
        marginBottom: 10,
        color: Colors[cn.error.title]
    },
    iconContainer: {
        width: Metrics.width * 0.03,
        height: undefined,
        aspectRatio: 1,
    },
    icon: {
        color: Colors[cn.error.cancelIcon],
    },
    errorTextContainer: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
    },
    errorText: {
        fontFamily: Fonts.type.semiBold,
        fontSize: Fonts.size(16),
        marginVertical: Metrics.textMargin * 1.5,
        color: Colors[cn.error.regularText],
    },
    button: {
        alignSelf: 'flex-end',
    },
    buttonText: {
        color: Colors[cn.error.touchableText],
        fontFamily: Fonts.type.semiBold,
        fontSize: Fonts.size(16),
    },
});
