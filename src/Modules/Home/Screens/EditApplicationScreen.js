import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, Linking } from 'react-native';

import ApplicationInput from '../Components/ApplicationInput';
import CommonButton from '../../../Components/CommonButton';
import { cn, useThemedValues } from '../../Theming';
import { tn, useLocalization } from '../../Localization';
import AddInterviewModal from '../Components/AddInterviewModal';
import InterviewDetailModal from '../Components/InterviewDetailModal';

import getStyles from '../Styles/EditApplicationScreenStyles';
import { getAppItemDetail } from '../API/Firebase';

const dummyInterviews = [
    {
        id: 1,
        type: "Telefon görüşmesi",
        date: "04.05.2021",
        details: "detay detay detay",
    },
    {
        id: 2,
        type: "Yüzyüze görüşme",
        date: "02.02.2020",
        details: "detay detay detay",
    },
    {
        id: 3,
        type: "Zoom meeting",
        date: "20.20.2016",
        details: "detay detay detay",
    },
    {
        id: 4,
        type: "çok uzun satır çok uzun satır çok uzun satır çok uzun satır çok uzun satır çok uzun satır çok uzun satır çok uzun satır çok uzun satır çok uzun satır",
        date: "01.01.2000",
        details: "detay detay detay",
    }
]

const EditApplicationScreen = props => {

    const { applicationItem } = props.route.params;
    const appItemKey = props.route.params.appItemKey;
    const [addModalVisible, setAddModalVisible] = useState(false);
    const [detailModalVisible, setDetailModalVisible] = useState(false);
    const [selectedInterview, setSelectedInterview] = useState({});
    const [URL, setURL] = useState(null);
    const [note, setNote] = useState(null);

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
        let interviews = dummyInterviews.map((interview, index) => {
            return (
                <TouchableOpacity key={index} style={styles.interviewItem} interview={interview} onPress={() => _onPress_OpenDetailsModal(interview)}>
                    <Text style={styles.interviewText} numberOfLines={1}>{interview.type}</Text>
                    <Text style={styles.dateText}>{interview.date}</Text>
                </TouchableOpacity>
            );
        })
        return interviews;
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

    const getURL = (URLfromInput) => {
        setURL(URLfromInput);
    }

    const _OpenURL = async () => {
        const url = applicationItem.URL;
        const supported = await Linking.canOpenURL(url);

        if (supported) {
            await Linking.openURL(url);
        }
        else {
            alert(`Can't open: ${url}`)
        }
    }

    return (
        <>
        <View style={styles.container}>
            <ScrollView>
                <ApplicationInput
                    placeholder={loc.t(tn.companyName)}
                    borderColor={colors[cn.home.applicationItemBorder]}
                    defaultValue={applicationItem.companyName}
                />
                <ApplicationInput
                    placeholder={loc.t(tn.position)}
                    borderColor={colors[cn.home.applicationItemBorder]}
                    defaultValue={applicationItem.position}
                />
                <ApplicationInput
                    placeholder={loc.t(tn.applicationDate)}
                    borderColor={colors[cn.home.applicationItemBorder]}
                    defaultValue={applicationItem.applicationDate}
                />
                <ApplicationInput
                    placeholder={loc.t(tn.url)}
                    borderColor={colors[cn.home.applicationItemBorder]}
                    defaultValue={URL}
                    numberOfLines={1}
                    isURL={true}
                    onChangeText={getURL}
                    openURL={_OpenURL}
                />
                <ApplicationInput
                    placeholder={loc.t(tn.note)}
                    borderColor={colors[cn.home.applicationItemBorder]}
                    defaultValue={note}
                    isNoteInput={true}
                />
                <View>
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerText}>{loc.t(tn.interviews)}</Text>
                    </View>
                    <View style={styles.interviewsContainer}>
                        {_renderInterviewItem()}
                    </View>
                    <View style={styles.addButtonContainer}>
                        <TouchableOpacity style={styles.addButton}  onPress={_onPress_OpenAddModal}>
                            <Text style={styles.addButtonText}>{loc.t(tn.addInterview)}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>

            <View style={styles.buttonContainer}>
                <CommonButton text={upperCaseButtonText} />
            </View>
        </View>
        <AddInterviewModal isVisible={addModalVisible} closeModal={_closeAddModal}/>
        <InterviewDetailModal isVisible={detailModalVisible} closeModal={_onPress_CloseDetailsModal} interview={selectedInterview}/>
        </>
    );
};

export default EditApplicationScreen;