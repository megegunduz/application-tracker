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
    picker: {

    },
    pickerPlaceholder: {
        color: 'lightgrey'
    },
    inputContainer: {
        flexGrow: 0.7,
        alignSelf: 'stretch',
        paddingHorizontal: Metrics.textMargin,
        borderWidth: 1,
        borderRadius: Metrics.borderRadiusStandard,
        borderColor: Colors[cn.conclusionModal.borders]
    },
    input: {

    },
    buttonContainer: {
        marginTop: Metrics.marginHorizontal,
    },
    button:{
        width: Metrics.width * 0.5,
        backgroundColor: isDisabled ? 'lightgrey' : Colors[cn.conclusionModal.enabledButton]
    },
});
