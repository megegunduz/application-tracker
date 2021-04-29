import { StyleSheet } from 'react-native';
import { Fonts, Metrics } from '../../../StylingConstants';
import { cn } from '../../Theming';

export default (Colors) => StyleSheet.create({
    touchable: {
        backgroundColor: Colors[cn.auth.button],
        width: Metrics.width * 0.68,
        height: Metrics.width * 0.12,
        borderRadius: Metrics.borderRadiusStandard,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: Metrics.marginVertical,
    },
    buttonText: {
        fontSize: Fonts.size(18),
        color: 'white',
    },
});
