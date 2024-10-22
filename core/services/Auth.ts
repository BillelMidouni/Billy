// Add Login, Logout, Register, and GetCurrentUser methods from Firebase Auth service

import auth from '@react-native-firebase/auth';


export const register = async (email: string, password: string) => {
    return await auth().createUserWithEmailAndPassword(email, password)
}

export const login = async (email: string, password: string) => {
    return await auth().signInWithEmailAndPassword(email, password);
}

export const logout = async () => {
    try {
        await auth().signOut();
    } catch (error) {
        console.error(error);
    }
}

export const getCurrentUser = () => {
    return auth().currentUser;
}

export const resetPassword = async (email: string) => {
    try {
        await auth().sendPasswordResetEmail(email);
    } catch (error) {
        console.error(error);
    }
}