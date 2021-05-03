import { StyleSheet } from 'react-native';
import { Fonts, Metrics } from '../../../StylingConstants';
import { cn } from '../../Theming';

export default (Colors) => StyleSheet.create({
    modal: {
        justifyContent: 'center',
        alignItems:'center'
    },
    modalContentContainer: {
        width: Metrics.width * 0.8,
        height: Metrics.width * 0.55,
        backgroundColor: Colors[cn.home.background],
        borderColor: Colors[cn.home.applicationItemBorder],
        borderWidth: 1,
        borderRadius: Metrics.borderRadiusStandard,
        justifyContent:'center',
        alignItems:'center',
    },
    addButton: {
        backgroundColor: Colors[cn.editApplication.addButton],
        borderRadius: Metrics.borderRadiusStandard,
        borderColor: Colors[cn.home.addIcon],
        borderWidth: 1,
        height: Metrics.width * 0.1,
        alignItems: 'center',
        justifyContent: 'center',
        width: Metrics.width * 0.72,
        marginTop: Metrics.width * 0.04,
    },
    addButtonText: {
        fontFamily: Fonts.type.semiBold,
        fontSize: Fonts.size(16),
        color: Colors[cn.home.addIcon],
    },
});
