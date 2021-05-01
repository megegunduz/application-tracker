import { StyleSheet } from 'react-native';
import { Metrics } from '../../../StylingConstants';
import { cn } from '../../Theming';

export default (Colors) => StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors[cn.editApplication.background],
    },
    buttonContainer: {
        marginBottom: Metrics.marginHorizontal * 0.6,
    }
});
