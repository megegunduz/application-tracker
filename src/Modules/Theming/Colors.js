const constantColors = {
    white: '#FFFFFF',
    black: '#000000',
    transparent: 'transparent',
    oranges: {
        1: '#FFEEE9', // Light backgorund
        2: '#FF8261', // Light navigation header, default item border, Auth background
    },
    purples: {
        1: '#78697E', // Dark backgorund
        2: '#443846', // Dark navigation header, Default item border, Auth background
        3: '#636175', // Light date, Auth forgot password,
    },
    greys: {
        1: '#CACACA', // Dark date text, Light FlatListHeader unselected
        2: '#7D7D7D', // Dark FlatListHeader unselecter
        3: '#B0ADCC', // Auth placeholders
    },
    red: '#AB2134', // Buttons, icons
    borderStatusColors: {
        darks: {
            1: '#B22222', // gotRejected
            2: '#DAA520', // iRejected
            3: '#6B8E23', // gotAccepted
        },
        lights: {
            1: '#DC143C', // gotRejected
            2: '#FFD700', // iRejected
            3: '#2E8B57', // gotAccepted
        }
    }
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
    title: 'auth/title',
    placeholder: 'auth/placeholder',
    regularText: 'auth/regularText',
    inputText: 'auth/inputText',
    button: 'auth/button',
    buttonText: 'auth/buttonText',
    inputBackground: 'auth/inputBackground',
    inputBorder: 'auth/inputBorder',
    appName: 'auth/appName',
};

const error = {
    background: 'error/background',
    title: 'error/title',
    cancelIcon: 'error/cancelIcon',
    border: 'error/border',
    regularText: 'error/regularText',
    touchableText: 'error/touchableText',
}

const home = {
    background: 'home/backgorund',
    applicationItemBorder: 'home/applicationItemBorder',
    gotRejectedBorder: 'home/gotRejectedBorder',
    iRejectedBorder: 'home/iRejectedBorder',
    gotAcceptedBorder: 'home/gotAcceptedBorder',
    companyName: 'home/companyName',
    date: 'home/date',
    position: 'home/position',
    addIcon: 'home/addIcon',
};

const addApplication = {
    background: 'addApplication/background',
    inputBorder: 'addApplication/inputBorder',
    placeholder: 'addApplication/placeholder',
    regularText: 'addApplication/regularText',
    button: 'addApplication/button',
    buttonText: 'addApplication/buttonText',
};

const editApplication = {
    background: 'editApplication/background',
    inputBorder: 'editApplication/inputBorder',
    regularText: 'editApplication/regularText',
    placeholder: 'editApplication/placeholder',
    linkIcon: 'editApplication/linkIcon',
    titleText: 'editApplication/titleText',
    addInterviewButton: 'editApplication/addInterviewButon',
    addInterviewBorder: 'editApplication/addInterviewBorder',
    addInterviewText: 'editApplication/addInterviewText',
    checkbox: 'editApplication/checkbox',
    button: 'editApplication/button',
    buttonText: 'editApplication/buttonText',
};

const addInterview = {
    background: 'addInterview/background',
    border: 'addInterview/border',
    placeholder: 'addInterview/placeholder',
    regularText: 'addInterview/regularText',
    addInterviewButton: 'addInterview/addInterviewButon',
    addInterviewBorder: 'addInterview/addInterviewBorder',
    addInterviewText: 'addInterview/addInterviewText',
};

const conclusionModal = {
    background: 'conclusionModal/background',
    title: 'conclusionModal/title',
    borders: 'conclusionModal/borders',
    extraPaleText: 'conclusionModal/extraPaleText', // unselected picker option
    regularText: 'conclusionModal/regularText',
    placeholder: 'conclusionModal/placeholder',
    disabledButton: 'conclusionModal/disabledButton',
    enabledButton: 'conclusionModal/enabledButton',
    buttonText: 'conclusionModal/buttonText',
};

const drawerMenu = {
    background: 'drawerMenu/backgorund',
    appNameText: 'drawerMenu/appNameText',
};

const filter = {
    background: 'filter/background',
    title: 'filter/title',
    regularText: 'filter/regularText',
    icon: 'filter/icon',
};

const settings = {
    background: 'settings/background',
    radioButtonUnselectedIcon: 'settings/radioButtonUnselectedIcon',
    radioButtonSelectedIcon: 'settings/radioButtonSelectedIcon',
    titleText: 'settings/titleText',
    signOutButtonBackground: 'settings/signOutButtonBackground',
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
    error,
    home,
    addApplication,
    editApplication,
    addInterview,
    conclusionModal,
    drawerMenu,
    filter,
    settings,
    header,
};

export const darkColors = {
    // auth
    [auth.background]: constantColors.purples[2],
    [auth.title]: constantColors.oranges[2],
    [auth.placeholder]: constantColors.greys[3],
    [auth.regularText]: constantColors.purples[3],
    [auth.inputText]: constantColors.purples[2],
    [auth.button]: constantColors.red,
    [auth.buttonText]: constantColors.oranges[1],
    [auth.inputBackground]: constantColors.oranges[1],
    [auth.inputBorder]: constantColors.purples[2],
    [auth.appName]: constantColors.red,

    // error
    [error.background]: constantColors.purples[1],
    [error.title]: constantColors.red,
    [error.cancelIcon]: constantColors.red,
    [error.border]: constantColors.purples[2],
    [error.regularText]: constantColors.purples[1],
    [error.touchableText]: constantColors.red,

    // home
    [home.background]: constantColors.purples[1],
    [home.applicationItemBorder]: constantColors.purples[2],
    [home.gotRejectedBorder]: constantColors.borderStatusColors.darks[1],
    [home.iRejectedBorder]: constantColors.borderStatusColors.darks[2],
    [home.gotAcceptedBorder]: constantColors.borderStatusColors.darks[3],
    [home.companyName]: constantColors.oranges[1],
    [home.date]: constantColors.greys[1],
    [home.position]: constantColors.oranges[1],
    [home.addIcon]: constantColors.red,

    // addApplication
    [addApplication.background]: constantColors.purples[1],
    [addApplication.inputBorder]: constantColors.purples[2],
    [addApplication.placeholder]: constantColors.greys[3],
    [addApplication.regularText]: constantColors.white,
    [addApplication.button]: constantColors.red,
    [addApplication.buttonText]: constantColors.oranges[1],

    // editApplication
    [editApplication.background]: constantColors.purples[1],
    [editApplication.inputBorder]: constantColors.purples[2],
    [editApplication.regularText]: constantColors.oranges[1],
    [editApplication.placeholder]: constantColors.greys[3],
    [editApplication.linkIcon]: constantColors.purples[2],
    [editApplication.titleText]: constantColors.red,
    [editApplication.addInterviewButton]: constantColors.transparent,
    [editApplication.addInterviewBorder]: constantColors.red,
    [editApplication.addInterviewText]: constantColors.oranges[1],
    [editApplication.checkbox]: constantColors.red,
    [editApplication.button]: constantColors.red,
    [editApplication.buttonText]: constantColors.oranges[1],

    // addInterview
    [addInterview.background]: constantColors.purples[1],
    [addInterview.border]: constantColors.purples[2],
    [addInterview.placeholder]: constantColors.greys[3],
    [addInterview.regularText]: constantColors.white,
    [addInterview.addInterviewButton]: constantColors.oranges[1],
    [addInterview.addInterviewBorder]: constantColors.oranges[2],
    [addInterview.addInterviewText]: constantColors.purples[1],

    // conclusionModal
    [conclusionModal.background]: constantColors.purples[1],
    [conclusionModal.title]: constantColors.red,
    [conclusionModal.borders]: constantColors.purples[2],
    [conclusionModal.extraPaleText]: constantColors.greys[2],
    [conclusionModal.regularText]: constantColors.white,
    [conclusionModal.placeholder]: constantColors.greys[3],
    [conclusionModal.disabledButton]: constantColors.greys[3],
    [conclusionModal.enabledButton]: constantColors.red,
    [conclusionModal.buttonText]: constantColors.oranges[1],

    // drawerMenu
    [drawerMenu.background]: constantColors.purples[1],
    [drawerMenu.appNameText]: constantColors.red,

    // filter
    [filter.background]: constantColors.purples[1],
    [filter.title]: constantColors.purples[2],
    [filter.regularText]: constantColors.white,
    [filter.icon]: constantColors.purples[2],

    // settings
    [settings.background]: constantColors.purples[1],
    [settings.radioButtonSelectedIcon]: constantColors.red,
    [settings.radioButtonUnselectedIcon]: constantColors.purples[2],
    [settings.titleText]: constantColors.red,
    [settings.signOutButtonBackground]: constantColors.red,
    [settings.signOutButtonText]: constantColors.oranges[1],

    // header
    [header.background]: constantColors.purples[2],
    [header.text]: constantColors.oranges[1],
    [header.backIcon]: constantColors.oranges[1],
    [header.rightIcon]: constantColors.oranges[1],
};

export const lightColors = {
    // auth
    [auth.background]: constantColors.oranges[2],
    [auth.title]: constantColors.purples[2],
    [auth.placeholder]: constantColors.greys[3],
    [auth.regularText]: constantColors.purples[3],
    [auth.inputText]: constantColors.purples[2],
    [auth.button]: constantColors.red,
    [auth.buttonText]: constantColors.oranges[1],
    [auth.inputBackground]: constantColors.oranges[1],
    [auth.inputBorder]: constantColors.oranges[2],
    [auth.appName]: constantColors.red,

    // error
    [error.background]: constantColors.oranges[1],
    [error.title]: constantColors.red,
    [error.cancelIcon]: constantColors.red,
    [error.border]: constantColors.oranges[2],
    [error.regularText]: constantColors.purples[2],
    [error.touchableText]: constantColors.red,

    // home
    [home.background]: constantColors.oranges[1],
    [home.applicationItemBorder]: constantColors.oranges[2],
    [home.gotRejectedBorder]: constantColors.borderStatusColors.lights[1],
    [home.iRejectedBorder]: constantColors.borderStatusColors.lights[2],
    [home.gotAcceptedBorder]: constantColors.borderStatusColors.lights[3],
    [home.companyName]: constantColors.purples[2],
    [home.date]: constantColors.purples[3],
    [home.position]: constantColors.purples[2],
    [home.addIcon]: constantColors.red,

    // addApplication
    [addApplication.background]: constantColors.oranges[1],
    [addApplication.inputBorder]: constantColors.oranges[2],
    [addApplication.placeholder]: constantColors.greys[3],
    [addApplication.regularText]: constantColors.purples[2],
    [addApplication.button]: constantColors.red,
    [addApplication.buttonText]: constantColors.oranges[1],

    // editApplication
    [editApplication.background]: constantColors.oranges[1],
    [editApplication.inputBorder]: constantColors.oranges[2],
    [editApplication.regularText]: constantColors.purples[2],
    [editApplication.placeholder]: constantColors.greys[3],
    [editApplication.linkIcon]: constantColors.oranges[2],
    [editApplication.titleText]: constantColors.red,
    [editApplication.addInterviewButton]: constantColors.purples[1],
    [editApplication.addInterviewBorder]: constantColors.purples[2],
    [editApplication.addInterviewText]: constantColors.oranges[1],
    [editApplication.checkbox]: constantColors.oranges[2],
    [editApplication.button]: constantColors.red,
    [editApplication.buttonText]: constantColors.oranges[1],

    // addInterview
    [addInterview.background]: constantColors.oranges[1],
    [addInterview.border]: constantColors.oranges[2],
    [addInterview.placeholder]: constantColors.greys[3],
    [addInterview.regularText]: constantColors.purples[2],
    [addInterview.addInterviewButton]: constantColors.purples[1],
    [addInterview.addInterviewBorder]: constantColors.purples[2],
    [addInterview.addInterviewText]: constantColors.oranges[1],

    // conclusionModal
    [conclusionModal.background]: constantColors.oranges[1],
    [conclusionModal.title]: constantColors.red,
    [conclusionModal.borders]: constantColors.purples[2],
    [conclusionModal.extraPaleText]: constantColors.greys[1],
    [conclusionModal.regularText]: constantColors.purples[2],
    [conclusionModal.placeholder]: constantColors.greys[3],
    [conclusionModal.disabledButton]: constantColors.greys[3],
    [conclusionModal.enabledButton]: constantColors.red,
    [conclusionModal.buttonText]: constantColors.oranges[1],

    // drawerMenu
    [drawerMenu.background]: constantColors.oranges[1],
    [drawerMenu.appNameText]: constantColors.red,

    // filter
    [filter.background]: constantColors.oranges[1],
    [filter.title]: constantColors.oranges[2],
    [filter.regularText]: constantColors.purples[2],
    [filter.icon]: constantColors.oranges[2],

    // settings
    [settings.background]: constantColors.oranges[1],
    [settings.radioButtonSelectedIcon]: constantColors.red,
    [settings.radioButtonUnselectedIcon]: constantColors.oranges[2],
    [settings.titleText]: constantColors.red,
    [settings.signOutButtonBackground]: constantColors.red,
    [settings.signOutButtonText]: constantColors.oranges[1],

    // header
    [header.background]: constantColors.oranges[2],
    [header.text]: constantColors.oranges[1],
    [header.backIcon]: constantColors.oranges[1],
    [header.rightIcon]: constantColors.oranges[1],
};