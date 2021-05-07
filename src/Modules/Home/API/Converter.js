export const convertRawData = rawData => {

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
        // Add appItem to converted list
        convertedAppList.push(appItem);
    }

    return convertedAppList;
}

export const convertInterview = rawData => {
    if (rawData?.length === 0) {
        return [];
    }

    let convertedInterviewList = [];
    let interview;

    for (let interviewKey in rawData) {
        interview = rawData[interviewKey];
        interview.key = interviewKey;
        convertedInterviewList.push(interview);
    }

    return convertedInterviewList;
}