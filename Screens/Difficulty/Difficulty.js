import React from 'react'
import { Text, View } from 'react-native'
import DifficultyCard from '../../Cards/DifficultyCard'

const Difficulty = ({ navigation }) => {
    
// this screen includes all stack navigation buttons 
// this is the first screen a user sees

  return (
    <View>
        <DifficultyCard navigation={navigation} titleName="Beginner" />
        <DifficultyCard navigation={navigation} titleName="Intermediate" />
        <DifficultyCard navigation={navigation} titleName="Advanced" />
    </View>
  )
}

export default Difficulty

