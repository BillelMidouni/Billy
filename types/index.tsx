type UserAuth = {
    id: string;
    username: string;
    email: string;
    password: string;
    token: string;
    role: string;
    createdAt: string;
    updatedAt: string;
};

type Store = {
    id: string;
    name: string;
    description: string;
    background_image: string;
    logo_image: string;
    rating: number;
    location: {
        address: string;
        city: string;
        state: string;
        zip: string;
        latitude: number;
        longitude: number;
    };
    averageTimeDelivery: number;
};

type ProductCategory = {
    id: string;
    name: string;
    image: string;
};

type PromotionHighlight = {
    id: string;
    title: string;
    description: string;
    image: string;
    deep_link: string;
};

type PopularProductType = {
    id: string;
    title: string;
    price: string;
}

type Product = {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    rate: ProductRate
};

type ProductRate = {
    id: string;
    rating: number;
    number_review: number;
    review: ProductReview[];
};

type ProductReview = {
    rating: number;
    comment: string;
    user: {
        id: string;
        username: string;
    };
    createdAt: string;
}

export type { 
    UserAuth,
    Store,
    Product,
    ProductCategory,
    PromotionHighlight,
    PopularProductType,
    ProductRate,
    ProductReview
};