import { time_animation } from "@/constants/animation";
import { size_icon, size_icon_small } from "@/constants/Theme";
import { use } from "i18next";
import React, { useEffect } from "react";
import { Modal, View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';

interface AppModalProps {
  isVisible: boolean;
  title?: string;
  overlay?: boolean;
  children?: React.ReactNode;
  callbackOnClose: () => void;
  onClose: () => void;
}

const SlideModal: React.FC<AppModalProps> = ({ isVisible, overlay, title, children, callbackOnClose, onClose }) => {
  const translateY = useSharedValue(0);

  useEffect(() => {
    translateY.value = withSpring(
      isVisible ? 0 : 450, 
      {
        duration: 500,
        dampingRatio: 1,
        stiffness: 100,
        overshootClamping: false,
        restDisplacementThreshold: 0.01,
        restSpeedThreshold: 2,
      });
  }, [isVisible]);

  const close_with_animation = () => {
    callbackOnClose();
    new Promise((resolve) => {
      translateY.value = withSpring(900, {
        duration: 1000,
        dampingRatio: 1,
        stiffness: 100,
        overshootClamping: false,
        restDisplacementThreshold: 0.01,
        restSpeedThreshold: 2,
      });
      setTimeout(() => {
        resolve(true);
      }, time_animation);
    }).then(() => {
      onClose();
    });
  }

  const render_modal = () => {
    return(
      <View style={styles.modalContainer}>
        <View style={styles.bar}/>
        <View style={styles.header}>
            {title && <Text style={styles.title}>{title}</Text>}
            <TouchableOpacity onPress={close_with_animation}>
              <Image style={styles.closeButton} resizeMode="cover" source={require("@/assets/icon/Close.png")} />
            </TouchableOpacity>
        </View>
        <View style={styles.divider} />
        <View style={styles.content}>
        {children &&
          React.Children.map(children, (child) =>
            React.isValidElement(child) ? React.cloneElement(child as React.ReactElement<any>, { onClose: close_with_animation }) : child
          )}
        </View>
      </View>
    )
  }

  if (overlay){
    return(
      isVisible && 
      <Animated.View 
        style={[
          {backgroundColor: overlay ? "rgba(0, 0, 0, 0.2)" : "transparent", ...styles.overlay},
          {transform: [{translateY: translateY}]}
          ]}>
       {render_modal()}
      </Animated.View>
    );
  }

  return (
    isVisible && 
    <Animated.View
      style={[
        {transform: [{translateY: translateY}]},
      ]}>
      {render_modal()}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1, 
    position: "absolute",
    width: "100%", 
    height: "100%"
  },
  modalContainer: {
    width: "100%",
    height: 450,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    paddingHorizontal: 20,
    alignItems: "center",
    position: "absolute",
    bottom: 0,
  },
  bar: {
    width: 60,
    height: 5,
    backgroundColor: "#e6e6e6",
    borderRadius: 40,
    marginBottom: 20,
  },
  header:{
    height: 40,
    width: "100%",
    alignContent: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  divider: {
    borderStyle: "solid",
    borderColor: "#e6e6e6",
    borderTopWidth: 1,
    width: "100%",
    height: 1,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: "General Sans",
    color: "#1a1a1a",
    textAlign: "center",
  },
  content: {
    width: "100%",
    height: "100%",
    marginBottom: 20,
  },
  closeButton: {
    width: 20,
    height: 20,
  },
  closeText: {
    color: "white",
    fontSize: 16,
  },
});

export default SlideModal;