import { StyleSheet } from 'react-native';
import { cn } from '../../Modules/Theming';
import { Metrics } from '../../StylingConstants';

export default (Colors, params) => StyleSheet.create({
    container: {
        borderRadius: Metrics.borderRadiusStandard,
        borderWidth: 1,
        borderColor: Colors[cn.home.applicationItemBorder],
        paddingLeft: Metrics.marginHorizontal * 0.8,
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: Metrics.width * 0.75,
        marginBottom: Metrics.marginVertical * 0.5,
    },
    normalHeight: {
        height: Metrics.width * 0.12,
    },
    tallHeight: {
        height: Metrics.width * 0.15,
    },
});
