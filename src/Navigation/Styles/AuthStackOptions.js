import { cn } from "../../Modules/Theming"
import { Fonts, Metrics } from "../../StylingConstants"

export default (Colors) => {
    return {
        headerTitleAlign: 'left',
        headerTransparent: true,
        headerTitleContainerStyle: {
            justifyContent: 'center',
        },
        headerTitleStyle: {
            color: Colors[cn.header.text],
            fontSize: Fonts.size(24),
            fontFamily: Fonts.type.extraBold,
            letterSpacing: 2,
        },
        headerTintColor: Colors[cn.header.backIcon],
        headerBackTitleVisible: false,
        headerLeftContainerStyle: {
            marginLeft: Metrics.marginHorizontal * 0.7,
            justifyContent: 'center',
        }
    }
}