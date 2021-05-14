import { StyleSheet } from 'react-native';
import { Fonts, Metrics } from '../../../StylingConstants';

export default Colors => StyleSheet.create({
    container: {
        padding: Metrics.width * 0.05,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontFamily: Fonts.type.semiBold,
        fontSize: Fonts.size(20),
        marginBottom: Metrics.width * 0.02,
    },
    touchable: {
        marginTop: Metrics.width * 0.03,
    },
    ascendingText: {
        fontFamily: Fonts.type.bold,
        fontSize: Fonts.size(16),
    },
    descendingText: {
        fontFamily: Fonts.type.bold,
        fontSize: Fonts.size(16),
    },
});
