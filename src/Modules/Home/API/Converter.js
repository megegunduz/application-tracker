import moment from 'moment';
import { Locales } from '../../Localization';

const timeFormatStandard = "HH:mm";
const dateFormatStandard = "MM/DD/YYYY";
const getLocaleDateFormat = (locale) => {
    let dateFormat;
    switch (locale) {
        case Locales.turkish:
            dateFormat = "DD/MM/YYYY";
            return dateFormat;
        case Locales.english:
            dateFormat = "MM/DD/YYYY";
            return dateFormat;
        default:
            dateFormat= "MM/DD/YYYY";
            return dateFormat;
    }
}

const getMomentDate = (dateFromRawData) => {
    // const dateFormat = getLocaleDateFormat(locale);
    const formatString = dateFormatStandard + " " + timeFormatStandard;
    return moment(dateFromRawData, formatString)
}

const getDate = (locale, momentDate) => {
    const dateFormat = getLocaleDateFormat(locale);
    return momentDate.format(dateFormat);
}

const convertSingleItem = (locale, appItem) => {
    let dateFromRawData = appItem.applicationDate;
    let momentDate = getMomentDate(dateFromRawData);
    let convertedAppItem = {
        ...appItem,
        applicationDate: getDate(locale, momentDate),
    }
    return convertedAppItem;
}

export const convertRawData = (locale, rawData) => {

    if (rawData?.length === 0) {
        return [];
    }

    let convertedAppList = [];
    let appItem;

    for (let appItemKey in rawData) {
        // Take next appItem
        appItem = rawData[appItemKey];
        // Put key into appItem
        appItem.key = appItemKey;

        // Convert the appItem
        let convertedItem = convertSingleItem(locale, appItem);
        // Add converted appItem to converted list
        convertedAppList.push(convertedItem);
    }

    return convertedAppList;
}

const convertSingleInterview = (locale, interview) => {
    let rawInterviewDate = interview.date;
    let momentDate = getMomentDate(rawInterviewDate);
    let convertedInterview = {
        ...interview,
        date: getDate(locale, momentDate),
    }
    return convertedInterview;
}

export const convertInterview = (locale, rawData) => {
    if (rawData?.length === 0) {
        return [];
    }

    let convertedInterviewList = [];
    let interview;

    for (let interviewKey in rawData) {
        interview = rawData[interviewKey];
        interview.key = interviewKey;

        let convertedInterview = convertSingleInterview(locale, interview)
        convertedInterviewList.push(convertedInterview);
    }

    return convertedInterviewList;
}