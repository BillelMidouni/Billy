import CategoryCarousel from "@/components/home/CategoryCarousel";
import Header from "@/components/home/Header";
import SearchBar from "@/components/SearchBar";
import { ThemedView } from "@/components/ThemedView";
import { padding_horizontal } from "@/constants/Theme";
import { category } from "@/data/fake";
import { ProductCategory } from "@/types";
import { useLocalSearchParams } from "expo-router";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FlatList, Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";


export default function ShopDetailScreen() {

    const { store } = useLocalSearchParams();
    
    const [loading, setLoading] = React.useState(true);
    const [products, setProducts] = React.useState<ProductCategory[]>(category); // Ajoutez cette ligne pour les produits

    useEffect(() => {
        setLoading(false);
    }, []);

    const { t } = useTranslation();

    return (
        loading ? <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}><Text>{t('loading')}</Text></View> :
        <ThemedView style={{flex: 1}}>
            <Header title={store.name} notification={true} goback={true} />
            <View style={{paddingHorizontal: padding_horizontal, flex: 1, gap: 15}}>
                <SearchBar />
                {/* <CategoryCarousel categories={category} /> Ajoutez le carrousel de catégories */}
                {/* <FlatList
                    data={products}
                    numColumns={2}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={{ flex: 1, margin: 5 }}>
                            <ImageBackground source={{ uri: item.image }} style={{ height: 150, justifyContent: 'flex-end' }}>
                                <View style={{ backgroundColor: 'rgba(0,0,0,0.5)', padding: 5 }}>
                                    <Text style={{ color: 'white', fontSize: 16 }}>{item.name}</Text>
                                    <Text style={{ color: 'white', fontSize: 12 }}>{item.price} €</Text>
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>
                    )}
                /> */}
            </View>
        </ThemedView>
    );
}