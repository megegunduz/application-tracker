import { StyleSheet } from 'react-native';
import { Fonts, Metrics } from '../../../StylingConstants';

export default Colors => StyleSheet.create({
    modal: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContentContainer: {
        width: Metrics.width * 0.8,
        flexGrow: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "white",
        padding: Metrics.marginHorizontal * 0.5,
    },
    headerContainer: {
        // backgroundColor: 'pink',
        flexGrow: 0.1,
    },
    headerText: {
        fontFamily: Fonts.type.semiBold,
        fontSize: Fonts.size(20),
    },
    pickerContainer: {
        // backgroundColor :'lime',
        flexGrow: 0.2,
    },
    picker: {

    },
    inputContainer: {
        // backgroundColor: 'orange',
        flexGrow: 0.7,
        alignSelf: 'stretch',
    },
    input: {

    }
});
