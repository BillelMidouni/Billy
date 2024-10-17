import { Image, StyleSheet, Platform, View } from 'react-native';

import { ThemedView } from '@/components/ThemedView';
import Header from '@/components/home/Header';
import SearchBar from '@/components/home/SearchBar';
import { padding_horizontal } from '@/constants/Theme';
import CategoryCarousel from '@/components/home/CategoryCarousel';
import { category, promoted } from '@/data/fake';
import PromotedCarousel from '@/components/home/PromotedCarousel';

export default function NotificationScreen() {
  return (
    <ThemedView style={{flex: 1}}>
      <Header title="Notification" goback={true}/>
    </ThemedView>
  );
}