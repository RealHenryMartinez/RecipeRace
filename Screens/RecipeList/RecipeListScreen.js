import React from 'react'
import { Text, FlatList, View, Button, TouchableOpacity } from 'react-native'

const RecipeListScreen = ({navigation, route}) => {
    console.log(route.params)
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
                    {/* Display the name of the ingredients ons the top of the screen */}
                    <Text style = {{color: 'black'}}> {item} </Text>
                    
                </View>
                
              )} 
        />
        <View style = {{alignSelf:'center' }}>
          <TouchableOpacity 
                style = {{backgroundColor: 'grey', height: 50, width: 100, borderRadius: 20}}
                onPress = {() => navigation.navigate('CookingOptions', route.params)}
                >
              {/* Display the name of the category ons the top of the screen */}
              <Text style = {{color: 'white', alignSelf:'center' , justifyContent: 'center' , alignContent: 'center', alignItems: 'center' }}> ready to cook? </Text>
              
            </TouchableOpacity>
        </View>
    </>
  )
}

export default RecipeListScreen