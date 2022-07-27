import React from 'react'
import { Text, FlatList, View, Button, TouchableOpacity } from 'react-native'

const RecipeListScreen = ({navigation, route}) => {
    console.log(route.params)
  return (
    
    <>
    {/* The recipe list to prepare cooking  */}
        {/* <Text style = {{alignSelf: 'center'}}>
            {route.params.name}
        </Text> */}

        <Text style={{alignSelf: 'center', marginTop: 50, fontSize: 25, width: 250, textAlign: 'center'}}>Ingredients you'll Need</Text>

        <FlatList 
            style = {{alignContent: 'center', textAlign: 'center'}}
            
    // Route.params.ingredients is going to the child of the route onto it reaches ingredients
            data = {route.params.ingredients}
            
            renderItem={({ item }) => (
                <View>
                    {/* Display the name of the ingredients ons the top of the screen */}
                    <Text style = {{
                        color: 'black',
                        fontWeight: 'bold',
                        alignSelf: 'center'
                        

                      
                      }}> {item} </Text>
                    
                </View>
                
              )} 
        />
        <View style = {{alignSelf:'center' }}>
          <TouchableOpacity 
                style = {{
                  backgroundColor: 'grey',
                  height: 50,
                  width: 100,
                  borderRadius: 20,
                  marginBottom: 250,
                  
                }}
                onPress = {() => navigation.navigate('CookingOptions', route.params)}
                >
              {/* Display the name of the category ons the top of the screen */}
              <Text style = {{
                  color: 'white', 
                  alignSelf:'center',
                  justifyContent: 'center',
                  alignContent: 'center',
                  alignItems: 'center',
                  
                }}> ready to cook? </Text>
              
            </TouchableOpacity>
        </View>
    </>
  )
}

export default RecipeListScreen