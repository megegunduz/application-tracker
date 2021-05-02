import AsyncStorage from '@react-native-community/async-storage';
import { USER_NAMESPACE } from '../Modules/Auth';
import { THEMING_NAMESPACE } from '../Modules/Theming';
import { LOCALIZATION_NAMESPACE } from '../Modules/Localization';
// Kendi modüllerindeki oluşturulan reducerlardaki NAMESPACE'leri burda import et

const REDUX_PERSIST = {
    active: true,
    storeConfig: {
        key: 'primary',
        storage: AsyncStorage,
        whitelist: [
            // import edilen ve persis store'da tutulmasını istediğin
            // NAMESPACE'leri buraya yaz mesela:
            THEMING_NAMESPACE,
            LOCALIZATION_NAMESPACE,
            USER_NAMESPACE,
        ],
    },
};

export default REDUX_PERSIST;