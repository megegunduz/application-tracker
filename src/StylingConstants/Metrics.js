import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const Metrics = {
    width,
    height,
    marginHorizontal: width * 0.05,
    marginHorizontalLarge: width * 0.1,
    marginVertical: width * 0.05,
    borderRadiusCircle: 1000,
    borderRadiusStandard: 10,
    borderRadiusSmall: 5,
    textMargin: width * 0.03,
};

export default Metrics;