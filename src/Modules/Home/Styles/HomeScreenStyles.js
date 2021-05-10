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
        paddingVertical: Metrics.height * 0.05,
    },
    pastFutureContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'stretch',
        width: Metrics.width * 0.9,
        marginHorizontal: Metrics.marginHorizontal,
        height: Metrics.height * 0.1,
        alignItems: 'center',
        paddingHorizontal: Metrics.marginHorizontal,
    },
    furuteText: {
        fontFamily: Fonts.type.extraBold,
        fontSize: Fonts.size(16)
    },
    pastText: {
        fontFamily: Fonts.type.extraBold,
        fontSize: Fonts.size(16)
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
