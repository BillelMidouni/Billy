import firestore from '@react-native-firebase/firestore';

export interface ProductVariant {
    color: string;
    size: string;
    stock: number;
    price: number;
    discountPrice?: number;
    imageUrls: string[];
}

export interface Product {
    id: string;
    name: string;
    description: string;
    storeId: string;
    category: string;
    variants: ProductVariant[];
    ratings: {
        average: number;
        reviewsCount: number;
    };
    tags: string[];
    material: string;
    isFeatured: boolean;
    createdAt: string;
}

const productsCollection = firestore().collection('Products');

export const getProduct = async (id: string): Promise<Product | null> => {
    const doc = await productsCollection.doc(id).get();
    return doc.exists ? (doc.data() as Product) : null;
};

export const createProduct = async (product: Product): Promise<void> => {
    await productsCollection.doc(product.id).set(product);
};

export const updateProduct = async (id: string, data: Partial<Product>): Promise<void> => {
    await productsCollection.doc(id).update(data);
};

export const deleteProduct = async (id: string): Promise<void> => {
    await productsCollection.doc(id).delete();
};
