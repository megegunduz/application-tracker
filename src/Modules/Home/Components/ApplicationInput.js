import React from 'react';
import { TextInput, View } from 'react-native';
import { useThemedValues } from '../../Theming';

import getStyles from '../Styles/ApplicationInputStyles';

const ApplicationInput = props => {


    const stylingParams = {
        borderColor,
        isNoteInput,
    } = props;

    const { styles, colors } = useThemedValues(getStyles, stylingParams);

    return (
        <View style={styles.inputContainer}>
            <TextInput
                placeholder={props.placeholder}
                defaultValue={props.defaultValue}
                multiline
            />
        </View>
    );
};

export default ApplicationInput;
