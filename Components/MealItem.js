import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function MealItem({ item }) {
  const { title, imageUrl, duration, complexity, affordability, id } = item;
  const navigation = useNavigation();
  return (
    <View style={styles.outerContiner}>
      <Pressable
        style={{ flex: 1 }}
        android_ripple={{ color: "#9A9A9A" }}
        onPress={() =>
          navigation.navigate("MealCompleteDetails", {
            mealId: id,
          })
        }
      >
        <View style={{ flex: 1, width: "100%" }}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={{ uri: imageUrl }} />
          </View>
          <View style={styles.rightContainer}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.details}>
              <Text style={styles.extraInfo}>{duration} mins</Text>
              <Text style={styles.extraInfo}>{complexity.toUpperCase()}</Text>
              <Text style={styles.extraInfo}>
                {affordability.toUpperCase()}
              </Text>
            </View>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContiner: {
    margin: 10,
    backgroundColor: "white",
    borderRadius: 8,
    overflow: "hidden",
    elevation: 4,
  },
  imageContainer: {
    flex: 2,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
  rightContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  extraInfo: {
    color: "#9A9A9A",
    marginHorizontal: 10,
    marginBottom: 10,
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
