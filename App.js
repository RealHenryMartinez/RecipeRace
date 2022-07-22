import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import DifficultyStack from './Stacks/DifficultyStack';

const Tabs = createBottomTabNavigator();

// this is going to be more tab navigation
export default function App() {
  return (

// tabs are going to be located here
    <NavigationContainer>
        <Tabs.Navigator initialRouteName="Difficulty">
          <Tabs.Screen
            options={{ headerShown: false }} // hides 'Home' header
            name="Difficulty"
            component={DifficultyStack}
          />
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
