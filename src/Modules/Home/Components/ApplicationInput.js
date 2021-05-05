import React, { useState } from 'react';
import { TouchableOpacity, TextInput, View } from 'react-native';

import { useThemedValues } from '../../Theming';
import DatePicker from '../../../Components/DatePicker';

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
                    <TextInput
                        placeholder={props.placeholder}
                        defaultValue={props.defaultValue}
                        multiline
                    />
            }
        </View>
    );
};

export default ApplicationInput;
