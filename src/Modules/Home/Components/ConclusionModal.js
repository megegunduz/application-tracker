import React, { useState } from 'react';
import { Keyboard, Text, TextInput, View } from 'react-native';
import Modal from 'react-native-modal';
import { Picker } from '@react-native-picker/picker';

import { useThemedValues } from '../../Theming';
import { tn, useLocalization } from '../../Localization';
import CommonButton from '../../../Components/CommonButton';

import getStyles from '../Styles/ConclusionModalStyles';

const ConclusionModal = props => {

    const [conclusionType, setConclusionType] = useState();
    const [conclusionDetail, setConclusionDetail] = useState();

    const {styles} = useThemedValues(getStyles);
    const loc = useLocalization(null);

    let conclusion = conclusionType ?
    {
        conclusionType,
        conclusionDetail,
    }
    :
    null;

    return (
        <Modal
            style={styles.modal}
            isVisible={props.isVisible}
            onBackdropPress={props.closeModal}
        >
            <View style={styles.modalContentContainer}>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>{loc.t(tn.conclusion)}</Text>
                </View>
                <View style={styles.pickerContainer}>
                    <Picker mode="dropdown" onValueChange={setConclusionType}>
                        <Picker.Item label="Select conclusion" value={null} style={styles.pickerPlaceholder} />
                        <Picker.Item label="Got Rejected" value="gotRejected"/>
                        <Picker.Item label="I Rejected" value="iRejected" />
                        <Picker.Item label="Got Accepted" value="gotAccepted" />
                    </Picker>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Conclusion details will be here"
                        multiline
                        onSubmitEditing={Keyboard.dismiss}
                        onChangeText={setConclusionDetail}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <CommonButton text="Tamam" style={styles.button} onPress={()=>props.transferConclusion(conclusion)}/>
                </View>
            </View>
        </Modal>
    );
};


export default ConclusionModal;
