import React from 'react';
import Modal from 'react-native-modal';
import { Text, View } from 'react-native';

import BorderedBox from '../../../Components/BorderedBox';
import { useThemedValues } from '../../Theming';
import { tn, useLocalization } from '../../Localization';
import CommonButton from '../../../Components/CommonButton';

import getStyles from '../Styles/InterviewDetailsModalStyles';

const InterviewDetailModal = props => {

    const { styles } = useThemedValues(getStyles);
    const loc = useLocalization();

    const interview = props.interview;

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
                <CommonButton style={styles.deleteButton} text={"SİL"} />
            </View>
        </Modal>
    );
};

export default InterviewDetailModal;
