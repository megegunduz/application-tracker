import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, Linking } from 'react-native';
import { useDispatch } from 'react-redux';
import moment from 'moment';

import ApplicationInput from '../Components/ApplicationInput';
import CommonButton from '../../../Components/CommonButton';
import { cn, useThemedValues } from '../../Theming';
import { tn, useLocale, useLocalization } from '../../Localization';
import AddInterviewModal from '../Components/AddInterviewModal';
import InterviewDetailModal from '../Components/InterviewDetailModal';
import { getAppItemDetail, subscribeToInterviews, updateAppItem } from '../API/Firebase';
import { ErrorActionCreators } from '../../Error/ErrorRedux';
import ConcludedCheck from '../Components/ConcludedCheck';

import getStyles from '../Styles/EditApplicationScreenStyles';
import ConclusionModal from '../Components/ConclusionModal';


const EditApplicationScreen = props => {

    const { applicationItem } = props.route.params;
    const appItemKey = props.route.params.appItemKey;
    const [addModalVisible, setAddModalVisible] = useState(false);
    const [detailModalVisible, setDetailModalVisible] = useState(false);
    const [conclusionModalVisible, setConclusionModalVisible] = useState(false);
    const [selectedInterview, setSelectedInterview] = useState({});
    const [companyName, setCompanyName] = useState(applicationItem.companyName);
    const [position, setPosition] = useState(applicationItem.position);
    const [applicationDate, setApplicationDate] = useState(applicationItem.applicationDate);
    const [URL, setURL] = useState(null);
    const [note, setNote] = useState(null);
    const [interviews, setInterviews] = useState(null);
    const [isConcluded, setIsConcluded] = useState(applicationItem.isConcluded);
    const [conclusion, setConclusion] = useState(applicationItem.conclusion);

    const dispatch = useDispatch();
    const invalidUrlErrorCode = tn.errorCodes['custom/invalid-url'];

    const locale = useLocale();

    useEffect(() => {
        const off = subscribeToInterviews(locale, applicationItem, data => {
            setInterviews(data);
        })

        return () => {
            off();
        }
    }, [])

    useEffect(() => {
        getAppItemDetail(appItemKey, appItem => {
            setURL(appItem.URL);
            setNote(appItem.note);
        })
    }, [])

    const { styles, colors } = useThemedValues(getStyles);

    const loc = useLocalization();

    const upperCaseButtonText = loc.t(tn.save).toLocaleUpperCase();

    const _renderInterviewItem = () => {
        let interviewss = interviews?.map((interview, index) => {
            return (
                <TouchableOpacity key={index} style={styles.interviewItem} interview={interview} onPress={() => _onPress_OpenDetailsModal(interview)}>
                    <Text style={styles.interviewText} numberOfLines={1}>{interview.title}</Text>
                    <Text style={styles.dateText}>{interview.date}</Text>
                </TouchableOpacity>
            );
        })
        return interviewss;
    };

    const getDate = (dateFromDatePicker) => {
        setApplicationDate(dateFromDatePicker);
    };

    const _onPress_OpenAddModal = () => {
        setAddModalVisible(true);
    };

    const _closeAddModal = () => {
        setAddModalVisible(false);
    };

    const _onPress_OpenDetailsModal = (interview) => {
        setDetailModalVisible(true);
        setSelectedInterview(interview);
    }

    const _onPress_CloseDetailsModal = () => {
        setDetailModalVisible(false);
        setSelectedInterview({});
    }

    const _OpenURL = async () => {
        const url = URL;
        const supported = await Linking.canOpenURL(url);

        if (supported) {
            await Linking.openURL(url);
        }
        else {
            dispatch(ErrorActionCreators.setErrorExists(true, invalidUrlErrorCode))
        }
    }

    const _onPress_Save = () => {
        let incomingDateFormat = locale === "tr" ? 'DD/MM/YYYY' : 'MM/DD/YYYY';
        let dateToSendToDB = moment(applicationDate, incomingDateFormat).format('MM/DD/YYYY')
        const appItem = {
            key: appItemKey,
            companyName: companyName,
            position: position,
            applicationDate: dateToSendToDB,
            URL: URL,
            note: note,
            isConcluded: isConcluded,
            conclusion: conclusion,
        }

        const onComplete = () => {
            props.navigation.goBack();
        }


        updateAppItem(appItem, onComplete);

    }

    const _onSelect_Concluded = () => {
        if (!isConcluded) {
            setConclusionModalVisible(true);
        }
        else if (isConcluded) {
            setIsConcluded(false);
            setConclusion(null)
        }
    }

    const _getConclusionAndClose = conclusion => {
        if (conclusion) {
            setConclusion(conclusion);
            setIsConcluded(true);
        }
        setConclusionModalVisible(false);
    }

    return (
        <>
            <View style={styles.container}>
                <ScrollView>
                    <ApplicationInput
                        placeholder={loc.t(tn.companyName)}
                        borderColor={colors[cn.editApplication.inputBorder]}
                        defaultValue={companyName}
                        onChangeText={setCompanyName}
                    />
                    <ApplicationInput
                        placeholder={loc.t(tn.position)}
                        borderColor={colors[cn.editApplication.inputBorder]}
                        defaultValue={position}
                        onChangeText={setPosition}
                    />
                    <ApplicationInput
                        placeholder={loc.t(tn.applicationDate)}
                        borderColor={colors[cn.editApplication.inputBorder]}
                        defaultValue={applicationDate}
                        isDateInput={true}
                        transferPickedDate={getDate}
                    />
                    <ApplicationInput
                        placeholder={loc.t(tn.url)}
                        borderColor={colors[cn.editApplication.inputBorder]}
                        defaultValue={URL}
                        numberOfLines={1}
                        isURL={true}
                        onChangeText={setURL}
                        openURL={_OpenURL}
                    />
                    <ApplicationInput
                        placeholder={loc.t(tn.note)}
                        borderColor={colors[cn.editApplication.inputBorder]}
                        defaultValue={note}
                        isNoteInput={true}
                        onChangeText={setNote}
                    />
                    <View>
                        <View style={styles.headerContainer}>
                            <Text style={styles.headerText}>{loc.t(tn.interviews)}</Text>
                        </View>
                        <View style={styles.interviewsContainer}>
                            {_renderInterviewItem()}
                        </View>
                        <View style={styles.addButtonContainer}>
                            <TouchableOpacity style={styles.addButton} onPress={_onPress_OpenAddModal}>
                                <Text style={styles.addButtonText}>{loc.t(tn.addInterview)}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.concludedContainer}>
                        <ConcludedCheck isConcluded={isConcluded} onSelect={_onSelect_Concluded} />
                        {
                            conclusion ?
                                <Text style={styles.conclusionText}>{conclusion.conclusionType + ": " + conclusion.conclusionDetail}</Text>
                                :
                                null
                        }
                    </View>
                </ScrollView>

                <View style={styles.buttonContainer}>
                    <CommonButton text={upperCaseButtonText} onPress={_onPress_Save} />
                </View>
            </View>
            <AddInterviewModal isVisible={addModalVisible} closeModal={_closeAddModal} applicationItem={applicationItem} />
            <InterviewDetailModal isVisible={detailModalVisible} closeModal={_onPress_CloseDetailsModal} interview={selectedInterview} appItemKey={applicationItem.key} />
            <ConclusionModal isVisible={conclusionModalVisible} transferConclusion={_getConclusionAndClose} closeModal={() => setConclusionModalVisible(false)} />
        </>
    );
};

export default EditApplicationScreen;