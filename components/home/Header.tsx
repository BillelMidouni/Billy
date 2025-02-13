import { padding_horizontal, size_icon } from "@/constants/Theme";
import { router } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Header({
  title = "",
  notification = true,
  goback = false,
  goBackCallback = () => {},
}) {
  return (
    <View
      style={[
        styles.header,
        {
          // justifyContent:
            // goback && !notification ? "flex-start" : "space-between",
        },
      ]}
    >
      {goback && (
        <TouchableOpacity
          style={{ width: size_icon, height: size_icon }}
          onPress={() => {
            router.back();
            goBackCallback();
          }}
        >
          <Image
            source={require("@/assets/icon/Arrow.png")}
            style={{ width: size_icon, height: size_icon }}
          />
        </TouchableOpacity>
      )}
      <Text
        style={[
          styles.title,
          {
            // marginLeft: goback && !notification ? 20 : 0,
          },
        ]}
      >
        {title}
      </Text>
        <TouchableOpacity
          style={{ width: size_icon, height: size_icon, opacity: notification ? 1 : 0 }}
          disabled={!notification}
          onPress={() => {
            router.push("notification");
          }}
        >
          <Image
            source={require("@/assets/icon/Bell.png")}
            style={{ width: size_icon, height: size_icon }}
          />
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    height: 120,
    width: "100%",
    paddingTop: 60,
    paddingHorizontal: padding_horizontal,
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    letterSpacing: -1.6,
    lineHeight: 32,
    fontWeight: "600",
    fontFamily: "General Sans",
    color: "#1a1a1a",
    textAlign: "left",
  },
});
