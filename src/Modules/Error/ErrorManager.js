import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-native-modal';

import Icon from '../../Components/Icon';
import { ErrorActionCreators, ErrorSelectors } from './ErrorRedux';
import { useLocalization, tn } from '../Localization';
import { useThemedValues } from '../Theming';

import getStyles from './Styles/ErrorManagerStyles';
import { Svgs } from '../../StylingConstants';

const ErrorManager = props => {

    const { styles } = useThemedValues(getStyles);

    const loc = useLocalization();
    const dispatch = useDispatch();

    const errorExists = useSelector(ErrorSelectors.errorExists);
    const errorCode = useSelector(ErrorSelectors.errorCode);

    const errorMessage = loc.t(tn.errorCodes[errorCode]);

    const _onPress_DismissError = () => {
        dispatch(ErrorActionCreators.setErrorExists(false, errorCode));
    };

    const upperCaseHeaderText = loc.t(tn.error).toLocaleUpperCase();
    const okayText = loc.t(tn.okay).toLocaleUpperCase();
    return (
        <Modal
        style={styles.modal}
        isVisible={errorExists}
        swipeDirection={['left', 'right']}
        onSwipeComplete={() => _onPress_DismissError()}
        animationIn="wobble"
        animationInTiming={1000}
        animationOut="zoomOutUp"
        animationOutTiming={800}>
            <View style={styles.modalContentContainer}>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>{upperCaseHeaderText}</Text>
                <TouchableOpacity style={styles.iconContainer} onPress={_onPress_DismissError}>
                    <Icon svg={Svgs.Close} iconStyle={styles.icon}/>
                </TouchableOpacity>
                </View>
                <View style={styles.errorTextContainer}>
                <Text style={styles.errorText}>{errorMessage}</Text>
                </View>
                <TouchableOpacity style={styles.button} onPress={_onPress_DismissError}>
                    <Text style={styles.buttonText}>{okayText}</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );
};

export default ErrorManager;
