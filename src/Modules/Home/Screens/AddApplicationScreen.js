import React from 'react';
import { ScrollView, View } from 'react-native';

import { tn, useLocalization } from '../../Localization';
import { cn, useThemedValues } from '../../Theming';
import AddApplicationInput from '../Components/AddApplicationInput';
import CommonButton from '../../../Components/CommonButton';

import getStyles from '../Styles/AddApplicationScreenStyles';

const AddApplicationScreen = props => {

    const { styles, colors } = useThemedValues(getStyles);

    const loc = useLocalization();

    const upperCaseButtonText = loc.t(tn.addApplication).toLocaleUpperCase();

    return (
        <View style={styles.container}>
            <ScrollView>
            <AddApplicationInput
                placeholder={loc.t(tn.companyName)}
                borderColor={colors[cn.home.applicationItemBorder]}
                isNoteInput={false}
            />
            <AddApplicationInput
                placeholder={loc.t(tn.position)}
                borderColor={colors[cn.home.applicationItemBorder]}
                isNoteInput={false}
            />
            <AddApplicationInput
                placeholder={loc.t(tn.applicaitonDate)}
                borderColor={colors[cn.home.applicationItemBorder]}
                isNoteInput={false}
            />
            <AddApplicationInput
                placeholder={loc.t(tn.url)}
                borderColor={colors[cn.home.applicationItemBorder]}
                isNoteInput={false}
            />
            <AddApplicationInput
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
