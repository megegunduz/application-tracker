import { StyleSheet } from 'react-native';
import { Fonts, Metrics } from '../../../StylingConstants';
import { cn } from '../../Theming';

export default (Colors) => StyleSheet.create({
    modalContentContainer: {
        height: Metrics.height * 0.75,
        backgroundColor: Colors[cn.home.background],
        alignItems: 'center',
        paddingTop: Metrics.marginHorizontal * 0.5,
        borderRadius: Metrics.borderRadiusStandard,
        borderColor: Colors[cn.home.applicationItemBorder],
        borderWidth: 1,
        // paddingBottom: 10,
    },
    sectionTitle:{
        alignSelf: 'flex-start',
        paddingLeft: Metrics.marginHorizontalLarge,
        marginVertical: Metrics.marginHorizontal * 0.5,
        color: Colors[cn.home.addIcon],
        fontFamily: Fonts.type.extraBold,
        fontSize: Fonts.size(17),
    },
    text: {
        fontFamily: Fonts.type.semiBold,
        fontSize: Fonts.size(15),
        color: Colors[cn.addInterview.regularText],
    },
    detailsBox: {
        minHeight: Metrics.width * 0.4,
        flexGrow: 1,
        justifyContent: 'flex-start',
        padding: Metrics.marginHorizontal * 0.8,
    },
    deleteButton: {
        width: Metrics.width * 0.75,
        marginVertical: Metrics.marginHorizontal * 0.5,
    },
});
