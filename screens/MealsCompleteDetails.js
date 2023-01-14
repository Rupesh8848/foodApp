import React, { useContext } from "react";
import {
  Button,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import IconButton from "../Components/IconButton";
import List from "../Components/List";
import { MEALS } from "../data/dummyData";
import { FavouriteContext } from "../store/context/favourites-context";
export default function MealsCompleteDetails({ route, navigation }) {
  const { mealId } = route.params;

  const { ids, addFavourite, removeFavourite } = useContext(FavouriteContext);

  const mealIsFavourite = ids.includes(mealId);

  function changeFavouriteStatusHandler() {
    if (mealIsFavourite) {
      removeFavourite(mealId);
    } else {
      addFavourite(mealId);
    }
  }

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title,
      headerRight: ({ color, size }) => {
        return (
          <IconButton
            pressHandler={changeFavouriteStatusHandler}
            icon={mealIsFavourite ? "star" : "star-outline"}
            color="white"
            size={size}
          />
        );
      },
    });
  }, [title, navigation, changeFavouriteStatusHandler]);

  const {
    title,
    imageUrl,
    ingredients,
    steps,
    duration,
    complexity,
    affordability,
  } = MEALS.filter((meal) => meal.id === mealId)[0];
  return (
    <>
      <ScrollView>
        <View style={styles.outerContainer}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={{ uri: imageUrl }} />
          </View>

          <Text style={styles.title}>{title}</Text>

          <View style={styles.details}>
            <Text style={styles.extraInfo}>{duration} mins</Text>
            <Text style={styles.extraInfo}>{complexity.toUpperCase()}</Text>
            <Text style={styles.extraInfo}>{affordability.toUpperCase()}</Text>
          </View>

          <View style={styles.listContainer}>
            <View style={{ width: "100%" }}>
              <View style={styles.subtitleContainer}>
                <Text style={styles.subtitle}>Ingredients:</Text>
              </View>
              <List data={ingredients} />
              <View style={styles.subtitleContainer}>
                <Text style={styles.subtitle}>Steps:</Text>
              </View>
              <List data={steps} />
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  outerContainer: {
    flex: 1,
  },
  scrollView: {
    width: "100%",
  },
  imageContainer: {},
  image: {
    width: "100%",
    height: 300,
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
  subtitle: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",
    padding: 6,
    textAlign: "center",
  },
  subtitleContainer: {
    marginHorizontal: 15,
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
  },
  listContainer: {
    maxWidth: "80%",
    alignItems: "center",
    textAlign: "center",
  },
});
