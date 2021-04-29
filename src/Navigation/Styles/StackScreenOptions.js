import { cn } from "../../Modules/Theming"
import { Fonts, Metrics } from "../../StylingConstants"

export default (Colors) => {
    return {
        headerTitleAlign: 'center',
        headerStyle: {
            backgroundColor: Colors[cn.header.background],
        },
        headerTitleStyle: {
            color: Colors[cn.header.text],
            fontSize: Fonts.size(18),
        },
        headerTintColor: Colors[cn.header.backIcon],
        headerBackTitleVisible: false,
        headerLeftContainerStyle: {
            marginLeft: Metrics.marginHorizontal * 0.7,
        }
    }
}