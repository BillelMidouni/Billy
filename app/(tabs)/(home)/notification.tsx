import { TouchableOpacity, StyleSheet, View, FlatList, Text, Animated } from 'react-native';

import { ThemedView } from '@/components/ThemedView';
import Header from '@/components/home/Header';
import Ionicons from '@expo/vector-icons/Ionicons';
import Swipeable from 'react-native-gesture-handler/ReanimatedSwipeable';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Reanimated, { SharedValue, useAnimatedStyle } from 'react-native-reanimated';

const notifications = [
  {
    id: "1",
    date: "Today",
    items: [
      {
        id: "1-1",
        icon: "pricetag-outline",
        title: "30% Special Discount!",
        description: "Special promotion only valid today."
      }
    ]
  },
  {
    id: "2",
    date: "Yesterday",
    items: [
      {
        id: "2-1",
        icon: "wallet-outline",
        title: "Top Up E-wallet Successfully!",
        description: "You have top up your e-wallet."
      },
      {
        id: "2-2",
        icon: "location-outline",
        title: "New Service Available!",
        description: "Now you can track order in real-time."
      }
    ]
  },
  {
    id: "3",
    date: "June 7, 2023",
    items: [
      {
        id: "3-1",
        icon: "card-outline",
        title: "Credit Card Connected!",
        description: "Credit card has been linked."
      },
      {
        id: "3-2",
        icon: "person-outline",
        title: "Account Setup Successfully!",
        description: "Your account has been created."
      }
    ]
  }
];

export default function NotificationScreen() {

  const renderRightActions = (prog: SharedValue<number>, drag: SharedValue<number>) => {
    const styleAnimation = useAnimatedStyle(() => {
     
      return {
        transform: [{ translateX: drag.value + 100 }]
      };
    });

    return (
      <Reanimated.View style={[styles.deleteContainer, styleAnimation]}>
        <TouchableOpacity style={styles.deleteButton}>
          <Ionicons name="trash-outline" size={24} color="#fff" />
        </TouchableOpacity>
      </Reanimated.View>
    );
  };

  return (
    <ThemedView style={{flex: 1}}>
      <Header title="Notification" goback={true} notification={false} />
      <GestureHandlerRootView style={styles.container}>

      { notifications.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Ionicons name="notifications-outline" size={80} color="#ccc" />
          <Text style={styles.emptyTitle}>You haven’t gotten any notifications yet!</Text>
          <Text style={styles.emptySubtitle}>We’ll alert you when something cool happens.</Text>
        </View>
        ) : (
        <FlatList
          data={notifications}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View>
              <Text style={styles.date}>{item.date}</Text>
              {item.items.map((notification) => (
                <Swipeable 
                  key={notification.id} 
                  renderRightActions={renderRightActions}
                  >
                  <View style={styles.notificationItem}>
                    <Ionicons name={notification.icon} size={26} style={styles.icon} />
                    <View style={styles.textContainer}>
                      <Text style={styles.title}>{notification.title}</Text>
                      <Text style={styles.description}>{notification.description}</Text>
                    </View>
                  </View>
                </Swipeable>
              ))}
            </View>
          )}
        />
    )}
      </GestureHandlerRootView>
    </ThemedView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 10
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd"
  },
  backIcon: {
    marginRight: 15
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    flex: 1
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20
  },
  emptySubtitle: {
    fontSize: 16,
    color: "gray",
    textAlign: "center",
    marginTop: 5
  },
  date:{
    fontSize: 18,
    fontWeight: "bold",
    color: "gray",
    marginTop: 20
  },
  notificationItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    backgroundColor: "#fff"
  },
  icon: {
    marginRight: 15
  },
  textContainer: {
    flex: 1
  },
  title: {
    fontSize: 18,
    fontWeight: "bold"
  },
  description: {
    fontSize: 16,
    color: "gray",
    marginTop: 2
  },
  deleteContainer: {
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "flex-end",
    height: "100%"
  },
  deleteButton: {
    padding: 20
  }
});