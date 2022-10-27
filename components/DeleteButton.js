import { View, StyleSheet, Pressable, Text } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
export default function DeleteButton({ onDeletePressed }) {
  return (
    <Pressable
      onPress={onDeletePressed}
      style={({ pressed }) => {
        console.log(123456789)
        return pressed && styles.pressedItm;
      }}
      android_ripple={{ color: "#223355", foreground: true }}
    >
      <View style={styles.button}>
        <MaterialIcons name="delete-outline" size={24} color="black" />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    fontSize: 18,
    justifyContent: "center",
  },
  pressedItm: {
    opacity: 0.5,
    backgroundColor: "#222",
  },
});