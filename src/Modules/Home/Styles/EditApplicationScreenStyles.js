import { StyleSheet } from 'react-native';
import { Fonts, Metrics } from '../../../StylingConstants';
import { cn } from '../../Theming';

export default (Colors) => StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors[cn.editApplication.background],
    },
    buttonContainer: {
        marginBottom: Metrics.marginHorizontal * 0.6,
    },
    interviewsContainer:{
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    interviewItem: {
        borderColor: Colors[cn.home.applicationItemBorder],
        borderWidth: 1,
        borderRadius: Metrics.borderRadiusStandard,
        width: Metrics.width * 0.85,
        marginVertical: Metrics.marginVertical * 0.5,
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: Metrics.textMargin,
    },
    interviewText: {
        fontSize: Fonts.size(15),
        fontFamily: Fonts.type.regular,
    },
    headerContainer: {
        marginTop: Metrics.marginVertical,
        marginBottom: Metrics.marginVertical * 0.5,
    },
    headerText: {
        fontFamily: Fonts.type.semiBold,
        fontSize: Fonts.size(18),
        color: Colors[cn.home.addIcon],
    },
    addButtonContainer: {
        marginTop: Metrics.marginVertical * 0.5,
        marginBottom: Metrics.marginVertical,
    },
    addButton: {
        backgroundColor: Colors[cn.editApplication.addButton],
        borderRadius: Metrics.borderRadiusStandard,
        borderColor: Colors[cn.home.addIcon],
        borderWidth: 1,
        height: Metrics.width * 0.1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    addButtonText: {
        fontFamily: Fonts.type.semiBold,
        fontSize: Fonts.size(16),
        color: Colors[cn.home.addIcon],
    },
});
