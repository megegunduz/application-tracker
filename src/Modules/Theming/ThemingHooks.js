import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux"
import { tn, useLocale, useLocalization } from "../Localization";
import { darkColors, lightColors } from "./Colors";
import { ThemingActionCreators, ThemingSelectors } from "./Redux/ThemingRedux"
import { ThemeModes } from "./ThemingConstants";

export const useTheme = () => {
    const themeMode = useSelector(ThemingSelectors.themeMode);
    return themeMode;
};

export const useThemedColors = () => {
    const themeMode = useTheme();

    const themedColors = useMemo(() => {

        const colors = themeMode === ThemeModes.light?
            lightColors: darkColors;
        
        return colors;
    }, [themeMode]);

    return themedColors;
};

export const useThemedStyles = (getStyles, params) => {
    const themedColors = useThemedColors();
    
    const themedStyles = useMemo(() => {
        const styles = getStyles(themedColors, params);
        return styles;
    }, [themedColors, getStyles, params]);
    return themedStyles;
};

export const useThemedValues = (getStyles, params) => {
    const themedColors = useThemedColors();
    const themedStyles = useThemedStyles(getStyles, params);
    
    return {
        colors: themedColors,
        styles: themedStyles,
    }
};

export const useChangeTheme = () => {
    const dispatch = useDispatch();
    return (themeMode) => dispatch(ThemingActionCreators.changeTheme(themeMode));
};

export const useThemeOptions = () => {
    const locale = useLocale();
    const loc = useLocalization();

    const themeOptions = useMemo(() => {
        return [
            {
                key: ThemeModes.dark,
                title: loc.t(tn.dark),
            },
            {
                key: ThemeModes.light,
                title: loc.t(tn.light),
            },
        ];
    }, [locale]);

    return themeOptions;
}