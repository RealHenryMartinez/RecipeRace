import React from 'react'
import { Button, View, StyleSheet } from 'react-native'


// This is the functionality of the buttons 
// Difficulty button (function) -> passed to Difficulty.js

const SelectedDifficultyCard = (props) => {
  const [furnitureCardInfo, setFurnitureCardInfo] = useState([
    // Passing data for category (Parent) //
    { name: "chairs",  items: [
      // passing data from item list (Child)
      {
        name: 'table chair',
        price: '$50',
        material: 'wood', 
        image: furniture1
      },
      {
        name: 'dinning chair',
        price: '$950',material: 'wood', 
        image: furniture2
      }
    ]  },
    { name: "tables",  items: [
      {
        name: 'dinning table',
        price: '$1050',
        material: 'wood', 
        image: furniture4
      },
      {
        name: 'outdoor table',
        price: '$500',material: 'wood',   
        image: furniture3,
      }
    ]  },

  ]);


/* used to make modal from posts be visible or not */
  const [modalVisible, setModalVisible] = useState(false);


  const handleSelectedDifficultyPress = (name, items) => {
    // console.log("tap", name),
    /* 
    used to navigate throughout different categories of furniture
    navigation is declared in the main component 
    */
      navigation.navigate("FoodList", { name: name,  items:items  });
  };
  return (
    <View>
        <Button style={styles.container} onPress={handleSelectedDifficultyPress} title={props.titleName}/>
        
    </View>
  )
}

export default SelectedDifficultyCard

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