import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-native-modal';

import { ErrorActionCreators, ErrorSelectors } from './ErrorRedux';
import { useLocalization, tn } from '../Localization';


const ErrorManager = props => {

    const loc = useLocalization();
    const dispatch = useDispatch();

    const errorExists = useSelector(ErrorSelectors.errorExists);
    const errorCode = useSelector(ErrorSelectors.errorCode);

    const errorMessage = loc.t(tn.errorCodes[errorCode]);

    const _onPress_DismissError = () => {
        dispatch(ErrorActionCreators.setErrorExists(false, null));
    };

    return (
        <Modal
        isVisible={errorExists}>
            <View>
                <Text>{errorMessage}</Text>
                <TouchableOpacity onPress={_onPress_DismissError}>
                    <Text>TAMAM</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );
};

export default ErrorManager;
