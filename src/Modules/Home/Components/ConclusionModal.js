import React, { useState } from 'react';
import { Keyboard, Text, TextInput, View } from 'react-native';
import Modal from 'react-native-modal';
import { Picker } from '@react-native-picker/picker';

import { cn, useThemedValues } from '../../Theming';
import { tn, useLocalization } from '../../Localization';
import CommonButton from '../../../Components/CommonButton';

import getStyles from '../Styles/ConclusionModalStyles';

const ConclusionModal = props => {

    const [conclusionType, setConclusionType] = useState(null);
    const [conclusionDetail, setConclusionDetail] = useState();

    let conclusion = conclusionType ?
    {
        conclusionType,
        conclusionDetail,
    }
    :
    null;

    const buttonDisabled = conclusion ? false : true;
    const {styles, colors} = useThemedValues(getStyles, buttonDisabled);
    const loc = useLocalization(null);
    
    const _onPress = () => {
        props.transferConclusion(conclusion);
        setConclusionDetail(null);
        setConclusionType(null);
    }

    return (
        <Modal
            style={styles.modal}
            isVisible={props.isVisible}
            onBackdropPress={props.closeModal}
            onBackButtonPress={props.closeModal}
        >
            <View style={styles.modalContentContainer}>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>{loc.t(tn.conclusion)}</Text>
                </View>
                <View style={styles.pickerContainer}>
                    <Picker mode="dropdown" onValueChange={setConclusionType}>
                        <Picker.Item label="Select conclusion" value={null} style={styles.pickerPlaceholder} />
                        <Picker.Item label="Got Rejected" value="gotRejected" style={styles.pickerItem} />
                        <Picker.Item label="I Rejected" value="iRejected" style={styles.pickerItem} />
                        <Picker.Item label="Got Accepted" value="gotAccepted" style={styles.pickerItem} />
                    </Picker>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholderTextColor={colors[cn.conclusionModal.placeholder]}
                        placeholder="Conclusion details will be here"
                        multiline
                        onSubmitEditing={Keyboard.dismiss}
                        onChangeText={setConclusionDetail}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <CommonButton text="Tamam" style={styles.button} buttonTextStyle={styles.buttonText} onPress={_onPress} disabled={buttonDisabled}/>
                </View>
            </View>
        </Modal>
    );
};


export default ConclusionModal;
