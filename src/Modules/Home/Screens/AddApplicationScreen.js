import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import moment from 'moment';

import { tn, useLocale, useLocalization } from '../../Localization';
import { cn, useThemedValues } from '../../Theming';
import ApplicationInput from '../Components/ApplicationInput';
import CommonButton from '../../../Components/CommonButton';

import getStyles from '../Styles/AddApplicationScreenStyles';
import { addAppItem } from '../API/Firebase';
import { customUpperCase } from '../../../Utils/CustomUpperCase';

const AddApplicationScreen = props => {

    const [date, setDate] = useState(null);
    const [companyName, setCompanyName] = useState(null);
    const [position, setPosition] = useState(null);
    const [url, setUrl] = useState(null);
    const [note, setNote] = useState(null);

    const { styles, colors } = useThemedValues(getStyles);

    const loc = useLocalization();
    const locale = useLocale();

    const upperCaseButtonText = customUpperCase(loc.t(tn.addApplication), locale);

    const getDate = (dateFromDatePicker) => {
        setDate(dateFromDatePicker);
    };

    const _onPress_AddAppItem = () => {
        let incomingDateFormat = locale === "tr" ? 'DD/MM/YYYY' : 'MM/DD/YYYY';
        let dateToSendToDB = moment(date, incomingDateFormat).format('MM/DD/YYYY')
        const appItem = {
            companyName: companyName,
            position: position,
            applicationDate: dateToSendToDB,
            URL: url,
            note: note,
        };

        const onComplete = () => {
            props.navigation.goBack();
        }

        addAppItem(appItem, onComplete);
    }

    return (
        <View style={styles.container}>
            <ScrollView>
            <ApplicationInput
                placeholder={loc.t(tn.companyName)}
                borderColor={colors[cn.home.applicationItemBorder]}
                isNoteInput={false}
                onChangeText={setCompanyName}
            />
            <ApplicationInput
                placeholder={loc.t(tn.position)}
                borderColor={colors[cn.home.applicationItemBorder]}
                isNoteInput={false}
                onChangeText={setPosition}
            />
            <ApplicationInput
                placeholder={loc.t(tn.applicationDate)}
                borderColor={colors[cn.home.applicationItemBorder]}
                isNoteInput={false}
                isDateInput={true}
                transferPickedDate={getDate}
            />
            <ApplicationInput
                placeholder={loc.t(tn.url)}
                borderColor={colors[cn.home.applicationItemBorder]}
                isNoteInput={false}
                onChangeText={setUrl}
            />
            <ApplicationInput
                placeholder={loc.t(tn.note)}
                borderColor={colors[cn.home.applicationItemBorder]}
                isNoteInput={true}
                onChangeText={setNote}
            />
            
            </ScrollView>
            <View style={styles.buttonContainer}>
                <CommonButton text={upperCaseButtonText} onPress={_onPress_AddAppItem}/>
            </View>
        </View>
    );
};

export default AddApplicationScreen;
