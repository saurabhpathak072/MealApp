import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MealDetails = ({duration, complexity, affordability, styleText,styleContainer}) => {
  return (
    <View style={[styles.details, styleContainer]}>
    <Text style={[styles.detailItem,styleText]}>{duration}m</Text>
    <Text style={[styles.detailItem,styleText]}>{complexity.toUpperCase()}</Text>
    <Text style={[styles.detailItem,styleText]}>{affordability.toUpperCase()}</Text>
  </View>
  )
}

export default MealDetails

const styles = StyleSheet.create({
    
    details: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 8,
    },
    detailItem: {
      marginHorizontal: 4,
      fontSize: 12,
    },
})