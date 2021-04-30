import Metrics from './Metrics';

const type = {
    regular: 'Nunito-Regular',
    italic: 'Nunito-Italic',

    semiBold: 'Nunito-SemiBold',
    semiBoldItalic: 'Nunito-SemiBoldItalic',
    bold: 'Nunito-Bold',
    boldItalic: 'Nunito-BoldItalic',
    extraBold: 'Nunito-ExtraBold',
    extraBoldItalic: 'Nunito-ExtraBoldItalic',
    light: 'Nunito-Light',
    lightItalic: 'Nunito-LightItalic',
    extraLight: 'Nunito-ExtraLight',
    extraLightItalic: 'Nunito-ExtraLightItalic',
    black:'Nunito-Black',
    blackItalic: 'Nunito-BlackItalic',    
};

const step = Metrics.width * 0.0025;
const zero = Metrics.width * 0.002;

const size = punto => zero + step * punto;

export default {
    type,
    size,
};