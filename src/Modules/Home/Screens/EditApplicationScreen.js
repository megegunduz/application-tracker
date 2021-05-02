import React from 'react';
import { ScrollView, View, Text, FlatList } from 'react-native';

import ApplicationInput from '../Components/ApplicationInput';
import CommonButton from '../../../Components/CommonButton';
import { cn, useThemedValues } from '../../Theming';
import { tn, useLocalization } from '../../Localization';

import getStyles from '../Styles/EditApplicationScreenStyles';
import { TouchableOpacity } from 'react-native-gesture-handler';


const EditApplicationScreen = props => {

    const { applicationItem } = props.route.params;

    const { styles, colors } = useThemedValues(getStyles);

    const loc = useLocalization();

    const upperCaseButtonText = loc.t(tn.save).toLocaleUpperCase();

    const dummyInterviews = [
        {
            id: 1,
            type: "Telefon görüşmesi"
        },
        {
            id: 2,
            type: "Yüzyüze görüşme"
        },
        {
            id: 3,
            type: "Zoom meeting"
        },
        {
            id: 4,
            type: "çok uzun satır çok uzun satır çok uzun satır çok uzun satır çok uzun satır çok uzun satır çok uzun satır çok uzun satır çok uzun satır çok uzun satır"
        }
    ]

    const _renderInterviewItem = () => {
        let interviews = dummyInterviews.map((interview, index) => {
            return (
                <View key={index} style={styles.interviewItem}>
                    <Text style={styles.interviewText}>{interview.type}</Text>
                </View>
            );
        })
        return interviews;
    }

    return (
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
                        <TouchableOpacity style={styles.addButton}>
                            <Text style={styles.addButtonText}>{loc.t(tn.addInterview)}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>

            <View style={styles.buttonContainer}>
                <CommonButton text={upperCaseButtonText} />
            </View>
        </View>
    );
};

export default EditApplicationScreen;