import { StyleSheet, Text, View } from "react-native";
import React from "react";

const SubTitle = ({ children }) => {
	return (
		<View style={styles.sutitleContainer}>
			<Text style={styles.subTitle}>{children} </Text>
		</View>
	);
};

export default SubTitle;

const styles = StyleSheet.create({
	subTitle: {
		color: "#e2b497",
		fontWeight: "bold",
		fontSize: 18,
		textAlign: "center",
	},
	sutitleContainer: {
		margin: 4,
		marginHorizontal: 12,
		marginVertical: 4,
		padding: 6,
		borderBottomColor: "#e2b497",
		borderBottomWidth: 2,
	},
});
