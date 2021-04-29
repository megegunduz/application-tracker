import I18n from 'i18n-js';
import { Locales } from './LocalizationConstants';
import { english, turkish } from './Texts';

I18n.defaultLocale = Locales.turkish;
I18n.locale = Locales.turkish;
I18n.fallbacks = true;
I18n.locales.no = Locales.turkish;

I18n.translations = {
    [Locales.turkish]: turkish,
    [Locales.english]: english,
};

export default I18n;