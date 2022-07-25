import React from "react";
import { Text, FlatList, View} from 'react-native'

export default function VideoCard({route}) {
  return (
    <>
    <FlatList 
            style = {{alignContent: 'center'}}
            
    // Route.params.ingredients is going to the child of the route onto it reaches ingredients
            data = {route.params.recepies}
            
            renderItem={({ item }) => (
                <View>
                    {/* Display the name of the category ons the top of the screen */}
                    <iframe
                        // data = {route.params.recepies}
                        src={route.params.video}
                        frameborder="0"
                        allow="autoplay; encrypted-media"
                        allowfullscreen
                        title="video"
                    />{" "}
                    
                </View>
                
              )} 
        />
    </>
    // <div
    
    // >

      
    // </div>
  );
}