// Add Login, Logout, Register, and GetCurrentUser methods from Firebase Auth service

import auth from '@react-native-firebase/auth';


export const register = async (email: string, password: string) => {
    try {
        await auth().createUserWithEmailAndPassword(email, password);
    } catch (error) {
        console.error(error);
    }
}

export const login = async (email: string, password: string) => {
    try {
        await auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
        console.error(error);
    }
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