import 'react-native-gesture-handler';
import {StatusBar} from 'expo-status-bar';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import MealsOverviewScreen from './Screens/MealsOverviewScreen';
import MealDetailScreen from './Screens/MealDetailScreen';
import DrawerNav from './Components/ui/Navigators/Drawer/DrawerNav';
import FavoritesContextProvider from './store/favorite-context';
import {Provider} from 'react-redux';
import { store } from './redux/store';

export default function App() {
	const Stack = createNativeStackNavigator();
	return (
		<>
			<Provider store={store}>
				<FavoritesContextProvider>
					<NavigationContainer>
						<Stack.Navigator
							screenOptions={{
								headerStyle: {
									backgroundColor: '#351401',
								},
								headerTintColor: 'white',
								contentStyle: {
									backgroundColor: '#3f2f25',
								},
							}}
							initialRouteName='MealCategories'
						>
							<Stack.Screen
								name='MealCategories'
								component={DrawerNav}
								options={{
									headerShown: false,
								}}
							/>
							<Stack.Screen
								name='MealOverview'
								component={MealsOverviewScreen}
								options={{
									title: 'Meal Overview',
								}}
							/>
							<Stack.Screen
								name='MealDetail'
								component={MealDetailScreen}
								options={{
									title: 'Meal Details',
								}}
							/>
						</Stack.Navigator>
					</NavigationContainer>
				</FavoritesContextProvider>
			</Provider>
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
