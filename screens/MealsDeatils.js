import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import MealItem from "../Components/MealItem";
import MealsList from "../Components/MealsList";
import { MEALS, CATEGORIES } from "../data/dummyData";

export default function MealsDeatils({ route, navigation }) {
  const { categoryId } = route.params;
  console.log(categoryId);
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0;
  });

  React.useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((category) => {
      return category.id == categoryId;
    }).title;
    navigation.setOptions({ title: categoryTitle });
  }, [categoryId, navigation]);

  return <MealsList data={displayedMeals} />;
}
