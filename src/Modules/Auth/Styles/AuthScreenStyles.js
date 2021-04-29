import { StyleSheet } from 'react-native';
import { cn } from '../../Theming';

export default (Colors, params) => StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors[cn.auth.background],
    },
});
