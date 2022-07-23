import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import DifficultyCard from '../../Cards/DifficultyCard'

const SelectedDifficulty = ({ navigation }) => {
    
// this screen includes all stack navigation buttons 
// this is the first screen a user sees

  return (
    <View>
        <DifficultyCard navigation={navigation} titleName="bacon" />
        <DifficultyCard navigation={navigation} titleName="egg" />
        <DifficultyCard navigation={navigation} titleName="food flavor" />
    </View>
  )
}

export default SelectedDifficulty



