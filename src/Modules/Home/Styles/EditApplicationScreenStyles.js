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
        justifyContent: 'center',
    },
    interviewItem: {
        flexDirection: 'row',
        width: Metrics.width * 0.85,
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: Metrics.textMargin,
        borderBottomWidth: 1,
        borderBottomColor: Colors[cn.editApplication.inputBorder]
    },
    interviewText: {
        fontSize: Fonts.size(15),
        fontFamily: Fonts.type.regular,
        flexShrink: 1,
        color: Colors[cn.editApplication.regularText],
    },
    dateText: {
        fontSize: Fonts.size(13),
        fontFamily: Fonts.type.regular,
        color: Colors[cn.editApplication.regularText],
    },
    headerContainer: {
        marginTop: Metrics.marginVertical,
        marginBottom: Metrics.marginVertical * 0.5,
    },
    headerText: {
        fontFamily: Fonts.type.semiBold,
        fontSize: Fonts.size(18),
        color: Colors[cn.editApplication.titleText],
    },
    addButtonContainer: {
        marginTop: Metrics.marginVertical * 0.5,
        marginBottom: Metrics.marginVertical,
    },
    addButton: {
        backgroundColor: Colors[cn.editApplication.addInterviewButton],
        borderRadius: Metrics.borderRadiusStandard,
        borderColor: Colors[cn.editApplication.addInterviewBorder],
        borderWidth: 1,
        height: Metrics.width * 0.1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    addButtonText: {
        fontFamily: Fonts.type.semiBold,
        fontSize: Fonts.size(16),
        color: Colors[cn.editApplication.addInterviewText],
    },
    saveButtonText: {
        color: Colors[cn.editApplication.buttonText]
    },
    concludedContainer: {
        marginBottom: Metrics.marginHorizontal,
    },
    conclusionText: {
        marginTop: Metrics.marginHorizontal,
        fontFamily: Fonts.type.extraBold,
        fontSize: Fonts.size(16),
        color: Colors[cn.editApplication.regularText]
    }
});
