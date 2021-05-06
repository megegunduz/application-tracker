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