import React from 'react'
import { View, FlatList, StyleSheet } from 'react-native'

const LeaderboardCard = () => {
    const DATA = [
        {
          id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
          title: "Player 1",
        },
        {
          id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
          title: "Player 2",
        },
        {
          id: "58694a0f-3da1-471f-bd96-145571e29d72",
          title: "Player 3",
        },
      ];
  return (
    <View>
        <FlatList
        style = {styles.listStyle}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </View>
  )
}

export default LeaderboardCard

const styles = StyleSheet.create({
    listStyle: {
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,

    }
 })
