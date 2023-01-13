import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import MealItem from "../Components/MealItem";
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

  const renderItem = (item) => {
    // console.log(item);
    return (
      <View>
        <MealItem item={item.item} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
