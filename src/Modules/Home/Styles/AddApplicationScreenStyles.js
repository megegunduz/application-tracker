import { StyleSheet } from 'react-native';
import { Metrics } from '../../../StylingConstants';
import { cn } from '../../Theming';

export default (Colors) => StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: Colors[cn.addApplication.background],
        paddingTop: Metrics.width * 0.04,
    },
    scrollViewContentContainer: {
        alignItems: 'center',
    },
    buttonContainer: {
        marginBottom: Metrics.marginHorizontal * 0.6,
        alignItems: 'center',
    },
    buttonText: {
        color: Colors[cn.addApplication.buttonText]
    }
});
