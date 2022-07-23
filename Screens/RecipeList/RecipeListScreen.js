import React from 'react'
import { Text, FlatList, View } from 'react-native'

const RecipeListScreen = ({navigation, route}) => {
    console.log(route.params.ingredients)
  return (
    
    <>
    {/* The recipe list to prepare cooking  */}
        <Text style = {{alignSelf: 'center'}}>
            {route.params.name}
        </Text>

        <Text>Ingredients you Need: </Text>

        <FlatList 
            style = {{alignContent: 'center'}}
            
    // Route.params.ingredients is going to the child of the route onto it reaches ingredients
            data = {route.params.ingredients}
            
            renderItem={({ item }) => (
                <View>
                    {/* Display the name of the category ons the top of the screen */}
                    <Text style = {{color: 'black'}}> {item} </Text>
                
                </View>
              )} 
        />
        
    </>
  )
}

export default RecipeListScreen