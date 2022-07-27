import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import CookingOptionsCard from '../../Cards/CookingOptionsCard'

const CookingOptionsScreen = ({ navigation, route }) => {
    
// this screen includes all stack navigation buttons 
// this is the first screen a user sees
// console.log(route.params.recipe)

  return (
    <>
     <Text style={styles.touch}>Choose option to cook from</Text>

    <View style={styles.space}>
        <CookingOptionsCard style={styles.buttonstyles} navigation={navigation} optionName="Both" data={route.params.video} dataTwo={route.params.recipe}/>
        
    </View>
        <View style={styles.space}>
        <CookingOptionsCard style={styles.buttonstyles} navigation={navigation} optionName="Video" data={route.params.video}  dataTwo={route.params.recipe}/>
        
    </View>
    <View style={styles.space}>
        <CookingOptionsCard style={styles.buttonstyles} navigation={navigation} optionName="Step by Step" data={route.params.video} dataTwo={route.params.recipe}/>
        
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
        marginBottom: -100,
        padding: 20,
        alignSelf: 'center'
    },
    touch: {
        
        justifyContent: "center",
        alignItems: 'center',
        flexDirection: 'row',
        display: 'flex',
        marginBottom: 10,
        marginTop: 60,
        alignSelf: 'center',
        fontSize: 25,
        width: 200,
        alignItems: 'center',
        textAlign: 'center',
        
    
      },

  });
  
