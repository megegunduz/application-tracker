import database from '@react-native-firebase/database';
import { getCurrentUser } from '../../Auth'

export const addAppItem = async(appItem, onComplete) => {
    try {
        const appItemThumbnail = {
            companyName: appItem.companyName,
            position: appItem.position,
            date: appItem.date,
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