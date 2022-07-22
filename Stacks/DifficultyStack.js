import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Difficulty from '../Screens/Difficulty/Difficulty';
import SelectedDifficulty from '../Screens/Difficulty/SelectedDifficulty';

const Stack = createNativeStackNavigator();


/* 
- Stack tabs for First home page
- difficulty -> selected difficulty -> Food List
*/
const DifficultyStack = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Difficulty" component={Difficulty} />
        <Stack.Screen 
          name="SelectedDifficulty"
          options={({ route }) => ({ title: route.params.title })} 
          component={SelectedDifficulty} />
      </Stack.Navigator>
  )
}

export default DifficultyStack

