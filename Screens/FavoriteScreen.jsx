import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { FavoritesContext } from "../store/favorite-context";
import { MEALS } from "../data/dummy-data";
import MealsList from "../Components/ui/MealsList/MealsList";
import { useSelector } from "react-redux";

const FavoriteScreen = () => {

  const {ids} = useSelector(state=>state.favoriteMeal);
  const favoriteMeals = MEALS.filter((meal) => ids.includes(meal.id));
  if (
    favoriteMeals &&
    Array.isArray(favoriteMeals) &&
    favoriteMeals.length === 0
  ) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no Favorite meals yet</Text>
      </View>
    );
  }
  return <MealsList data={favoriteMeals} />;
};

export default FavoriteScreen;

const styles = StyleSheet.create({
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
