const category = [
    {
        id: '1',
        name: 'Jeans',
        image: 'https://pic'
    },
    {
        id: '2',
        name: 'Shoes',
        image: 'https://pic'
    },
    {
        id: '3',
        name: 'Pull',
        image: 'https://pic'
    },
    {
        id: '4',
        name: 'T-shirt',
        image: 'https://pic'
    },
    {
        id: '5',
        name: 'Pants',
        image: 'https://pic'
    },
    {
        id: '6',
        name: 'Shirt',
        image: 'https://pic'
    },
    {
        id: '7',
        name: 'Sweater',
        image: 'https://pic'
    },
]

const promoted = [
    {
        id: '1',
        title: '10% sur votre première commande',
        description: 'Profitez de 10% de réduction sur votre première commande. Offre valable pour les nouveaux clients uniquement.',
        image: 'https://example.com/promo1.jpg',
        deep_link: 'https://example.com/promo1'
    },
    {
        id: '2',
        title: 'Livraison gratuite',
        description: 'Bénéficiez de la livraison gratuite pour toute commande supérieure à 50€.',
        image: 'https://example.com/promo2.jpg',
        deep_link: 'https://example.com/promo2'
    },
    {
        id: '3',
        title: 'Soldes d\'été',
        description: 'Jusqu\'à 50% de réduction sur une sélection d\'articles pendant les soldes d\'été.',
        image: 'https://example.com/promo3.jpg',
        deep_link: 'https://example.com/promo3'
    },
    {
        id: '4',
        title: 'Offre spéciale de la semaine',
        description: 'Découvrez notre offre spéciale de la semaine avec des réductions exclusives.',
        image: 'https://example.com/promo4.jpg',
        deep_link: 'https://example.com/promo4'
    },
    {
        id: '5',
        title: '2 pour le prix d\'1',
        description: 'Achetez-en un et obtenez-en un autre gratuitement sur une sélection d\'articles.',
        image: 'https://example.com/promo5.jpg',
        deep_link: 'https://example.com/promo5'
    },
    {
        id: '6',
        title: 'Réductions de fin de saison',
        description: 'Profitez de réductions importantes sur les articles de fin de saison.',
        image: 'https://example.com/promo6.jpg',
        deep_link: 'https://example.com/promo6'
    },
    {
        id: '7',
        title: 'Offre de fidélité',
        description: 'Recevez des points de fidélité pour chaque achat et échangez-les contre des réductions.',
        image: 'https://example.com/promo7.jpg',
        deep_link: 'https://example.com/promo7'
    }
];

const popularProduct = [
    {
        id: '0',
        name: ""
    }
];

const store = [
    {
        id: '0',
        name: 'Zara',
        description: 'Magasin de vêtements pour hommes, femmes et enfants.',
        background_image: 'https://billy.s3.fr-par.scw.cloud/fake/background_zara.avif',
        logo_image: 'https://billy.s3.fr-par.scw.cloud/fake/Zara-LA-MODE.jpg.avif',
        rating: 4.5,
        location: {
            address: '123 Main St',
            city: 'Paris',
            state: 'Île-de-France',
            zip: '75001',
            latitude: 48.8566,
            longitude: 2.3522
        },
        averageTimeDelivery: 1800,
    },
    {
        id: '1',
        name: 'H&M',
        description: 'Magasin de vêtements pour hommes, femmes et enfants.',
        background_image: 'https://example.com/store1.jpg',
        logo_image: 'https://billy.s3.fr-par.scw.cloud/fake/H%26M-Logo.svg.png',
        rating: 4.3,
        location: {
            address: '456 Elm St',
            city: 'Paris',
            state: 'Île-de-France',
            zip: '75002',
            latitude: 48.8566,
            longitude: 2.3522
        },
        averageTimeDelivery: 1200,
    },
    {
        id: '2',
        name: 'Uniqlo',
        description: 'Magasin de vêtements pour hommes, femmes et enfants.',
        background_image: 'https://example.com/store2.jpg',
        logo_image: 'https://billy.s3.fr-par.scw.cloud/fake/Uniqlo.png',
        rating: 4.1,
        location: {
            address: '789 Oak St',
            city: 'Paris',
            state: 'Île-de-France',
            zip: '75003',
            latitude: 48.8566,
            longitude: 2.3522
        },
        averageTimeDelivery: 900,
    },
    {
        id: '3',
        name: 'Mango',
        description: 'Magasin de vêtements pour hommes, femmes et enfants.',
        background_image: 'https://example.com/store3.jpg',
        logo_image: 'https://billy.s3.fr-par.scw.cloud/fake/mango.webp',
        rating: 4.0,
        location: {
            address: '101 Pine St',
            city: 'Paris',
            state: 'Île-de-France',
            zip: '75004',
            latitude: 48.8566,
            longitude: 2.3522
        },
        averageTimeDelivery: 2400
    },
    {
        id: '4',
        name: 'Gap',
        description: 'Magasin de vêtements pour hommes, femmes et enfants.',
        background_image: 'https://example.com/store4.jpg',
        logo_image: 'https://billy.s3.fr-par.scw.cloud/fake/Gap_logo.svg.png',
        rating: 3.9,
        location: {
            address: '202 Walnut St',
            city: 'Paris',
            state: 'Île-de-France',
            zip: '75005',
            latitude: 48.8566,
            longitude: 2.3522
        },
        averageTimeDelivery: 3600
    }
]

export { 
    promoted,
    category,
    popularProduct,
    store
};