const constantColors = {
    white: '#FFFFFF',
    black: '#000000',
    transparent: 'transparent',
    purples: {
        1: '#e0def4', // Light backgorund,
        2: '#B182D5', // Light header/border, Auth background
        3: '#b0adcc', // Light placeholder, Auth placeholder(All modes),
        4: '#7b7890', // Light date, Auth forgot password,
        5: '#443846', // Dark header/border, Auth background
    },
    greys: {
        1: '#cacaca', // Dark date text,
        2: '#989898', // Dark placeholder,
        3: '#888888', // Dark background,
    },
    cherry: '#ab2134', // Buttons, icons
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
    signOutButtonBackground: 'settings/signOutButtonBackground',
    signOutButtonText: 'settings/signOutButtonText',
};

const addApplication = {
    background: 'addApplication/background',
}

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
    addApplication,
    header,
};

export const darkColors = {
    // auth
    [auth.background]: constantColors.purples[5],
    [auth.button]: constantColors.cherry,
    [auth.touchableText]: constantColors.cherry,
    [auth.inputBackground]: constantColors.purples[1],
    [auth.inputBorder]: constantColors.greys[5],
    [auth.placeholder]: constantColors.greys[2],

    // home
    [home.background]: constantColors.greys[3],
    [home.applicationItemBorder]: constantColors.purples[5],
    [home.companyName]: constantColors.black,
    [home.date]: constantColors.greys[1],
    [home.position]: constantColors.black,
    [home.addIcon]: constantColors.cherry,

    // settings
    [settings.background]: constantColors.greys[3],
    [settings.radioButtonSelectedIcon]: constantColors.cherry,
    [settings.radioButtonUnselectedIcon]: constantColors.purples[5],
    [settings.titleText]: constantColors.cherry, 
    [settings.signOutButtonBackground]: constantColors.cherry,
    [settings.signOutButtonText]: constantColors.white,

    // addApplication
    [addApplication.background]: constantColors.greys[3],

    //header
    [header.background]: constantColors.purples[5],
    [header.text]: constantColors.purples[1],
    [header.backIcon]: constantColors.purples[1],
    [header.rightIcon]: constantColors.purples[1],
};

export const lightColors = {
    // auth
    [auth.background]: constantColors.purples[2],
    [auth.button]: constantColors.cherry,
    [auth.touchableText]: constantColors.cherry,
    [auth.inputBackground]: constantColors.purples[1],
    [auth.inputBorder]: constantColors.transparent,
    [auth.placeholder]: constantColors.purples[3],

    // home
    [home.background]: constantColors.purples[1],
    [home.applicationItemBorder]: constantColors.purples[2],
    [home.companyName]: constantColors.black,
    [home.date]: constantColors.purples[4],
    [home.position]: constantColors.black,
    [home.addIcon]: constantColors.cherry,

    // settings
    [settings.background]: constantColors.purples[1],
    [settings.radioButtonSelectedIcon]: constantColors.cherry,
    [settings.radioButtonUnselectedIcon]: constantColors.purples[2],
    [settings.titleText]: constantColors.cherry,
    [settings.signOutButtonBackground]: constantColors.cherry,
    [settings.signOutButtonText]: constantColors.white,
    
    // addApplication
    [addApplication.background]: constantColors.purples[1],

    //header
    [header.background]: constantColors.purples[2],
    [header.text]: constantColors.purples[1],
    [header.backIcon]: constantColors.purples[1],
    [header.rightIcon]: constantColors.purples[1],
};