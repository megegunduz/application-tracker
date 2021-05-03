import React, { useState } from 'react';
import { View, Platform, TouchableOpacity, Text } from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';
import { tn, useLocalization } from '../Modules/Localization';

const DatePicker = () => {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [dateAsString, setDateAsString] = useState(null);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
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

    const pickDateText = loc.t(tn.pickDate);

    return (
        <View>
            <View>
                <TouchableOpacity onPress={showDatepicker}>
                    <Text>{ dateAsString ? dateAsString : pickDateText}</Text>
                </TouchableOpacity>
            </View>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
            )}
        </View>
    );
};

export default DatePicker;