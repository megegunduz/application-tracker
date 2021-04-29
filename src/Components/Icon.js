import React from 'react';
import { Text } from 'react-native';

const Icon = props => {

    const Svg = props.svg;

    return (
        <Svg width='100%' height='100%' style={props.iconStyle} />
    );
};

export default Icon;
