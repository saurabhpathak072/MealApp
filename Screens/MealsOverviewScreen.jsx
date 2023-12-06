import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";

import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealsList from "../Components/ui/MealsList/MealsList";

function MealsOverviewScreen({ route }) {
  const catId = route.params.categoriesId;
  const navigation = useNavigation();

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const category = CATEGORIES.find((cat) => cat.id === catId);
    navigation.setOptions({
      title: category.title,
    });
  }, [catId, navigation]);
  // const handlePressHandler = (item) => {
  //   if (item)
  //     navigation.navigate("MealDetail", {
  //       mealId: item.id,
  //     });
  // };
  
  return <MealsList data={displayedMeals} />;
}

export default MealsOverviewScreen;
