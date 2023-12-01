import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CategoriesTile from '../Components/CategoriesTile'
import { CATEGORIES } from '../data/dummy-data'
import { useNavigation } from '@react-navigation/native'



const CategoriesScreen = () => {
  const navigation = useNavigation();
  const handleOnpress=(item)=>{
navigation.navigate('MealOverview',{
  categoriesId: item.id
});
  }
  const renderCategory=({item})=>{
    return <CategoriesTile title={item.title} color={item.color} onPress={handleOnpress.bind(this,item)}/>
}
  return (
  
    <FlatList numColumns={2} data={CATEGORIES} keyExtractor={item=>item.id} renderItem={renderCategory}/>
  )
}

export default CategoriesScreen

const styles = StyleSheet.create({})