import { Image, StyleSheet, Platform, View } from 'react-native';

import { ThemedView } from '@/components/ThemedView';
import Header from '@/components/home/Header';
import SearchBar from '@/components/home/SearchBar';
import { padding_horizontal } from '@/constants/Theme';
import CategoryCarousel from '@/components/home/CategoryCarousel';
import { category, promoted } from '@/data/fake';
import PromotedCarousel from '@/components/home/PromotedCarousel';

export default function HomeScreen() {
  return (
    <ThemedView style={{flex: 1}}>
      <Header title="Discover" />
      <View style={{paddingHorizontal: padding_horizontal, flex: 1, gap: 15}}>
        <SearchBar />
        <PromotedCarousel promoted={promoted} />
        <CategoryCarousel category={category} />
      </View>
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
