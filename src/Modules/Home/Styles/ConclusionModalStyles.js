import { StyleSheet } from 'react-native';
import { Fonts, Metrics } from '../../../StylingConstants';
import { cn } from '../../Theming';

export default (Colors, isDisabled) => StyleSheet.create({
    modal: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContentContainer: {
        width: Metrics.width * 0.8,
        flexGrow: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors[cn.conclusionModal.background],
        padding: Metrics.marginHorizontal * 0.6,
        borderRadius: Metrics.borderRadiusStandard,
        borderColor: Colors[cn.conclusionModal.borders],
        borderWidth: 1,
    },
    headerContainer: {
        flexGrow: 0.1,
    },
    headerText: {
        fontFamily: Fonts.type.semiBold,
        fontSize: Fonts.size(20),
        color: Colors[cn.conclusionModal.title]
    },
    pickerContainer: {
        alignSelf: 'stretch',
    },
    pickerItem: {
        color: Colors[cn.conclusionModal.regularText],
        backgroundColor: Colors[cn.conclusionModal.background]
    },
    pickerPlaceholder: {
        color: Colors[cn.conclusionModal.extraPaleText],
        backgroundColor: Colors[cn.conclusionModal.background]
    },
    inputContainer: {
        flexGrow: 0.7,
        alignSelf: 'stretch',
        paddingHorizontal: Metrics.textMargin,
        borderWidth: 1,
        borderRadius: Metrics.borderRadiusStandard,
        borderColor: Colors[cn.conclusionModal.borders],
    },
    input: {
        color: Colors[cn.conclusionModal.regularText]
    },
    buttonContainer: {
        marginTop: Metrics.marginHorizontal,
    },
    button:{
        width: Metrics.width * 0.5,
        backgroundColor: isDisabled ? Colors[cn.conclusionModal.disabledButton] : Colors[cn.conclusionModal.enabledButton]
    },
    buttonText: {
        color: Colors[cn.conclusionModal.buttonText]
    }
});
