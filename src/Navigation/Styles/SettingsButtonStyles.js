import { StyleSheet } from 'react-native';
import { cn } from '../../Modules/Theming';
import { Metrics } from '../../StylingConstants';

export default (Colors) => StyleSheet.create({
    iconContainer: {
        width: Metrics.width * 0.08,
        height: undefined,
        aspectRatio: 1,
        marginRight: Metrics.marginHorizontal * 0.9,
        padding: 4,
    },
    icon: {
        color: Colors[cn.header.rightIcon],
    },
});
