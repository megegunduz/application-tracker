const constantColors = {
    white: '#FFFFFF',
    black: '#000000',
    transparent: 'transparent',
    mainColor1: '#A167CC', // light purple
    mainColor2: '#AB2134', // cherry
    whiteBlue: '#F5F6FA', // white-ish blue
    borderGrey: '#9CA3B7', // medium grey
    lightGrey: '#CBC9D9', // light grey
};

const toRGBA = (hexCode, opacity) => {
    let hex = hexCode.replace('#', '');

    if (hex.length === 3) {
        hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
    }

    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    return `rgba(${r},${g},${b},${opacity / 100})`;
};

const auth = {
    background: 'auth/background',
    button: 'auth/button',
    touchableText: 'auth/touchableText',
    inputBackground: 'auth/inputBackground',
    inputBorder: 'auth/inputBorder',
    placeholder: 'auth/placeholder',
};

const home = {

};

const settings = {
    radioButtonUnselectedIcon: 'settings/radioButtonUnselectedIcon',
    radioButtonSelectedIcon: 'settings/radioButtonSelectedIcon',
    titleText: 'settings/titleText',
    signOutButtonBorder: 'settings/signOutButtonBorder',
    signOutButtonText: 'settings/signOutButtonText',
};

const header = {

};

export const cn = {
    auth,
    home,
    settings,
    header,
};

export const darkColors = {
    // auth
    [auth.background]: toRGBA(constantColors.mainColor1, 60),
    [auth.button]: constantColors.mainColor2,
    [auth.touchableText]: constantColors.mainColor2,
    [auth.inputBackground]: constantColors.whiteBlue,
    [auth.inputBorder]: constantColors.borderGrey,
    [auth.placeholder]: constantColors.lightGrey,
    // home

    // settings
    [settings.radioButtonSelectedIcon]: constantColors.mainColor2,
    [settings.radioButtonUnselectedIcon]: constantColors.lightGrey,
    [settings.titleText]: constantColors.mainColor2,
    [settings.signOutButtonBorder]: constantColors.mainColor2,
    [settings.signOutButtonText]: constantColors.white,
    //header

};

export const lightColors = {
    // auth
    [auth.background]: toRGBA(constantColors.mainColor1, 60),
    [auth.button]: constantColors.mainColor2,
    [auth.touchableText]: constantColors.mainColor2,
    [auth.inputBackground]: constantColors.whiteBlue,
    [auth.inputBorder]: constantColors.borderGrey,
    [auth.placeholder]: constantColors.lightGrey,
    // home

    // settings
    [settings.radioButtonSelectedIcon]: constantColors.mainColor2,
    [settings.radioButtonUnselectedIcon]: constantColors.lightGrey,
    [settings.titleText]: constantColors.mainColor2,
    [settings.signOutButtonBorder]: constantColors.mainColor2,
    [settings.signOutButtonText]: constantColors.black,
    //header

};