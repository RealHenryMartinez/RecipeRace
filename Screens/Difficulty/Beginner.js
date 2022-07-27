import React from 'react'
import {Text, View, TouchableHighlight, TouchableOpacity, FlatList, StyleSheet, Image} from 'react-native'
import BeginnerCard from '../../Cards/BeginnerCard';
import VideoCard from '../../Cards/VideoCard'
// import { FlatList } from 'react-native-web'
// import { View } from 'react-native-web'



const Beginner = ({navigation}) => {

// ADDING CATEGORY FOOD IMAGES
let Food1 = require('../../assets/crispy-fried-egg-recipe.png');
let Food2 = require('../../assets/ceviche-de-camaron.png');
let Food3 = require('../../assets/Molé.png');
let Food4 = require('../../assets/Quesadilla.png');
let Food5 = require('../../assets/Creamy-Tomato-Spinach-Pasta-close.png');
let Food6 = require('../../assets/cereal.png');

// ADDING FOOD IMAGES FOR FOOD LIST
let Food7 = require('../../assets/Oaxaca-M-Q.png');
let Food8 = require('../../assets/basic-Q.png');
let Food9 = require('../../assets/fancy-Q.png');
let Food10 = require('../../assets/cali-mex-quesadillas.png');
let Food11 = require('../../assets/Veggie-Q.png');
let Food12 = require('../../assets/spicy-chicken-quesadilla-menuitem.png');


// ADDING FOOD OPTIONS FOR THE FOOD CATEGORY
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
        category: 'Ceviche',
        image: Food2,
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
        category: 'Molé',
        image: Food3,
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
        category: 'Quesadillas',
        image: Food4,
        recepies: [
            {
                name: 'oaxaca quesadilla',
                ingredients: ['milk', 'bread', 'sugar', 'spices', 'more bread', 'plate'],
                imagerecipe: Food7,
            },
            {
                name: 'cheese quesadilla',
                ingredients: ['any', 'something', 'bread'],
                imagerecipe: Food8,
            },
            {
                name: 'bulogi chicken quesadilla',
                ingredients: ['any', 'something', 'bread'],
                imagerecipe: Food9,
            },
            {
                name: 'hong kong quesadilla',
                ingredients: ['any', 'something', 'bread'],
                imagerecipe: Food10,
            },
            {
                name: 'thailand quesadilla',
                ingredients: ['any', 'something', 'bread'],
                imagerecipe: Food11,
                video: "8PhdfcX9tG0",
                recipe: ["1. Begin to cook", "2. Begin to boil"],
            },
            {
                name: 'spicy chicken quesadilla',
                ingredients: ['any', 'something', 'bread'],
                imagerecipe: Food12,
            },
        ]
    },
    {
        category: "Pasta",
        image: Food5,
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
        category: 'Cereals',
        image: Food6,
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
    // {
    //     category: 'Sanwich',
    //     recepies: [
    //         {
    //             name: 'PB&J',
    //             ingredients: ['huevo', 'carrot', 'sugar', 'spices', 'more huevos', 'plate']
    //         },
    //         {
    //             name: 'HAM',
    //             ingredients: ['any', 'something', 'huevo']
    //         }
    //     ]
    // },
    // {
    //     category: 'bread',
    //     recepies: [
    //         {
    //             name: 'bread Cake',
    //             ingredients: ['milk', 'bread', 'sugar', 'spices', 'more bread', 'plate']
    //         },
    //         {
    //             name: 'something else',
    //             ingredients: ['any', 'something', 'bread']
    //         }
    //     ]
    // }

])


  return (
    <View style = {{flex: 1, backgroundColor: 'white'}}>
        <FlatList
            data = {categories}

            ListHeaderComponent = {
                <>
                  <Text style = {{
                        alignSelf: 'center',
                        marginTop: 60,
                        fontSize: 28,
                        
                    
                    }}> Beginner </Text>
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
                            alignSelf:'flex-start',
                            marginTop: 7,

                            
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