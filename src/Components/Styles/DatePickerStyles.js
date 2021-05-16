import { StyleSheet } from 'react-native';
import { cn } from '../../Modules/Theming';

export default (Colors, isSelected) => StyleSheet.create({
    text: {
        color: isSelected ? Colors[cn.editApplication.regularText] : Colors[cn.editApplication.placeholder]
    }
});
