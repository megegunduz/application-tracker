import { StyleSheet } from 'react-native';
import { Fonts, Metrics } from '../../../StylingConstants';
import { cn } from '../../Theming';

export default Colors => StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: Colors[cn.auth.background],
    },
    keyboardAvoiding: {
        flex: 1,
        alignItems: 'center',
    },
    container: {
        backgroundColor: Colors[cn.auth.background],
        alignItems: 'center',
        flex: 1,
    },
    textContainer: {
        marginVertical: Metrics.width * 0.2,
        marginHorizontal: Metrics.marginHorizontal,
    },
    text: {
        fontFamily: Fonts.type.regular,
        fontSize: Fonts.size(18)
    },
    inputContainer: {
        flexGrow: 0.9,
    },
    touchable: {
        
    },
});
