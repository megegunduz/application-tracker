import { StyleSheet } from 'react-native';
import { Metrics } from '../../../StylingConstants';
import { cn } from '../../Theming';

export default (Colors) => StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: Colors[cn.addApplication.background],
        paddingTop: Metrics.width * 0.04,
    },
    buttonContainer: {
        marginBottom: Metrics.marginHorizontal * 0.6,
    },
    buttonText: {
        color: Colors[cn.addApplication.buttonText]
    }
});
