import { Image, StyleSheet, Platform, View, ScrollView } from 'react-native';

import { ThemedView } from '@/components/ThemedView';
import Header from '@/components/home/Header';
import SearchBar from '@/components/home/SearchBar';
import { padding_horizontal } from '@/constants/Theme';
import CategoryCarousel from '@/components/home/CategoryCarousel';
import { category, promoted, popularProduct, store } from '@/data/fake';
import PromotedCarousel from '@/components/home/PromotedCarousel';
import PopularProduct from '@/components/home/PopularProduct';
import StoreAroundLocation from '@/components/store/StoreAroundLocation';
import UserHeader from '@/components/home/UserHeader';

export default function HomeScreen() {
  return (
    <ThemedView style={{flex: 1}}>
      <Header title="Discover" />
      <ScrollView>
        <View style={{paddingHorizontal: padding_horizontal, flex: 1, gap: 15}}>
            <UserHeader />
            <SearchBar />
            <PromotedCarousel promoted={promoted} />
            <CategoryCarousel category={category} />
            <StoreAroundLocation storeAroundLocation={store} />
        </View>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
