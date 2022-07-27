import React from 'react'
import {Text, View, TouchableHighlight, TouchableOpacity, FlatList, StyleSheet, Image} from 'react-native'
import BeginnerCard from '../../Cards/BeginnerCard';
import VideoCard from '../../Cards/VideoCard'
// import { FlatList } from 'react-native-web'
// import { View } from 'react-native-web'



const Beginner = ({navigation}) => {

// ADDING FOOD OPTIONS FOR THE FOOD CATEGORY
let Food1 = require('../../assets/crispy-fried-egg-recipe.png');



    const [categories, setCategories] = React.useState([
    {
        
        category: "Egg",
        image: Food1,
        recepies: [
            {
                name: 'EGG Cake',
                ingredients: ['milk', 'carrot', 'sugar', 'spices', 'more carrots', 'plate'],
                
                video: "8PhdfcX9tG0",
                recipe: ["1. Begin to cook", "2. Begin to boil"],
            },
            {
                name: 'rice and eggs',
                ingredients: ['any', 'something', 'carrot'],
                video: "rokGy0huYEA",
                recipe: ["1. Begin to cook", "2. Begin to boil"],
            }
        ]       
    },
    {
        category: 'Pear',
        recepies: [
            {
                name: 'Le Pear Cake',
                ingredients: ['milk', 'apple', 'sugar', 'spices', 'more appple', 'plate']
                
            },
            {
                name: 'Pear mash',
                ingredients: ['any', 'something', 'apple']
            }
        ]
    },
    {
        category: 'Sanwich',
        recepies: [
            {
                name: 'PB&J',
                ingredients: ['huevo', 'carrot', 'sugar', 'spices', 'more huevos', 'plate']
            },
            {
                name: 'HAM',
                ingredients: ['any', 'something', 'huevo']
            }
        ]
    },
    {
        category: 'bread',
        recepies: [
            {
                name: 'bread Cake',
                ingredients: ['milk', 'bread', 'sugar', 'spices', 'more bread', 'plate']
            },
            {
                name: 'something else',
                ingredients: ['any', 'something', 'bread']
            }
        ]
    },
    {
        category: "Egg",
        recepies: [
            {
                name: 'EGG Cake',
                ingredients: ['milk', 'carrot', 'sugar', 'spices', 'more carrots', 'plate']
            },
            {
                name: 'rice and eggs',
                ingredients: ['any', 'something', 'carrot']
            }
        ]       
    },
    {
        category: 'Pear',
        recepies: [
            {
                name: 'Le Pear Cake',
                ingredients: ['milk', 'apple', 'sugar', 'spices', 'more appple', 'plate']
            },
            {
                name: 'Pear mash',
                ingredients: ['any', 'something', 'apple']
            }
        ]
    },
    {
        category: 'Sanwich',
        recepies: [
            {
                name: 'PB&J',
                ingredients: ['huevo', 'carrot', 'sugar', 'spices', 'more huevos', 'plate']
            },
            {
                name: 'HAM',
                ingredients: ['any', 'something', 'huevo']
            }
        ]
    },
    {
        category: 'bread',
        recepies: [
            {
                name: 'bread Cake',
                ingredients: ['milk', 'bread', 'sugar', 'spices', 'more bread', 'plate']
            },
            {
                name: 'something else',
                ingredients: ['any', 'something', 'bread']
            }
        ]
    }

])


  return (
    <View style = {{flex: 1}}>
        <FlatList
            data = {categories}

            ListHeaderComponent = {
                <>
                  <Text style = {{alignSelf: 'center'}}> Beginner </Text>
                </>
              }
            columnWrapperStyle = {styles.row}
            numColumns = {2}
            renderItem={({ item }) => (
                <TouchableOpacity 
                    style = {{
                        backgroundColor: 'grey', 
                        height: 164, 
                        width: 188, 
                        borderRadius: 10, 
                        backgroundColor: '#5BBEB3', 
                        borderColor: '#5BBEB3'}}
                    onPress = {() => navigation.navigate('FoodList', item)}>
                  {/* Display the name of the category ons the top of the screen */}
                  <Image source = { item.image } style = {{
                        width: 188, 
                        height: 126, 
                        borderRadius: 10, 
                        borderWidth: 2, 
                        borderColor: '#5BBEB3',
                        borderBottomLeftRadius: 0,
                        borderBottomRightRadius: 0,
                    }} />
                  <Text style = {{
                            color: 'white', 
                            alignSelf:'center',
                            
                                }}> {item.category} </Text>
                </TouchableOpacity>
              )}
        />
    </View>
  )
}


const styles = StyleSheet.create({
    row: {
        flex: 1,
        justifyContent: 'space-evenly',
        marginTop: 20,
        // backgroundColor: 'red'
    },
})
export default Beginner