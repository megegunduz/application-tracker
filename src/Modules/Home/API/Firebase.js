import database from '@react-native-firebase/database';
import { getCurrentUser } from '../../Auth'
import { convertRawData } from './Converter';

export const subscribeToAppItemData = (onDataRetrieved) => {
    const userId = getCurrentUser().uid;

    database()
        .ref(`/appItemThumbnailList/${userId}`)
        .on('value', snapshot => {
            const rawData = snapshot.val();
            console.log("rawData: ", rawData);
            const convertedList = convertRawData(rawData);
            console.log("convertedList: ", convertedList)
            onDataRetrieved(convertedList);
        });

        return () => {
            database()
                .ref(`/appItemThumbnailList/${userId}`)
                .off('value');
        }
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
            .ref(`appItemList/${appItemKey}`)
            .set(appItem);

        onComplete();
    } catch (error) {
        
    }
}