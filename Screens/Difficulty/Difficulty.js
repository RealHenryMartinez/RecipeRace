import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import DifficultyCard from '../../Cards/DifficultyCard'

const Difficulty = ({ navigation }) => {
    
// this screen includes all stack navigation buttons 
// this is the first screen a user sees

  return (
    <>
    <View style={styles.space}>
        <DifficultyCard style={styles.buttonstyles} navigation={navigation} titleName="Beginner" />
        
    </View>
        <View style={styles.space}>
        <DifficultyCard style={styles.buttonstyles} navigation={navigation} titleName="Intermediate" />
        
    </View>
    <View style={styles.space}>
        <DifficultyCard style={styles.buttonstyles} navigation={navigation} titleName="Advance" />
        
    </View>
    </>
  )
}

export default Difficulty

const styles = StyleSheet.create({
    buttonstyles: {
        justifyContent: 'center',
        alignSelf: 'center',


    },
    space: {
        height: 200,
        width: 234,
        marginBottom: 20,
        padding: 20,
        alignSelf: 'center'
        
    }
  });
  
