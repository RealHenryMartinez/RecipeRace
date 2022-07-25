import React from 'react'
import { Button, View, StyleSheet } from 'react-native'


// This is the functionality of the buttons 
// Difficulty button (function) -> passed to Difficulty.js

const CookingOptionsCard = (props) => {
    const handleDifficultyPress = (name, items) => {
        // console.log("tap", name),
        /* 
        used to navigate throughout different categories of furniture
        navigation is declared in the main component 
        */
          props.navigation.navigate(props.optionName, { title: props.optionName });
      };
  return (
    <View>
        <Button style={styles.container} onPress={handleDifficultyPress} title={props.optionName}/>
        
    </View>
  )
}

export default CookingOptionsCard

const styles = StyleSheet.create({
    container: {
        padding: 20,
          backgroundColor: '#48d1cc',
          marginVertical: 10,
          width: 150,
          height: 128,
          borderRadius: 15,
          elevation: 1,
          alignItems: 'center',
          justifyContent: "center",
          marginHorizontal: 10,
          flexDirection: 'row',
          display: 'flex',

      },
  });