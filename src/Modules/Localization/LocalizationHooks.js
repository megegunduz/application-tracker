import I18n from "./I18nConfig";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux"
import { LocaleDateFormats, Locales } from "./LocalizationConstants";
import { LocalizationActionCreators, LocalizationSelectors } from "./Redux/LocalizationRedux"
import { tn } from "./Texts";

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

export const useLocaleOptions = () => {
    const locale = useLocale();
    const loc = useLocalization();

    const localeOptions = useMemo(() => {
        return [
            {
                key: Locales.english,
                title: loc.t(tn.english),
            },
            {
                key: Locales.turkish,
                title: loc.t(tn.turkish),
            },
        ];
    }, [locale]);

    return localeOptions;
}