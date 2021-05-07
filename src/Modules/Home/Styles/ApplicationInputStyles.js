import { StyleSheet } from 'react-native';
import { Metrics } from '../../../StylingConstants';
import { cn } from '../../Theming';

export default (Colors, params) => StyleSheet.create({
    inputContainer: {
        borderColor: params.borderColor,
        borderWidth: 1,
        borderRadius: Metrics.borderRadiusStandard,
        width: Metrics.width * 0.85,
        marginVertical: Metrics.marginVertical * 0.5,
        minHeight: params.isNoteInput? Metrics.width * 0.3 : null,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: params.isNoteInput? 'flex-start' : 'center',
        paddingHorizontal: Metrics.marginHorizontal,
    },
    datePickerContainer: {
        minHeight: Metrics.width * 0.13,
        justifyContent: 'center',
    },
    input: {
        flexGrow: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor:'pink'
    },
    textInput: {
        flexShrink: 1,
        backgroundColor: 'yellow',
        minWidth: params.isNoteInput ? null : Metrics.width*0.8
    },
    iconContainer: {
        width: '10%',
        height: undefined,
        aspectRatio: 1,
    },
    icon: {
        color: Colors[cn.home.applicationItemBorder],
    }
});
