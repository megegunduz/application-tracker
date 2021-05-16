import { StyleSheet } from 'react-native';
import { Fonts, Metrics } from '../../../StylingConstants';
import { cn } from '../../Theming';

export default (Colors) => StyleSheet.create({
    modal: {
        justifyContent: 'center',
        alignItems:'center',
    },
    modalContentContainer: {
        width: Metrics.width * 0.9,
        minHeight: Metrics.width,
        backgroundColor: Colors[cn.addInterview.background],
        borderColor: Colors[cn.addInterview.border],
        borderWidth: 1,
        borderRadius: Metrics.borderRadiusStandard,
        justifyContent:'space-around',
        alignItems:'center',
        paddingVertical: Metrics.marginVertical,
    },
    headerContainer: {
        marginBottom: Metrics.width * 0.05,
    },
    header: {
        color: Colors[cn.addInterview.regularText],
        fontFamily: Fonts.type.semiBold,
        fontSize: Fonts.size(20),
    },
    inputContainer: {
        marginBottom: Metrics.width * 0.03,
        width: Metrics.width * 0.85
    },
    noteInputContainer: {
        flexGrow: 1,
        justifyContent: 'flex-start',
        marginBottom: Metrics.width * 0.03,
        width: Metrics.width * 0.85
    },
    textInput: {
        width: Metrics.width * 0.7,
        paddingRight: Metrics.width * 0.05,
        color: Colors[cn.addInterview.regularText],
    },
    saveButton: {
        backgroundColor: Colors[cn.addInterview.addInterviewButton],
        borderRadius: Metrics.borderRadiusStandard,
        borderColor: Colors[cn.addInterview.addInterviewBorder],
        borderWidth: 1,
        height: Metrics.width * 0.1,
        alignItems: 'center',
        justifyContent: 'center',
        width: Metrics.width * 0.6,
        marginTop: Metrics.width * 0.04,
    },
    saveButtonText: {
        fontFamily: Fonts.type.semiBold,
        fontSize: Fonts.size(16),
        color: Colors[cn.addInterview.addInterviewText],
    },
});
