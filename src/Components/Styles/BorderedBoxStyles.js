import { StyleSheet } from 'react-native';
import { cn } from '../../Modules/Theming';
import { Metrics } from '../../StylingConstants';

export default (Colors, params) => StyleSheet.create({
    container: {
        borderRadius: Metrics.borderRadiusStandard,
        borderWidth: 1,
        borderColor: Colors[cn.home.applicationItemBorder],
        padding: Metrics.marginHorizontal * 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: Metrics.width * 0.1,
    },
    normalHeight: {
        height: Metrics.width * 0.12,
    },
    tallHeight: {
        height: Metrics.width * 0.15,
    },
});
