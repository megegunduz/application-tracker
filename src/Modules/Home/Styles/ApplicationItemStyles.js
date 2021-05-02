import { StyleSheet } from 'react-native';
import { Fonts, Metrics } from '../../../StylingConstants';
import { cn } from '../../Theming';

export default (Colors, params) => StyleSheet.create({
    container: {
        borderRadius: Metrics.borderRadiusStandard,
        marginVertical: Metrics.marginVertical / 2,
        paddingLeft: Metrics.marginHorizontal * 0.5,
        paddingRight: Metrics.marginHorizontal * 0.2,
        paddingVertical: Metrics.width * 0.015,
        width: Metrics.width * 0.9,
        borderColor: Colors[cn.home.applicationItemBorder],
        borderWidth: 1,
    },
    companyNameAndDateContainer: {
        flexGrow: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: Metrics.marginHorizontal * 0.3,
        alignItems: 'flex-start',
    },
    companyNameContainer: {
        flexShrink: 1,
        marginLeft: params.deleteMode ? Metrics.marginHorizontal * 0.7 : null,
    },
    companyNameText: {
        fontFamily: Fonts.type.extraBold,
        fontSize: Fonts.size(18),
        color: Colors[cn.home.companyName],
    },
    dateContainer: {
        flexGrow: 1,
    },
    dateText: {
        textAlign: 'right',
        fontFamily: Fonts.type.regular,
        fontSize: Fonts.size(14),
        color: Colors[cn.home.date],
    },
    positionTextContainer: {
        flexGrow: 1,
        marginLeft: params.deleteMode ? Metrics.marginHorizontal * 1.7 : null,
    },
    positionText: {
        fontFamily: Fonts.type.bold,
        fontSize: Fonts.size(16),
        color: Colors[cn.home.position],
    },
    iconContainer: {
        width: Metrics.width * 0.05,
        height: undefined,
        aspectRatio: 1,
    },
});
