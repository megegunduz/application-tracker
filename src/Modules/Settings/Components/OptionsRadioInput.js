import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from '../../../Components/Icon';
import { Svgs } from '../../../StylingConstants';
import { cn, useThemedValues } from '../../Theming';

import getStyles from '../Styles/OptionsRadioInputStyles'

const OptionsRadioInput = props => {

    const { styles, colors } = useThemedValues(getStyles);

    const _renderOptions = () => {

        return props.options.map((option, index) => {

            const isChecked = option.key === props.selectedOptionKey;
            const svg = isChecked ? Svgs.RadioChecked : Svgs.RadioUnchecked;
            const iconStyle = {
                color: isChecked ? colors[cn.settings.radioButtonSelectedIcon]
                    : colors[cn.settings.radioButtonUnselectedIcon],
            };

            return (
                <TouchableOpacity key={option.key}
                    style={styles.optionTouchable}
                    onPress={() => props.onPress(option.key)}
                    >
                    <View style={styles.iconContainer}>
                        <Icon iconStyle={iconStyle} svg={svg} />
                    </View>
                    <Text style={styles.optionTitleText}>{option.title}</Text>
                </TouchableOpacity>
            )
        })
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>{props.menuTitle}</Text>
            {_renderOptions()}
        </View>
    );
};

export default OptionsRadioInput;
