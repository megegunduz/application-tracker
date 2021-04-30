import { StyleSheet } from 'react-native';
import { Metrics } from '../../../StylingConstants';
import { cn } from '../../Theming';

export default (Colors) => StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors[cn.home.background],
    },
    listContainer: {
        marginTop: Metrics.marginHorizontalLarge * 0.7,
        // paddingBottom: Metrics.marginVertical,
    },
});
