import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import CookingOptionsCard from '../../Cards/CookingOptionsCard'

const CookingOptionsScreen = ({ navigation }) => {
    
// this screen includes all stack navigation buttons 
// this is the first screen a user sees

  return (
    <>
    <View style={styles.space}>
        <CookingOptionsCard style={styles.buttonstyles} navigation={navigation} optionName="Both" />
        
    </View>
        <View style={styles.space}>
        <CookingOptionsCard style={styles.buttonstyles} navigation={navigation} optionName="Video" />
        
    </View>
    <View style={styles.space}>
        <CookingOptionsCard style={styles.buttonstyles} navigation={navigation} optionName="RecipeText" />
        
    </View>
    </>
  )
}

export default CookingOptionsScreen

const styles = StyleSheet.create({
    buttonstyles: {
        justifyContent: 'center',
        alignSelf: 'center'

    },
    space: {
        height: 200,
        width: 234,
        marginBottom: 20,
        padding: 20,
        alignSelf: 'center'
    }
  });
  
