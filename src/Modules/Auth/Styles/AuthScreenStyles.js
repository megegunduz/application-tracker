import { StyleSheet } from 'react-native';
import { Fonts, Metrics } from '../../../StylingConstants';
import { cn } from '../../Theming';

export default (Colors, params) => StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors[cn.auth.background],
    },
    logoContainer:{
        marginBottom: Metrics.marginVertical,
    },
    fakeLogo: {
        fontSize: 100
    },
    headerContainer: {
        marginBottom: Metrics.marginHorizontal,
    },
    header: {
        fontSize: Fonts.size(38),
    },
    inputsContainer: {

    },
    bottomContainer: {
        marginVertical: Metrics.marginVertical * 2,
        flexDirection: 'row',

    },
    touchableText: {
        color: Colors[cn.auth.touchableText],
        fontWeight: 'bold',
        marginLeft: Metrics.textMargin,
    },
    appNameContainer:{
        justifyContent: 'flex-end',
    },
    appNameText: {
        color: Colors[cn.auth.button],
        fontSize: Fonts.size(60),
    }
});
