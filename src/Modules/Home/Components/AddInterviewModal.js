import React from 'react';
import { Text, TextInput, View, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';

import BorderedBox from '../../../Components/BorderedBox';
import DatePicker from '../../../Components/DatePicker';
import { tn, useLocalization } from '../../Localization';

import { useThemedValues } from '../../Theming';

import getStyles from '../Styles/AddInterviewModalStyles';

const AddInterviewModal = props => {

    const { styles, colors } = useThemedValues(getStyles);

    const loc = useLocalization();

    return (

        <Modal
            style={styles.modal}
            isVisible={props.isVisible}
            onBackButtonPress={props.closeModal}
            onBackdropPress={props.closeModal}
        >
            <View style={styles.modalContentContainer}>
                <BorderedBox style={styles.inputContainer}>
                    <TextInput placeholder={loc.t(tn.interviewType)} />
                </BorderedBox>
                <BorderedBox style={styles.inputContainer}>
                    <DatePicker />
                </BorderedBox>
                <BorderedBox style={styles.inputContainer}>
                    <TextInput placeholder={loc.t(tn.interviewDetail)} multiline/>
                </BorderedBox>
                <TouchableOpacity style={styles.addButton}>
                    <Text style={styles.addButtonText}>{loc.t(tn.addInterview)}</Text>
                </TouchableOpacity>
            </View>
        </Modal >

    );
};

export default AddInterviewModal;
