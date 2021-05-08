import React from 'react';
import Modal from 'react-native-modal';
import { Text, View } from 'react-native';

import BorderedBox from '../../../Components/BorderedBox';
import { useThemedValues } from '../../Theming';
import { tn, useLocale, useLocalization } from '../../Localization';
import CommonButton from '../../../Components/CommonButton';
import { deleteInterview } from '../API/Firebase';
import { customUpperCase } from '../../../Utils/CustomUpperCase';

import getStyles from '../Styles/InterviewDetailsModalStyles';

const InterviewDetailModal = props => {

    const { styles } = useThemedValues(getStyles);
    const loc = useLocalization();
    const locale = useLocale();

    const {interview, appItemKey} = props;
    const interviewKey = interview.key;

    const _onPress_DeleteInterview = () => {
        deleteInterview(appItemKey, interviewKey, props.closeModal)
    }

    const deleteButtonText = customUpperCase(loc.t(tn.delete), locale)

    return (
        <Modal
            isVisible={props.isVisible}
            onBackdropPress={props.closeModal}
            onBackButtonPress={props.closeModal}
        >
            <View style={styles.modalContentContainer}>
                <Text style={styles.sectionTitle}>{loc.t(tn.interviewTitle)}</Text>
                <BorderedBox>
                    <Text style={styles.text} numberOfLines={1}>{interview.title}</Text>
                </BorderedBox>
                <Text style={styles.sectionTitle}>{loc.t(tn.applicationDate)}</Text>
                <BorderedBox>
                    <Text style={styles.text} numberOfLines={1}>{interview.date}</Text>
                </BorderedBox>
                <Text style={styles.sectionTitle}>{loc.t(tn.interviewDetail)}</Text>
                <BorderedBox style={styles.detailsBox}>
                    <Text style={styles.text}>{interview.details}</Text>
                </BorderedBox>
                <CommonButton style={styles.deleteButton} text={deleteButtonText} onPress={_onPress_DeleteInterview}/>
            </View>
        </Modal>
    );
};

export default InterviewDetailModal;
