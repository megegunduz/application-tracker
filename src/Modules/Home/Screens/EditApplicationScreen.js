import React, { useState } from 'react';
import { ScrollView, View, Text, FlatList } from 'react-native';

import ApplicationInput from '../Components/ApplicationInput';
import CommonButton from '../../../Components/CommonButton';
import { cn, useThemedValues } from '../../Theming';
import { tn, useLocalization } from '../../Localization';
import AddInterviewModal from '../Components/AddInterviewModal';

import getStyles from '../Styles/EditApplicationScreenStyles';
import { TouchableOpacity } from 'react-native-gesture-handler';


const EditApplicationScreen = props => {

    const { applicationItem } = props.route.params;

    const[addModalVisible, setAddModalVisible] = useState(false);

    const { styles, colors } = useThemedValues(getStyles);

    const loc = useLocalization();

    const upperCaseButtonText = loc.t(tn.save).toLocaleUpperCase();

    const dummyInterviews = [
        {
            id: 1,
            type: "Telefon görüşmesi",
            date: "04.05.2021",
        },
        {
            id: 2,
            type: "Yüzyüze görüşme",
            date: "02.02.2020"
        },
        {
            id: 3,
            type: "Zoom meeting",
            date: "20.20.2016"
        },
        {
            id: 4,
            type: "çok uzun satır çok uzun satır çok uzun satır çok uzun satır çok uzun satır çok uzun satır çok uzun satır çok uzun satır çok uzun satır çok uzun satır",
            date: "01.01.2000",
        }
    ]

    const _renderInterviewItem = () => {
        let interviews = dummyInterviews.map((interview, index) => {
            return (
                <View key={index} style={styles.interviewItem}>
                    <Text style={styles.interviewText} numberOfLines={1}>{interview.type}</Text>
                    <Text style={styles.dateText}>{interview.date}</Text>
                </View>
            );
        })
        return interviews;
    };

    const _onPress_OpenModal = () => {
        setAddModalVisible(true);
    };

    const _closeModal = () => {
        setAddModalVisible(false);
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
                    defaultValue={applicationItem.URL}
                />
                <ApplicationInput
                    placeholder={loc.t(tn.note)}
                    borderColor={colors[cn.home.applicationItemBorder]}
                    defaultValue={applicationItem.note}
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
                        <TouchableOpacity style={styles.addButton}  onPress={_onPress_OpenModal}>
                            <Text style={styles.addButtonText}>{loc.t(tn.addInterview)}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>

            <View style={styles.buttonContainer}>
                <CommonButton text={upperCaseButtonText} />
            </View>
        </View>
        <AddInterviewModal isVisible={addModalVisible} closeModal={_closeModal}/>
        </>
    );
};

export default EditApplicationScreen;