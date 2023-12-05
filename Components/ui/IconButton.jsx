import { Pressable, StyleSheet, Text, View } from "react-native";

import React from "react";
import Ionicons from '@expo/vector-icons/Ionicons';

const IconButton = ({ name, size, color, onPress }) => {
	const handlePressButton = () => {
      
		onPress();
	};
	return (
		<Pressable onPress={handlePressButton}  style={({pressed})=>pressed && styles.buttonPressed}>
			<Ionicons name={name} size={size} color={color} />
		</Pressable>
	);
};

export default IconButton;

const styles = StyleSheet.create({
    buttonPressed:{
        opacity: 0.7
    }
});
