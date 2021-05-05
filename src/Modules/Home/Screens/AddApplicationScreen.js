import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';

import { tn, useLocalization } from '../../Localization';
import { cn, useThemedValues } from '../../Theming';
import ApplicationInput from '../Components/ApplicationInput';
import CommonButton from '../../../Components/CommonButton';

import getStyles from '../Styles/AddApplicationScreenStyles';

const AddApplicationScreen = props => {

    const [date, setDate] = useState(null);

    const { styles, colors } = useThemedValues(getStyles);

    const loc = useLocalization();

    const upperCaseButtonText = loc.t(tn.addApplication).toLocaleUpperCase();

    const getDate = (dateFromDatePicker) => {
        setDate(dateFromDatePicker);
    };

    console.log(date)

    return (
        <View style={styles.container}>
            <ScrollView>
            <ApplicationInput
                placeholder={loc.t(tn.companyName)}
                borderColor={colors[cn.home.applicationItemBorder]}
                isNoteInput={false}
            />
            <ApplicationInput
                placeholder={loc.t(tn.position)}
                borderColor={colors[cn.home.applicationItemBorder]}
                isNoteInput={false}
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
            />
            <ApplicationInput
                placeholder={loc.t(tn.note)}
                borderColor={colors[cn.home.applicationItemBorder]}
                isNoteInput={true}
            />
            
            </ScrollView>
            <View style={styles.buttonContainer}>
                <CommonButton text={upperCaseButtonText}/>
            </View>
        </View>
    );
};

export default AddApplicationScreen;
