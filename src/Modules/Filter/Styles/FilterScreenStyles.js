import { StyleSheet } from 'react-native';
import { Metrics } from '../../../StylingConstants';

export default Colors => StyleSheet.create({
    container: {
        padding: Metrics.width * 0.05,
        alignItems: 'center',
        justifyContent: 'center',
    },
    touchable: {
        marginTop: Metrics.width * 0.1,
    },
});
