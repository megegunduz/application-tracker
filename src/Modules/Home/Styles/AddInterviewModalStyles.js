import { StyleSheet } from 'react-native';
import { Fonts, Metrics } from '../../../StylingConstants';
import { cn } from '../../Theming';

export default (Colors) => StyleSheet.create({
    modal: {
        justifyContent: 'center',
        alignItems:'center',
    },
    modalContentContainer: {
        width: Metrics.width * 0.8,
        minHeight: Metrics.height * 0.5,
        backgroundColor: Colors[cn.addInterview.background],
        borderColor: Colors[cn.addInterview.border],
        borderWidth: 1,
        borderRadius: Metrics.borderRadiusStandard,
        justifyContent:'space-around',
        alignItems:'center',
        paddingVertical: Metrics.marginVertical,
    },
    inputContainer: {
        marginBottom: Metrics.width * 0.03,
    },
    noteInputContainer: {
        flexGrow: 1,
        justifyContent: 'flex-start',
        marginBottom: Metrics.width * 0.03,
    },
    textInput: {
        width: Metrics.width * 0.7,
        paddingRight: Metrics.width * 0.05,
    },
    addButton: {
        backgroundColor: Colors[cn.addInterview.addInterviewButton],
        borderRadius: Metrics.borderRadiusStandard,
        borderColor: Colors[cn.addInterview.addInterviewBorder],
        borderWidth: 1,
        height: Metrics.width * 0.1,
        alignItems: 'center',
        justifyContent: 'center',
        width: Metrics.width * 0.75,
        marginTop: Metrics.width * 0.04,
    },
    addButtonText: {
        fontFamily: Fonts.type.semiBold,
        fontSize: Fonts.size(16),
        color: Colors[cn.addInterview.addInterviewText],
    },
});
