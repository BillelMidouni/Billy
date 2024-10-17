import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Carousel from "react-native-reanimated-carousel";
import { useSharedValue } from "react-native-reanimated";
import { height_button, padding_horizontal } from '@/constants/Theme';
import { PromotionHighlight } from '@/types';

export default function PromotedCarousel({
    promoted,
    }: {
    promoted: PromotionHighlight[]
}) {

    const scrollOffsetValue = useSharedValue<number>(0);

    const refCarousel = React.useRef(null);

    const renderItem = ({item, index}: {item: PromotionHighlight, index: number}) => {
        return (
           <View style={styles.container}>
                <Text>{item.title}</Text>
           </View>
        );
    }

    return (
        <View style={{height: height_button*3}}>
            <Carousel
				loop={false}
				width={Dimensions.get("window").width}
				height={height_button*3}
				pagingEnabled={true}
				data={promoted}
				defaultScrollOffsetValue={scrollOffsetValue}
				style={{ width: "100%"}}
				onSnapToItem={(index: number) => console.log("current index:", index)}
				renderItem={renderItem}
			/>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        borderRadius: 15,
        backgroundColor: "#d9d9d9",
        flex: 1,
        width: Dimensions.get("window").width - padding_horizontal*2,
        height: 160,
        justifyContent: "center",
        alignItems: "center",
    }
});