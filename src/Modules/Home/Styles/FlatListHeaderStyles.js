import { StyleSheet } from 'react-native';
import { Fonts, Metrics } from '../../../StylingConstants';
import { cn } from '../../Theming';

export default (Colors, params) => StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: Metrics.width * 0.05,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: params.allChosen ? Metrics.width * 0.3 : 0,
        paddingRight: params.concludedChosen ? Metrics.width * 0.1 : 0,
    },
    touchableContainer: {
        marginHorizontal: 10,
        alignItems: 'center'
    },
    touchable: {
        
    },
    allText: {
        fontFamily: Fonts.type.semiBold,
        fontSize: params.allChosen ? Fonts.size(24) : Fonts.size(16),
        color: params.allChosen ? Colors[cn.home.companyName] : Colors[cn.home.unselectedHeader],
    },
    concludedText: {
        fontFamily: Fonts.type.semiBold,
        fontSize: params.concludedChosen ? Fonts.size(24) : Fonts.size(16),
        color: params.concludedChosen ? Colors[cn.home.companyName] : Colors[cn.home.unselectedHeader],
    },
});
