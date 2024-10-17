import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';

import { ProductCategory } from '@/types';
import ProductCard from '../product/Card';

export default function CategoryCarousel({
    category,
    }: {
    category: ProductCategory[];
}) {

    const [target, setTarget] = React.useState<number>(0);

    const handlePress = (index: number) => {
        if (index === target) {
            setTarget(-1);
        }else{
            setTarget(index);
        }
    }

    const renderItem = ({item, index}: {item: ProductCategory, index: number}) => {
        return (
            <TouchableOpacity style={[(index === target ? styles.button_focus : styles.button), {
                marginLeft: index === 0 ? 0 : 5, 
                marginRight: index === (category.length - 1) ? 0 : 5}]}
                onPress={() => handlePress(index)}>
                <Text style={(index === target ? styles.title_button_focus : styles.title_button)}>{item.name}</Text>
            </TouchableOpacity>
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={category}
                renderItem={({item, index}) => renderItem({item, index})}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
            />

            <FlatList
                data={[1, 2, 3, 5, 6, 7, 8, 9]}
                renderItem={({ item }) => (<ProductCard />)}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{columnGap: 15}}
            />
        </View>
    );

}

const styles = StyleSheet.create({
    container:{
        rowGap: 15,
    },
    title_button: {
        fontSize: 16,
        lineHeight: 22,
        fontWeight: "500",
        fontFamily: "General Sans",
        color: "#1a1a1a",
        textAlign: "left"
    },
    button: {
        borderRadius: 10,
        borderStyle: "solid",
        borderColor: "#e6e6e6",
        borderWidth: 1,
        flex: 1,
        width: 100,
        height: 40,
        overflow: "visible",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    title_button_focus: {
        fontSize: 16,
        lineHeight: 22,
        fontWeight: "500",
        fontFamily: "General Sans",
        color: "#fff",
        textAlign: "left"
    },
    button_focus: {
        borderRadius: 10,
        backgroundColor: "#1a1a1a",
        flex: 1,
        width: 100,
        height: 36,
        overflow: "visible",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    }
});