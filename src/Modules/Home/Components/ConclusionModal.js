import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import Modal from 'react-native-modal';
import { tn, useLocalization } from '../../Localization';

import { useThemedValues } from '../../Theming';

import getStyles from '../Styles/ConclusionModalStyles';

const ConclusionModal = props => {

    const {styles} = useThemedValues(getStyles);
    const loc = useLocalization();

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
                    <Text>Conclusion type: </Text>
                    <Text>Picker will be added here</Text>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Conclusion details will be here"
                    />
                </View>
            </View>
        </Modal>
    );
};


export default ConclusionModal;
