import { StyleSheet } from 'react-native';
import { cn } from '../../Modules/Theming';
import { Metrics } from '../../StylingConstants';

export default (Colors, isSelected) => StyleSheet.create({
    container: {
        width: Metrics.width * 0.75,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textContainer: {
        alignItems: 'center',
    },
    text: {
        color: isSelected ? Colors[cn.editApplication.regularText] : Colors[cn.editApplication.placeholder]
    },
    touchable: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconContainer: {
        width: Metrics.width * 0.06,
        height: undefined,
        aspectRatio: 1,
        marginRight: Metrics.textMargin * 0.6,
    },
    icon: {
        color: Colors[cn.editApplication.regularText],
    },
    touchableText: {
        color: Colors[cn.editApplication.regularText],
    },
});
