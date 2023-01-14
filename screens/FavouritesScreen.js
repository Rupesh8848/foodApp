import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MealsList from "../Components/MealsList";
import { MEALS } from "../data/dummyData";
import { FavouriteContext } from "../store/context/favourites-context";

export default function FavouritesScreen() {
  const { ids } = React.useContext(FavouriteContext);

  const favouriteMeals = MEALS.filter((meal) => ids.includes(meal.id));

  if (favouriteMeals.length == 0) {
    return (
      <View style={styels.rootContainer}>
        <Text style={styels.text}>No favourite meals yet.</Text>
      </View>
    );
  }

  return <MealsList data={favouriteMeals} />;
}

const styels = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
