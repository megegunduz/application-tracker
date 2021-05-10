import { StyleSheet } from 'react-native';
import { Fonts, Metrics } from '../../../StylingConstants';
import { cn } from '../../Theming';

export default (Colors) => StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors[cn.home.background],
        paddingTop: Metrics.width * 0.05,
    },
    listContainer: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    add_deleteIconContainer: {
        position: 'absolute',
        bottom: Metrics.width * 0.05,
        right: Metrics.width * 0.05,
        width: Metrics.width * 0.15,
        height: undefined,
        aspectRatio: 1,
    },
    add_deleteIcon: {
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
    },
    flatListFooter: {
        backgroundColor: Colors[cn.header.background],
    }
});
