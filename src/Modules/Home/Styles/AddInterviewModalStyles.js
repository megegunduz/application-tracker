import { StyleSheet } from 'react-native';
import { Metrics } from '../../../StylingConstants';
import { cn } from '../../Theming';

export default (Colors) => StyleSheet.create({
    modal: {
        justifyContent: 'center',
        alignItems:'center'
    },
    modalContentContainer: {
        width: Metrics.width * 0.75,
        height: Metrics.width * 0.55,
        backgroundColor: Colors[cn.home.background],
        borderColor: Colors[cn.home.applicationItemBorder],
        borderWidth: 1,
        borderRadius: Metrics.borderRadiusStandard,
        justifyContent:'space-around',
        alignItems:'center',
    },
});
