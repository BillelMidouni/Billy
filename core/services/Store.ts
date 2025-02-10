import firestore from '@react-native-firebase/firestore';

export interface Store {
    id: string;
    name: string;
    ownerId: string;
    phone: string;
    address: {
        street: string;
        city: string;
        zip: string;
    };
    location: {
        latitude: number;
        longitude: number;
    };
    openingHours: Record<string, [string, string]>;
    storePicture: string;
    logo: string;
    rank: number;
    ratings: {
        average: number;
        reviewsCount: number;
    };
    comments: string[];
    inMall: {
        exists: boolean;
        locationDetail?: string;
    };
    couriers: string[];
    promotions: {
        productId: string;
        discount: number;
        validUntil: string;
    }[];
    createdAt: string;
}

const storesCollection = firestore().collection('Stores');

export const getStore = async (id: string): Promise<Store | null> => {
    const doc = await storesCollection.doc(id).get();
    return doc.exists ? (doc.data() as Store) : null;
};

export const createStore = async (store: Store): Promise<void> => {
    await storesCollection.doc(store.id).set(store);
};

export const updateStore = async (id: string, data: Partial<Store>): Promise<void> => {
    await storesCollection.doc(id).update(data);
};

export const deleteStore = async (id: string): Promise<void> => {
    await storesCollection.doc(id).delete();
};