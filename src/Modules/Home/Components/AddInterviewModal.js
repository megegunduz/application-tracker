import React, { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';

import BorderedBox from '../../../Components/BorderedBox';
import DatePicker from '../../../Components/DatePicker';
import { tn, useLocalization } from '../../Localization';

import { useThemedValues } from '../../Theming';
import { addInterview } from '../API/Firebase';

import getStyles from '../Styles/AddInterviewModalStyles';

const AddInterviewModal = props => {

    const [date, setDate] = useState(null);
    const [title, setTitle] = useState();
    const [details, setDetails] = useState(null);

    const { applicationItem } = props;

    const { styles, colors } = useThemedValues(getStyles);

    const loc = useLocalization();

    const getDate = (dateFromPicker) => {
        setDate(dateFromPicker);
    }

    const _onPress_AddInterview = () => {
        const interview = {
            title: title,
            date: date,
            details: details,
        };

        const onComplete = () => {
            props.closeModal();
        }

        addInterview(applicationItem, interview, onComplete);
    }

    console.log(applicationItem.key)

    return (

        <Modal
            style={styles.modal}
            isVisible={props.isVisible}
            onBackButtonPress={props.closeModal}
            onBackdropPress={props.closeModal}
        >
            <View style={styles.modalContentContainer}>
                <BorderedBox style={styles.inputContainer}>
                    <TextInput
                        placeholder={loc.t(tn.interviewType)}
                        onChangeText={setTitle}/>
                </BorderedBox>
                <BorderedBox style={styles.inputContainer}>
                    <DatePicker transferPickedDate={getDate}/>
                </BorderedBox>
                <BorderedBox style={styles.inputContainer}>
                    <TextInput
                        placeholder={loc.t(tn.interviewDetail)}
                        multiline
                        onChangeText={setDetails}/>
                </BorderedBox>
                <TouchableOpacity style={styles.addButton} onPress={_onPress_AddInterview}>
                    <Text style={styles.addButtonText}>{loc.t(tn.addInterview)}</Text>
                </TouchableOpacity>
            </View>
        </Modal >

    );
};

export default AddInterviewModal;
