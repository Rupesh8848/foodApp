import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function CategoryCard({ title, color, onPress }) {
  return (
    <>
      <View style={[styles.categoryContainer, { backgroundColor: color }]}>
        <Pressable
          style={styles.pressableStyle}
          android_ripple={{ color: "#ccc" }}
          onPress={onPress}
        >
          <View style={styles.innerContainer}>
            <Text style={styles.title}>{title}</Text>
          </View>
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  categoryContainer: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 5,
    overflow: "hidden",
    // for ios shadow
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  pressableStyle: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
