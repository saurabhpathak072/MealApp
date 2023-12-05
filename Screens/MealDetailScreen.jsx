import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useContext, useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../Components/MealDetails";
import SubTitle from "../Components/MealDetails/SubTitle";
import List from "../Components/MealDetails/List";
import IconButton from "../Components/ui/IconButton";
import { FavoritesContext } from "../store/favorite-context";


const MealDetailScreen = () => {
    const {ids,addFavorite,removeFavorite} = useContext(FavoritesContext);
	const route = useRoute();
	const navigation = useNavigation();
	const mealId = route.params.mealId;
	const mealDetail = MEALS.find((meal) => meal.id === mealId);

	const mealIsFavorite = ids.includes(mealId);

	const changeFavoriteStatusHandler=()=>{
		if (mealIsFavorite) {
			removeFavorite(mealId)
		}else{
			addFavorite(mealId)
		}
	}

	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight:()=>{
				return <IconButton size={28} color={"white"} name={`${mealIsFavorite ? "star":"star-outline"}`} onPress={changeFavoriteStatusHandler}/>
			}
		})
	
	
	}, [navigation,changeFavoriteStatusHandler])
	return (
		<ScrollView style={styles.rootContainer}>
			<Image source={{ uri: mealDetail.imageUrl }} style={styles.image} />
			<Text style={styles.title}>{mealDetail.title}</Text>
			<View>
				<MealDetails
					duration={mealDetail.duration}
					complexity={mealDetail.complexity}
					affordability={mealDetail.affordability}
					styleText={styles.detailText}
				/>
			</View>
			<View style={styles.listOuterContainer}>

			<View style={styles.listContainer}>

			<SubTitle>Ingridients</SubTitle>
			<List data={mealDetail.ingredients} />
			<SubTitle>Steps:</SubTitle>
			<List data={mealDetail.steps} />
			</View>
			</View>

			<Text>MealDetailScreen - {mealDetail.title}</Text>
		</ScrollView>
	);
};

export default MealDetailScreen;

const styles = StyleSheet.create({
	rootContainer:{
		marginBottom: 32
	},
	image: {
		width: "100%",
		height: 350,
	},
	title: {
		fontWeight: "bold",
		fontSize: 24,
		textAlign: "center",
		color: "white",
		margin: 8,
		padding: 8,
	},
	detailText: {
		color: "white",
	},
	listContainer:{
		width: '80%'
	},
	listOuterContainer:{
		alignItems: 'center'
	}
});
