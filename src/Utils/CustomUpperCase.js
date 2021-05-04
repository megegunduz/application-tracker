import { Locales } from "../Modules/Localization";

export const customUpperCase = (text, locale) => {
    let newText = text;
    if (locale === Locales.turkish) {
        newText = newText.replace(/[i]/g, 'İ');
    }

    newText = newText.toLocaleUpperCase(locale);
    return newText;
}