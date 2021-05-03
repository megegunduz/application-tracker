import React from 'react';
import { Text, View } from 'react-native';
import Modal from 'react-native-modal';

import { useThemedValues } from '../../Theming';

import getStyles from '../Styles/AddInterviewModalStyles';

const AddInterviewModal = props => {

    const { styles, colors } = useThemedValues(getStyles);


    
    return (

        <Modal
            style={styles.modal}
            isVisible={props.isVisible}
            onBackButtonPress={props.closeModal}
            onBackdropPress={props.closeModal}
        >
            <View style={styles.modalContentContainer}>
                <Text>Add interview modal</Text>
            </View>
        </Modal >

    );
};

export default AddInterviewModal;
