import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function IconButton({ pressHandler, icon, color }) {
  return (
    <Pressable
      onPress={pressHandler}
      style={(pressed) => pressed && styles.pressed}
    >
      <Ionicons name={icon} color={color} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: { opacity: 0.7 },
});
