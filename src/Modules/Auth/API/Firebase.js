import createFBAuth from "@react-native-firebase/auth";

const auth = createFBAuth();

export const signUp = async (email, password) => {
    return await auth.createUserWithEmailAndPassword(email, password);
};

export const signIn = async (email, password) => {
    return await auth.signInWithEmailAndPassword(email, password);
};

export const signOut = async () => {
    return await auth.signOut();
};

export const updateUser = async (displayName) => {
    
    let currentUser = auth.currentUser;

    return await currentUser.updateProfile({
        displayName,
    });
};

export const getCurrentUser = () => {
    return auth.currentUser;
};