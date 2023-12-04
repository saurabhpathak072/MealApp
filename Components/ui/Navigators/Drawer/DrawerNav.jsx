import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Ionicons} from '@expo/vector-icons'

import { createDrawerNavigator } from '@react-navigation/drawer';
import CategoriesScreen from '../../../../Screens/CategoriesScreen';
import FavoriteScreen from '../../../../Screens/FavoriteScreen';

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <Drawer.Navigator screenOptions={{
      headerStyle:{backgroundColor:'#351401'},
					headerTintColor:'white',
          sceneContainerStyle:{backgroundColor:'#3f2f25'},
				drawerContentStyle:{backgroundColor:'#351401'},
        drawerInactiveTintColor:"white",
        drawerActiveTintColor:"#351401",
        drawerActiveBackgroundColor:"#e4baa1"
    }}>
          <Drawer.Screen name="allCategories" component={CategoriesScreen} options={{
            title:"All Categories",
            drawerIcon:({color,size})=><Ionicons name='list' size={size} color={color} />
          }}/>
          <Drawer.Screen name="favorite" component={FavoriteScreen} options={{
            title:"Favorites",
            drawerIcon:({color,size})=><Ionicons name='star' size={size} color={color} />
          }} />
        </Drawer.Navigator>
  )
}

export default DrawerNav

const styles = StyleSheet.create({})