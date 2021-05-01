import { StyleSheet } from 'react-native';
import { Metrics } from '../../../StylingConstants';

export default (Colors, params) => StyleSheet.create({
    inputContainer: {
        borderColor: params.borderColor,
        borderWidth: 1,
        borderRadius: Metrics.borderRadiusStandard,
        width: Metrics.width * 0.85,
        marginVertical: Metrics.marginVertical * 0.5,
        height: params.isNoteInput? Metrics.width * 0.3 : null,
    }
});
