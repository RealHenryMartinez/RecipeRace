import React from 'react'

import { Text, FlatList, View, Button, TouchableOpacity } from 'react-native'

const RecipeListScreen = ({navigation, route}) => {

  return (
    
    <>
    {/* The recipe list to prepare cooking  */}
        {/* <Text style = {{alignSelf: 'center'}}>
            {route.params.name}
        </Text> */}

        <Text style={{
            alignSelf: 'center',
            marginTop: 50,
            fontSize: 25,
            width: 250,
            textAlign: 'center',
            marginBottom: 20,
          }}>Ingredients you'll Need</Text>

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
                  width: 234,
                  alignItems: 'center',
                  height: 64,
                  borderRadius: 15,
                  elevation: 1,
                  justifyContent: "center",
                  alignItems: 'center',
                  flexDirection: 'row',
                  display: 'flex',
                  backgroundColor: '#5BBEB3',
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