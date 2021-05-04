import { StyleSheet } from 'react-native';
import { Metrics } from '../../../StylingConstants';

export default (Colors, params) => StyleSheet.create({
    inputContainer: {
        borderColor: params.borderColor,
        borderWidth: 1,
        borderRadius: Metrics.borderRadiusStandard,
        width: Metrics.width * 0.85,
        marginVertical: Metrics.marginVertical * 0.5,
        minHeight: params.isNoteInput? Metrics.width * 0.3 : null,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: params.isNoteInput? 'flex-start' : 'center',
        paddingHorizontal: Metrics.marginHorizontal,
    },
    datePickerContainer: {
        minHeight: Metrics.width * 0.13,
        justifyContent: 'center',
    },
});
