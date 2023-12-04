import 'react-native-gesture-handler';
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./Screens/CategoriesScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import MealsOverviewScreen from "./Screens/MealsOverviewScreen";
import MealDetailScreen from "./Screens/MealDetailScreen";
import DrawerNav from "./Components/ui/Navigators/Drawer/DrawerNav";

export default function App() {
	const Stack = createNativeStackNavigator();
	return (
		<>
			<NavigationContainer>
				<Stack.Navigator screenOptions={{
					headerStyle:{backgroundColor:'#351401'},
					headerTintColor:'white',
				contentStyle:{backgroundColor:'#3f2f25'}
				}} initialRouteName='MealCategories'>
					<Stack.Screen
						name='MealCategories'
						component={DrawerNav}
						options={{
							headerShown:false
						
						}}
					/>
					<Stack.Screen
						name='MealOverview'
						component={MealsOverviewScreen}
						options={{
							title: "Meal Overview",
						}}
					/>
					<Stack.Screen name="MealDetail" component={MealDetailScreen} options={{
						title: "Meal Details"
					}}/>
				</Stack.Navigator>
			</NavigationContainer>
			{/* <CategoriesScreen /> */}
			<StatusBar style='light' />
		</>
	);
}

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		//  marginVertical: 16,

// 		backgroundColor: "#24180f",
// 	},
// });
