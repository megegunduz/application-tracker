import { StyleSheet } from 'react-native';
import { Metrics } from '../../../StylingConstants';

export default Colors => StyleSheet.create({
    modal: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContentContainer: {
        width: Metrics.width * 0.8,
        flexGrow: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "white"
    },
});
