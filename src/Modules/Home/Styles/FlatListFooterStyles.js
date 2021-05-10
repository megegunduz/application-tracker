import { StyleSheet } from 'react-native';
import { Fonts, Metrics } from '../../../StylingConstants';
import { cn } from '../../Theming';

export default (Colors) => StyleSheet.create({
    container: {
        width: Metrics.width,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors[cn.header.background],
        marginTop: Metrics.marginHorizontal * 0.5,
        minHeight: Metrics.width * 0.1,
        paddingVertical: Metrics.width * 0.03,
        paddingHorizontal: Metrics.width * 0.1,
    },
    text: {
        color: 'black',
        fontSize: Fonts.size(16),
        fontFamily: Fonts.type.semibold,
    },
});
