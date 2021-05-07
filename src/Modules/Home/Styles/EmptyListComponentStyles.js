import { StyleSheet } from 'react-native';
import { Fonts, Metrics } from '../../../StylingConstants';
import { cn } from '../../Theming';

export default (Colors) => StyleSheet.create({
    container: {
        backgroundColor: Colors[cn.home.background],
        paddingHorizontal: Metrics.marginHorizontal,
    },
    text: {
        color: Colors[cn.home.applicationItemBorder],
        fontFamily: Fonts.type.regular,
        fontSize: Fonts.size(16)
    },
});
