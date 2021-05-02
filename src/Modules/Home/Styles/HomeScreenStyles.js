import { StyleSheet } from 'react-native';
import { Metrics } from '../../../StylingConstants';
import { cn } from '../../Theming';

export default (Colors) => StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: 'red'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors[cn.home.background],
    },
    listContainer: {
        marginTop: Metrics.marginHorizontalLarge * 0.7,
        flexGrow: 1,
    },
    addIconContainer: {
        position: 'absolute',
        bottom: Metrics.width * 0.05,
        right: Metrics.width * 0.05,
        width: Metrics.width * 0.15,
        height: undefined,
        aspectRatio: 1,
    },
    addIcon: {
        color: Colors[cn.home.addIcon],
    },
    cancelIconContainer: {
        position: 'absolute',
        bottom: Metrics.width * 0.25,
        right: Metrics.width * 0.05,
        width: Metrics.width * 0.15,
        height: undefined,
        aspectRatio: 1,
    },
    cancelIcon: {
        color: Colors[cn.home.addIcon]
    }
});
