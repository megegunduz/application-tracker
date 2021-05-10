import database from '@react-native-firebase/database';
import { getCurrentUser } from '../../Auth'
import { convertRawData, convertInterview } from './Converter';

export const subscribeToAppItemData = (locale, filterType, onDataRetrieved) => {
    const userId = getCurrentUser().uid;

    database()
        .ref(`/appItemThumbnailList/${userId}`)
        .on('value', snapshot => {
            const rawData = snapshot.val();
            const convertedList = convertRawData(locale, filterType, rawData);
            onDataRetrieved(convertedList);
        });

        return () => {
            database()
                .ref(`/appItemThumbnailList/${userId}`)
                .off('value');
        }
}

export const getAppItemDetail = (appItemKey, onRetrieved) => {
    database()
        .ref(`/appItemList/${appItemKey}`)
        .once('value')
        .then(snapshot => {
            onRetrieved(snapshot.val())
        })
}

export const addAppItem = async(appItem, onComplete) => {
    try {
        const appItemThumbnail = {
            companyName: appItem.companyName,
            position: appItem.position,
            applicationDate: appItem.applicationDate,
        };

        const userId = getCurrentUser().uid;

        const newAppItemThumbnailRef = database()
            .ref(`/appItemThumbnailList/${userId}`)
            .push()

        await newAppItemThumbnailRef.set(appItemThumbnail);

        const appItemKey = newAppItemThumbnailRef.key;

        await database()
            .ref(`/appItemList/${appItemKey}`)
            .set(appItem);

        onComplete();
    } catch (error) {
        
    }
}

export const updateAppItem = async (appItem, onComplete) => {
    try {
        await database()
            .ref(`/appItemList/${appItem.key}`)
            .update(appItem);

        const appItemThumbnail = {
            companyName: appItem.companyName,
            position: appItem.position,
            applicationDate: appItem.applicationDate,
            URL: appItem.URL,
            note: appItem.note,
        }

        const userId = getCurrentUser().uid;
        await database()
            .ref(`/appItemThumbnailList/${userId}/${appItem.key}`)
            .update(appItemThumbnail);
        
        onComplete();
    } catch (error) {
        console.log(error);
    }
}

export const deleteAppItem = appItemKey => {
    const userId = getCurrentUser().uid;

    database()
        .ref(`/appItemThumbnailList/${userId}/${appItemKey}`)
        .remove();
    database()
        .ref(`/appItemList/${appItemKey}`)
        .remove();
}

export const addInterview = async (applicationItem, interview, onComplete) => {
    try {
        
        const interviewThumbnail = {
            title: interview.title,
            date: interview.date,
            details: interview.details,
        };

        const userId = getCurrentUser().uid;
        const appItemKey = applicationItem.key;

        const newInterviewThumbnailRef = database()
            .ref(`/appItemList/${appItemKey}/interviews`)
            .push()
        
        await newInterviewThumbnailRef.set(interviewThumbnail);

        const interviewKey = newInterviewThumbnailRef.key;

        await database()
            .ref(`/appItemThumbnailList/${userId}/${appItemKey}/interviews/${interviewKey}`)
            .set(interview);
        
            onComplete();

    } catch (error) {
        
    }
}

export const subscribeToInterviews = (locale, applicationItem, onDataRetrieved) => {
    const userId = getCurrentUser().uid;
    const appItemKey = applicationItem.key;

    database()
        .ref(`/appItemThumbnailList/${userId}/${appItemKey}/interviews`)
        .on('value', snapshot => {
            const rawData = snapshot.val();
            const convertedList = convertInterview(locale, rawData);
            onDataRetrieved(convertedList);
        });

        return () => {
            database()
                .ref(`/appItemThumbnailList/${userId}/${appItemKey}/interviews`)
                .off('value');
        }
}

export const deleteInterview = (appItemKey, interviewKey, onComplete) => {
    const userId = getCurrentUser().uid;
    database()
        .ref(`/appItemList/${appItemKey}/interviews/${interviewKey}`)
        .remove();
    database()
        .ref(`/appItemThumbnailList/${userId}/${appItemKey}/interviews/${interviewKey}`)
        .remove();
    onComplete();
}