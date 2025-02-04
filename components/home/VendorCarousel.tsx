import React from 'react';
import { View, Text, FlatList } from 'react-native';

import { Store } from '@/types';
import { height_button } from '@/constants/Theme';

export default function VendorCarousel({
    vendors,
    onVendorPress,
    }: {
    vendors: Store[];
    onVendorPress: (vendor: Store) => void;
}) {

    return (
        <View style={{backgroundColor: "#000", height: height_button}}>
            <FlatList
                data={vendors}
                renderItem={({item}) => (
                    <View>
                        <Text>{item.name}</Text>
                    </View>
                )}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );

}