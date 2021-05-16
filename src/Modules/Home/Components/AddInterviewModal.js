import React, { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import moment from 'moment';

import BorderedBox from '../../../Components/BorderedBox';
import DatePicker from '../../../Components/DatePicker';
import { tn, useLocale, useLocalization } from '../../Localization';

import { cn, useThemedValues } from '../../Theming';
import { addInterview } from '../API/Firebase';

import getStyles from '../Styles/AddInterviewModalStyles';

const AddInterviewModal = props => {

    const [date, setDate] = useState(null);
    const [title, setTitle] = useState();
    const [details, setDetails] = useState(null);

    const { applicationItem } = props;

    const { styles, colors } = useThemedValues(getStyles);

    const loc = useLocalization();
    const locale = useLocale();

    const getDate = (dateFromPicker) => {
        setDate(dateFromPicker);
    }

    const _onPress_AddInterview = () => {
        let incomingDateFormat = locale === "tr" ? 'DD/MM/YYYY' : 'MM/DD/YYYY';
        let dateToSendToDB = moment(date, incomingDateFormat).format('MM/DD/YYYY');
        const interview = {
            title: title,
            date: dateToSendToDB,
            details: details,
        };

        const onComplete = () => {
            props.closeModal();
        }

        addInterview(applicationItem, interview, onComplete);
    }

    return (

        <Modal
            style={styles.modal}
            isVisible={props.isVisible}
            onBackButtonPress={props.closeModal}
            onBackdropPress={props.closeModal}
        >
            <View style={styles.modalContentContainer}>
                <View style={styles.headerContainer}>
                    <Text style={styles.header}>{loc.t(tn.addInterview)}</Text>
                </View>
                <BorderedBox style={styles.inputContainer}>
                    <TextInput
                        style={styles.textInput}
                        placeholder={loc.t(tn.interviewTitle)}
                        placeholderTextColor={colors[cn.addInterview.placeholder]}
                        onChangeText={setTitle} />
                </BorderedBox>
                <BorderedBox style={styles.inputContainer}>
                    <DatePicker transferPickedDate={getDate} />
                </BorderedBox>
                <BorderedBox style={styles.noteInputContainer}>
                    <TextInput
                        style={styles.textInput}
                        placeholder={loc.t(tn.interviewDetail)}
                        placeholderTextColor={colors[cn.addInterview.placeholder]}
                        multiline
                        onChangeText={setDetails} />
                </BorderedBox>
                <TouchableOpacity style={styles.saveButton} onPress={_onPress_AddInterview}>
                    <Text style={styles.saveButtonText}>{loc.t(tn.save)}</Text>
                </TouchableOpacity>
            </View>
        </Modal >

    );
};

export default AddInterviewModal;
