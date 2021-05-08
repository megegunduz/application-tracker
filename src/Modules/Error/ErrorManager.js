import React from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import Modal from 'react-native-modal';

import { ErrorSelectors } from './ErrorRedux';


const ErrorManager = props => {

    const errorExists = useSelector(ErrorSelectors.errorExists);
    const errorMessage = useSelector(ErrorSelectors.errorMessage);
    return (
        <Modal
        isVisible={errorExists}>
            <View>
                <Text>{errorMessage}</Text>
            </View>

        </Modal>
    );
};

export default ErrorManager;
