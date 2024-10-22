type Vendor = {
    id: string;
    name: string;
    description: string;
    image: string;
    rating: number;
    location: {
        address: string;
        city: string;
        state: string;
        zip: string;
        latitude: number;
        longitude: number;
    };
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

export type { 
    Vendor,
    ProductCategory,
    PromotionHighlight,
    PopularProductType
};