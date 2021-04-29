import { Locales } from '../LocalizationConstants';

export const LOCALIZATION_NAMESPACE = 'localization';

const INITIAL_STATE = {
    locale: Locales.turkish,
};

const LocalizationActionTypes = {
    CHANGE_LOCALE: 'localization/change_locale',
};

export const LocalizationActionCreators = {
    changeLocale: (locale) => ({
        type: LocalizationActionTypes.CHANGE_LOCALE,
        payload: { locale },
    })
};

export const LocalizationSelectors = {
    locale: globalState => globalState[LOCALIZATION_NAMESPACE].locale,
};

export const LocalizationReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LocalizationActionTypes.CHANGE_LOCALE:
            let { locale } = action.payload;
            return {
                locale,
            };
        default:
            return state;
    }
};