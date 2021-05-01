import React from 'react';
import { TextInput, View } from 'react-native';
import { useThemedValues } from '../../Theming';

import getStyles from '../Styles/AddApplicationInputStyles';

const AddApplicationInput = props => {

    console.log("props: ", props)

    const stylingParams = {
        borderColor,
        isNoteInput,
    } = props;

    const { styles, colors } = useThemedValues(getStyles, stylingParams);

    return (
        <View style={styles.inputContainer}>
            <TextInput
                placeholder={props.placeholder}
            />
        </View>
    );
};

export default AddApplicationInput;
