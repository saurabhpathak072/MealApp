import { Platform, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const CategoriesTile = ({ title, color, onPress }) => {
	return (
		<View style={styles.gridItems}>
			<Pressable
			onPress={onPress}
				android_ripple={{ color: "#ccc" }}
				style={({ pressed }) => [
					styles.button,
					pressed && styles.buttonPressed,
				]}
			>
				<View style={[styles.innerContainer,{backgroundColor:color}]}>
					<Text style={styles.title}>{title}</Text>
				</View>
			</Pressable>
		</View>
	);
};

export default CategoriesTile;

const styles = StyleSheet.create({
	gridItems: {
		flex: 1,
		elevation: 4,
		height: 150,
		margin: 16,
		borderRadius: 8,
		shadowColor: "black",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.25,
		shadowRadius: 8,
		backgroundColor: "white",
		overflow: Platform.OS === "android" ? "hidden" : "visible",
	},
	button: {
		flex: 1,
	},
	buttonPressed: {
		opacity: 0.5,
	},
	innerContainer: {
		flex: 1,
		padding: 16,
        borderRadius: 8,
		justifyContent: "center",
		alignItems: "center",
	},
	title: {
		fontWeight: "bold",
		fontSize: 18,
	},
});
