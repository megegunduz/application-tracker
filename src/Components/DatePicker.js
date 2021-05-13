import React, { useEffect, useState } from 'react';
import { View, Platform, TouchableOpacity, Text } from 'react-native';
import moment from 'moment';
import trloc from 'moment/locale/tr';
import DateTimePicker from '@react-native-community/datetimepicker';

import { tn, useLocale, useLocalization } from '../Modules/Localization';
import { useThemedValues } from '../Modules/Theming';

import getStyles from './Styles/DatePickerStyles';

const DatePicker = (props) => {

    const [isSelected, setIsSelected] = useState(false);
    const [date, setDate] = useState(null);
    const [showPicker, setShowPicker] = useState(false);
    const [dateToDisplay, setDateToDisplay] = useState(null);

    const { styles, colors } = useThemedValues(getStyles, isSelected);

    const loc = useLocalization();
    const locale = useLocale();

    const pickDateText = loc.t(tn.pickDate);

    const localeDateFormat = locale === "tr" ? 'DD/MM/YYYY' : 'MM/DD/YYYY'

    useEffect(() => {
        if (props.defaultValue) {
            setDateToDisplay(props.defaultValue)
            setIsSelected(true);
        }
    }, [])

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowPicker(Platform.OS === 'ios');
        setDate(currentDate);
        let momentDate = moment(currentDate);
        props.transferPickedDate(momentDate.format(localeDateFormat))
        setIsSelected(true);
        setDateToDisplay(momentDate.locale(locale).format(localeDateFormat))
    };

    return (
        <View>
            <View>
                <TouchableOpacity onPress={() => setShowPicker(true)}>
                    <Text style={styles.text}>{ dateToDisplay ? dateToDisplay : pickDateText}</Text>
                </TouchableOpacity>
            </View>
            {showPicker && (
                <DateTimePicker
                    value={new Date()}
                    is24Hour={true}
                    onChange={onChange}
                />
            )}
        </View>
    );
};

export default DatePicker;