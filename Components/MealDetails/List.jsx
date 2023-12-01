import { StyleSheet, Text, View } from "react-native";
import React from "react";

const List = ({ data }) => {
	return data.map((datapoint, index) => {
		return (
			// <View key={index} style={styles.listitem}>
			// 	<Text style={styles.itemtext}>{datapoint}</Text>;
			// </View>
            <View key={index} style={styles.listitem}>
                <Text style={styles.itemtext}>{datapoint}</Text>
            </View>
		);
	});
};

export default List;

const styles = StyleSheet.create({
	listitem: {
		borderRadius: 6,
		paddingHorizontal: 8,
		paddingVertical: 4,
		marginVertical: 4,
		marginHorizontal: 12,
		backgroundColor: "#e2b497",
	},
	itemtext: {
		color: "#351401",
		textAlign: "center",
	},
});
