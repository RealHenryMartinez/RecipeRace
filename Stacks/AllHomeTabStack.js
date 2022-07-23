import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import RecipeListScreen from '../Screens/RecipeList/RecipeListScreen';
import FoodListScreen from '../Screens/FoodList/FoodListScreen';
import Difficulty from '../Screens/Difficulty/Difficulty';
import Beginner from '../Screens/Difficulty/Beginner';
import Intermediate from '../Screens/Difficulty/Intermediate';
import Advance from '../Screens/Difficulty/Advance';


const Stack = createNativeStackNavigator();


/* 
- Stack tabs for First home page
- difficulty -> selected difficulty -> Food List
*/
const AllHomeTabStack = () => {
  return (
    // HERE IS ALL THE "STACK TABS" for each part of the HOME TAB //
      <Stack.Navigator>
        <Stack.Screen 
          name="Difficulty" 
          component={Difficulty} />
        <Stack.Screen
          name = "Beginner"
          component = {Beginner}
        />
        <Stack.Screen
          name = "Intermediate"
          component = {Intermediate}
        />
        <Stack.Screen
          name = "Advance"
          component = {Advance}
        />
        <Stack.Screen 
            options={({ route }) => ({ title: route.params.title })} 
            name="FoodList" 
            component={FoodListScreen} />

        <Stack.Screen
          // options={({ route }) => ({ title: route.params.title })} 
          name="RecipeList" 
          component={RecipeListScreen} 
        />
      </Stack.Navigator>
  )
}

export default AllHomeTabStack

