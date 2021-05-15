import { StyleSheet } from 'react-native';
import { Fonts, Metrics } from '../../../StylingConstants';
import { cn } from '../../Theming';

export default Colors => StyleSheet.create({
    container: {
        padding: Metrics.width * 0.05,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors[cn.filter.background],
    },
    headerText: {
        fontFamily: Fonts.type.semiBold,
        fontSize: Fonts.size(20),
        marginBottom: Metrics.width * 0.02,
        color: Colors[cn.filter.title],
    },
    touchable: {
        flexDirection: 'row',
        marginTop: Metrics.width * 0.03,
        alignItems: 'center',
    },
    ascendingText: {
        fontFamily: Fonts.type.bold,
        fontSize: Fonts.size(16),
        color: Colors[cn.filter.regularText],
    },
    descendingText: {
        fontFamily: Fonts.type.bold,
        fontSize: Fonts.size(16),
        color: Colors[cn.filter.regularText],
    },
    iconContainer: {
        width: Metrics.width * 0.08,
        height: undefined,
        aspectRatio: 1,
        marginRight: Metrics.width * 0.025,
    },
    icon: {
        color: Colors[cn.filter.icon]
    },
});
