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

const compareDates = (date, locale) => {
    const now = moment();
    const dateFormat = getLocaleDateFormat(locale);
    const appItemDate = moment(date, dateFormat)
    const formattedToday = moment(now).format('YYYY-MM-DD')
    const formattedAppDate = moment(appItemDate).format('YYYY-MM-DD')
    let pastOrFuture;
    if (moment(formattedToday).isSameOrBefore(moment(formattedAppDate))) {
        pastOrFuture = "future";
    }
    else if (moment(formattedToday).isAfter(moment(formattedAppDate))) {
        pastOrFuture = "past";
    }

    return pastOrFuture;
}

const getMomentDate = (dateFromRawData) => {
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

    let appItem;
    let pastApps = [];
    let futureApps = [];

    for (let appItemKey in rawData) {
        // Take next appItem
        appItem = rawData[appItemKey];
        // Put key into appItem
        appItem.key = appItemKey;

        // Convert the appItem
        let convertedItem = convertSingleItem(locale, appItem);
        let dateToCompare = convertedItem.applicationDate;
        const pastOrFuture = compareDates(dateToCompare, locale);
        if (pastOrFuture === "past") {
            pastApps.push(convertedItem);
        }
        else if (pastOrFuture === "future") {
            futureApps.push(convertedItem);
        }
        // Add converted appItem to converted list
    }

    return [futureApps, pastApps];
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