import React from "react";
import { FlatList, View } from "react-native";
import CategoryCard from "../Components/CategoryCard";
import { CATEGORIES } from "../data/dummyData";

export default function CategoriesScreen({ navigation }) {
  function renderCategoryItem(item) {
    function pressHandler() {
      navigation.navigate("Meal Deatils", {
        categoryId: item.id,
      });
    }
    return (
      <CategoryCard
        title={item.title}
        color={item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={(item) => renderCategoryItem(item.item)}
      numColumns={2}
    />
  );
}
