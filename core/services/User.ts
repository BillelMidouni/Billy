import firestore from '@react-native-firebase/firestore';

export interface Address {
    title: string;
    street: string;
    city: string;
    zip: string;
}

export interface User {
    id: string;
    name: string;
    email: string;
    role: 'customer' | 'merchant' | 'courier';
    phone: string;
    profilePicture: string;
    addresses: Address[];
    orders: string[];
    createdAt: string;
}

const usersCollection = firestore().collection('Users');

export const getUser = async (id: string): Promise<User | null> => {
    const doc = await usersCollection.doc(id).get();
    return doc.exists ? (doc.data() as User) : null;
};

export const createUser = async (user: User): Promise<void> => {
    await usersCollection.doc(user.id).set(user);
};

export const updateUser = async (id: string, data: Partial<User>): Promise<void> => {
    await usersCollection.doc(id).update(data);
};

export const deleteUser = async (id: string): Promise<void> => {
    await usersCollection.doc(id).delete();
};