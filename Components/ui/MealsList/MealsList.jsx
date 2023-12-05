import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import MealItem from "./MealItem";
import { useNavigation } from "@react-navigation/native";

const MealsList = ({ data }) => {

  const navigation = useNavigation();
  
  const handlePressHandler = (item) => {
    if (item)
      navigation.navigate("MealDetail", {
        mealId: item.id,
      });
  };
  function renderMealItem(itemData) {
    const item = itemData.item;

    const mealItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
      id: item.id,
    };
    return (
      <MealItem
        onPress= { handlePressHandler.bind(this, item)}
        {...mealItemProps}
      />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
