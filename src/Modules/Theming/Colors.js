const constantColors = {
    white: '#FFFFFF',
    black: '#000000',
    transparent: 'transparent',
    mainColor1: '#A167CC',
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
};

const home = {

};

const settings = {

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
    // home

    // settings

    //header

};

export const lightColors = {
    // auth
    [auth.background]: toRGBA(constantColors.mainColor1, 60),
    // home

    // settings

    //header

};