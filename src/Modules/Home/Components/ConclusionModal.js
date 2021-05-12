import React, { useState } from 'react';
import { Text, View } from 'react-native';
import Modal from 'react-native-modal';

import { useThemedValues } from '../../Theming';

import getStyles from '../Styles/ConclusionModalStyles';

const ConclusionModal = props => {

    const {styles} = useThemedValues(getStyles);

    return (
        <Modal
            style={styles.modal}
            isVisible={props.isVisible}
            onBackdropPress={props.closeModal}
        >
            <View style={styles.modalContentContainer}>
                <Text>SONUÇLANMIŞ</Text>
            </View>
        </Modal>
    );
};


export default ConclusionModal;
