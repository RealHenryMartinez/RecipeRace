import React from 'react'
import ChooseLandOptionCard from '../../Cards/ChooseLandOptionCard'

const ChooseLandOption = () => {
  return (
    <>
     <Text style={styles.touch}>Choose option to go to</Text>
        <View style={styles.space}>
        <ChooseLandOptionCard style={styles.buttonstyles} navigation={navigation} optionName="Pet" />
        
    </View>
    <View style={styles.space}>
        <ChooseLandOptionsCard style={styles.buttonstyles} navigation={navigation} optionName="Reward" />
        
    </View>
    </>
  )
}

export default ChooseLandOption