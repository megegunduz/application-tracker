import React, { useState } from 'react';
import { View, Platform, TouchableOpacity, Text } from 'react-native';
import moment from 'moment';
import trloc from 'moment/locale/tr'

import DateTimePicker from '@react-native-community/datetimepicker';
import { tn, useLocale, useLocalization } from '../Modules/Localization';

import getStyles from './Styles/DatePickerStyles';
import { useThemedValues } from '../Modules/Theming';

const DatePicker = (props) => {

    const [isSelected, setIsSelected] = useState(false);

    const { styles, colors } = useThemedValues(getStyles, isSelected);

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [dateAsString, setDateAsString] = useState(null);
    

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
        setIsSelected(true);
        setDateAsString(currentDate.toLocaleDateString());  
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const loc = useLocalization();
    const locale = useLocale();

    const pickDateText = loc.t(tn.pickDate);

    let momentDate = moment(date).locale(locale).format('DD MMM YYYY');

    return (
        <View>
            <View>
                <TouchableOpacity onPress={showDatepicker}>
                    <Text style={styles.text}>{ dateAsString ? momentDate : pickDateText}</Text>
                </TouchableOpacity>
            </View>
            {show && (
                <DateTimePicker
                    value={date}
                    is24Hour={true}
                    onChange={onChange}
                />
            )}
        </View>
    );
};

export default DatePicker;