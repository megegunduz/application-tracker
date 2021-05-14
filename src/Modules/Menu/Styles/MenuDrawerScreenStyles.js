import { StyleSheet } from 'react-native';
import { Fonts, Metrics } from '../../../StylingConstants';
import { cn } from '../../Theming';

export default Colors => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors[cn.home.background],
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    appNameContainer: {
        // backgroundColor: 'pink',
        marginBottom: Metrics.width * 0.035,
    },
    appNameText: {
        color: Colors[cn.home.addIcon],
        fontFamily: Fonts.type.blackItalic,
        fontSize: Fonts.size(46),
        letterSpacing: Metrics.width * 0.02
    },
});
