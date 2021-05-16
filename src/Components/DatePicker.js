import React, { useEffect, useState } from 'react';
import { View, Platform, TouchableOpacity, Text } from 'react-native';
import moment from 'moment';
import DateTimePicker from '@react-native-community/datetimepicker';

import { tn, useLocale, useLocalization } from '../Modules/Localization';
import { useThemedValues } from '../Modules/Theming';
import { Svgs } from '../StylingConstants';
import Icon from './Icon';

import getStyles from './Styles/DatePickerStyles';

const DatePicker = (props) => {

    const loc = useLocalization();
    const locale = useLocale();

    const localeDateFormat = locale === "tr" ? 'DD/MM/YYYY' : 'MM/DD/YYYY'

    const [isSelected, setIsSelected] = useState(false);
    const [date, setDate] = useState(moment());
    const [showPicker, setShowPicker] = useState(false);
    const [dateToDisplay, setDateToDisplay] = useState(date.locale(locale).format(localeDateFormat));

    const { styles, colors } = useThemedValues(getStyles, isSelected);

    const pickDateText = loc.t(tn.pickDate);


    useEffect(() => {
        if (props.defaultValue) {
            setDateToDisplay(props.defaultValue)
            setDate(moment(props.defaultValue, localeDateFormat))
            setIsSelected(true);
        }
    }, [])

    useEffect(() => {
        props.transferPickedDate(date.format(localeDateFormat))
    },[date])

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowPicker(Platform.OS === 'ios');
        setDate(moment(currentDate));
        let momentDate = moment(currentDate);
        props.transferPickedDate(momentDate.format(localeDateFormat))
        setIsSelected(true);
        setDateToDisplay(momentDate.locale(locale).format(localeDateFormat))
    };

    return (
        <View>
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>{dateToDisplay ? dateToDisplay : ""}</Text>
                </View>
                <TouchableOpacity style={styles.touchable} onPress={() => setShowPicker(true)}>
                    <View style={styles.iconContainer}>
                        <Icon svg={Svgs.Calendar} iconStyle={styles.icon} />
                    </View>
                    <Text style={styles.touchableText}>{pickDateText}</Text>
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