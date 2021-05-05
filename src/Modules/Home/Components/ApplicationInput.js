import React, { useState } from 'react';
import { TouchableOpacity, TextInput, View } from 'react-native';

import { useThemedValues } from '../../Theming';
import DatePicker from '../../../Components/DatePicker';
import Icon from '../../../Components/Icon';
import { Svgs } from '../../../StylingConstants';

import getStyles from '../Styles/ApplicationInputStyles';

const ApplicationInput = props => {


    const stylingParams = {
        borderColor,
        isNoteInput,
    } = props;

    const { styles, colors } = useThemedValues(getStyles, stylingParams);

    return (
        <View style={styles.inputContainer}>
            {
                props.isDateInput ?
                    <TouchableOpacity style={styles.datePickerContainer}>
                        <DatePicker transferPickedDate={props.transferPickedDate}/>
                    </TouchableOpacity>
                    :
                    <View style={styles.input}>
                    <TextInput
                        style={styles.textInput}
                        placeholder={props.placeholder}
                        defaultValue={props.defaultValue}
                        multiline={props.isURL ? false : true}
                        numberOfLines={props.numberOfLines}
                        onChangeText={props.onChangeText}
                    />
                    {
                        props.isURL ?
                        <TouchableOpacity style={styles.iconContainer} onPress={props.openURL}>
                            <Icon svg={Svgs.Url} iconStyle={styles.icon} />
                        </TouchableOpacity>
                        :
                        null
                    }
                    </View>
            }
        </View>
    );
};

export default ApplicationInput;
