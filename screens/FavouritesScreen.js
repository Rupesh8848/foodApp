import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import MealLists from "../Components/MealLists";
import { MEALS } from "../data/dummyData";

export default function FavouritesScreen() {
  const { ids } = useSelector((state) => state.favourite);
  const favouriteMeals = MEALS.filter((meal) => ids.includes(meal.id));

  if (favouriteMeals.length == 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>No favourite meals yet.</Text>
      </View>
    );
  }

  return <MealLists data={favouriteMeals} />;
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
