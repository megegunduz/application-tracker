import { StyleSheet } from 'react-native';

export default (Colors, isSelected) => StyleSheet.create({
    text: {
        color: isSelected ? 'black' : '#9E9390'
    }
});
