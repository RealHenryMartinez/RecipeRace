import React from 'react'
import { Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
// import { FlatList } from 'react-native-web'

const FoodListScreen = ({navigation, route}) => {

  console.log(route.params.category)
  return (
    <>
      <FlatList
        numColumns={2}
        columnWrapperStyle = {styles.row}

        data = {route.params.recepies}

        ListHeaderComponent = {
          <>
            <Text style = {{alignSelf: 'center'}}> {route.params.category} </Text>
          </>
        }
        renderItem={({ item }) => (
          <TouchableOpacity 
              style = {{backgroundColor: 'grey', height: 100, width: 100, borderRadius: 20}}
              // onPress = {() => navigation.navigate('FoodList', item)}
              >
            {/* Display the name of the category ons the top of the screen */}
            <Text style = {{color: 'white', alignSelf:'center'}}> {item.name} </Text>
            
          </TouchableOpacity>
        )} 
      />
    </>
  )
}

const styles = StyleSheet.create({
  row: {
      flex: 1,
      justifyContent: 'space-evenly',
      marginTop: 20
      // backgroundColor: 'red'
  },
  label: {
    backgroundColor: 'light-grey',
    
  }
})

export default FoodListScreen