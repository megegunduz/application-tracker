import React from 'react';
import { ScrollView, View } from 'react-native';

import ApplicationInput from '../Components/ApplicationInput';
import CommonButton from '../../../Components/CommonButton';
import { cn, useThemedValues } from '../../Theming';
import { tn, useLocalization } from '../../Localization';

import getStyles from '../Styles/EditApplicationScreenStyles';


const EditApplicationScreen = props => {

    const { applicationItem } = props.route.params;
    console.log(applicationItem)
    const { styles, colors } = useThemedValues(getStyles);

    const loc = useLocalization();

    const upperCaseButtonText = loc.t(tn.save).toLocaleUpperCase();

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
            </ScrollView>
            <View style={styles.buttonContainer}>
                <CommonButton text={upperCaseButtonText} />
            </View>
        </View>
    );
};

export default EditApplicationScreen;