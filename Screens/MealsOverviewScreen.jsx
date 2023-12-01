import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import MealItem from "../Components/MealItem";

import { CATEGORIES, MEALS } from "../data/dummy-data";

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

	const handlePressHandler = (item) => {
    if(item)
		navigation.navigate("MealDetail",{
      mealId: item.id
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
		return <MealItem onPress={handlePressHandler.bind(this, item)} {...mealItemProps} />;
	}

	return (
		<View style={styles.container}>
			<FlatList
				data={displayedMeals}
				keyExtractor={(item) => item.id}
				renderItem={renderMealItem}
			/>
		</View>
	);
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
	},
});
