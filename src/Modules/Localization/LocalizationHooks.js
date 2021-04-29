import I18n from "./I18nConfig";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux"
import { LocaleDateFormats } from "./LocalizationConstants";
import { LocalizationActionCreators, LocalizationSelectors } from "./Redux/LocalizationRedux"

export const useLocale = () => {
    const currentLocale = useSelector(LocalizationSelectors.locale);
    return currentLocale;
};

export const useLocalization = () => {
    const currentLocale = useLocale();
    const localizationAgent = useMemo(() => {
        I18n.locale = currentLocale;
        return I18n;
    }, [currentLocale]);

    return localizationAgent;
};

export const useChangeLocale = () => {
    const dispatch = useDispatch();
    return (locale) => {
        dispatch(LocalizationActionCreators.changeLocale(locale));
    };
};

export const useLocaleDateFormat = () => {
    const locale = useLocale();
    return LocaleDateFormats[locale];
};