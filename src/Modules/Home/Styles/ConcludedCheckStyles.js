import { StyleSheet } from 'react-native';
import { Fonts, Metrics } from '../../../StylingConstants';
import { cn } from '../../Theming';

export default Colors => StyleSheet.create({
    container : {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconContainer: {
        width: Metrics.width * 0.05,
        height: undefined,
        aspectRatio: 1,
        marginRight: Metrics.textMargin,
    },
    icon:{
        color: Colors[cn.editApplication.inputBorder],
    },
    text: {
        fontFamily: Fonts.type.semiBold,
        fontSize: Fonts.size(18),
        color: '#000000'
    },
});
