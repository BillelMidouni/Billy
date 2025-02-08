import { size_icon, size_icon_small } from "@/constants/Theme";
import React from "react";
import { Modal, View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

interface AppModalProps {
  isVisible: boolean;
  title?: string;
  overlay?: boolean;
  children?: React.ReactNode;
  onClose: () => void;
}

const SlideModal: React.FC<AppModalProps> = ({ isVisible, overlay, title, children, onClose }) => {
  return (
    <Modal transparent visible={isVisible} onRequestClose={onClose}>
        <View style={[styles.overlay, { backgroundColor: overlay ? "rgba(0, 0, 0, 0.2)" : "transparent" }]}>
            <View style={styles.modalContainer}>
                <View style={styles.bar}/>
                <View style={styles.header}>
                    {title && <Text style={styles.title}>{title}</Text>}
                    <TouchableOpacity onPress={onClose}>
                      <Image style={styles.closeButton} resizeMode="cover" source={require("@/assets/icon/Close.png")} />
                    </TouchableOpacity>
                </View>
                <View style={styles.divider} />
                <View style={styles.content}>{children}</View>
            </View>
        </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    width: "100%",
    height: "100%",
  },
  modalContainer: {
    width: "100%",
    height: 400,
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
    marginBottom: 20,
  },
  closeButton: {
    width: size_icon_small,
    height: size_icon_small,
  },
  closeText: {
    color: "white",
    fontSize: 16,
  },
});

export default SlideModal;