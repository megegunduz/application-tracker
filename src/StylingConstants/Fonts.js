import Metrics from './Metrics';

const type = {
    // Will be added
};

const step = Metrics.width * 0.0025;
const zero = Metrics.width * 0.002;

const size = punto => zero + step * punto;

export default {
    type,
    size,
};