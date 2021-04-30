const constantColors = {
    white: '#FFFFFF',
    black: '#000000',
    transparent: 'transparent',
    mainColor1: '#A167CC', // purple
    mainColor2: '#AB2134', // cherry
    mainColor3: '#7674BB', // medium-purple (very similar to mainColor1, might remove later)
    whiteBlue: '#F5F6FA', // white-ish blue
    borderGrey: '#9CA3B7', // medium grey
    lightGrey: '#CBC9D9', // light grey
    extraLightPurple: '#E0DEF4', // extra light purple
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
    background: 'home/backgorund',
    applicationItemBorder: 'home/applicationItemBorder',
    companyName: 'home/companyName',
    date: 'home/date',
    position: 'home/position',
    addIcon: 'home/addIcon',
};

const settings = {
    background: 'settings/background',
    radioButtonUnselectedIcon: 'settings/radioButtonUnselectedIcon',
    radioButtonSelectedIcon: 'settings/radioButtonSelectedIcon',
    titleText: 'settings/titleText',
    signOutButtonBorder: 'settings/signOutButtonBorder',
    signOutButtonText: 'settings/signOutButtonText',
};

const header = {
    background: 'header/background',
    text: 'header/text',
    backIcon: 'header/backIcon',
    rightIcon: 'header/rightIcon',
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
    [home.background]: constantColors.extraLightPurple,
    [home.applicationItemBorder]: constantColors.mainColor3,
    [home.companyName]: constantColors.black,
    [home.date]: constantColors.borderGrey,
    [home.position]: constantColors.black,
    [home.addIcon]: constantColors.mainColor2,

    // settings
    [settings.background]: constantColors.extraLightPurple,
    [settings.radioButtonSelectedIcon]: constantColors.mainColor2,
    [settings.radioButtonUnselectedIcon]: constantColors.lightGrey,
    [settings.titleText]: constantColors.mainColor2,
    [settings.signOutButtonBorder]: constantColors.mainColor2,
    [settings.signOutButtonText]: constantColors.white,

    //header
    [header.background]: constantColors.mainColor1,
    [header.text]: constantColors.extraLightPurple,
    [header.backIcon]: constantColors.extraLightPurple,
    [header.rightIcon]: constantColors.extraLightPurple,
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
    [home.background]: constantColors.extraLightPurple,
    [home.applicationItemBorder]: constantColors.mainColor1,
    [home.companyName]: constantColors.black,
    [home.date]: constantColors.borderGrey,
    [home.position]: constantColors.black,
    [home.addIcon]: constantColors.mainColor2,

    // settings
    [settings.background]: constantColors.extraLightPurple,
    [settings.radioButtonSelectedIcon]: constantColors.mainColor2,
    [settings.radioButtonUnselectedIcon]: constantColors.black,
    [settings.titleText]: constantColors.mainColor2,
    [settings.signOutButtonBorder]: constantColors.mainColor2,
    [settings.signOutButtonText]: constantColors.black,

    //header
    [header.background]: constantColors.mainColor1,
    [header.text]: constantColors.extraLightPurple,
    [header.backIcon]: constantColors.extraLightPurple,
    [header.rightIcon]: constantColors.extraLightPurple,
};