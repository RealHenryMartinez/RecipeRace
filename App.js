import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from '@iconify/react';
import cookingIcon from '@iconify/icons-emojione-monotone/cooking';

import AllHomeTabStack from './Stacks/AllHomeTabStack';
import CameraScreen from './Screens/CameraShot/CameraScreen';
import LeaderboardScreen from './Screens/Leaderboard/LeaderboardScreen';
import AllProfileStack from './Stacks/AllProfileStack';

const Tabs = createBottomTabNavigator();

// this is going to be more tab navigation
export default function App() {
  return (

// tabs are going to be located here
    <NavigationContainer>
        <Tabs.Navigator initialRouteName="Home">
          <Tabs.Screen
            options={{ headerShown: false }} // hides 'Home' header
            name="Home"
            
            component={AllHomeTabStack}
          />

          
          <Tabs.Screen
            // options={{ headerShown: false, tabBarIcon: ({size, color}) => (<Icon icon="emojione:cooking" inline={true} />) }} // hides 'Home' header

            name="Leaderboard"
            component={LeaderboardScreen}
          />
          {/* <Tabs.Screen
            // options={{ headerShown: false, tabBarIcon: ({size, color}) => (<Icon icon="emojione:cooking" inline={true} />) }} // hides 'Home' header

            name="Profile"
            component={AllProfileStack}
          /> */}
        </Tabs.Navigator>
      </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
