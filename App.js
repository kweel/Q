import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homepage from './src/components/Homepage'
import Self from './src/components/Self'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Stack = createNativeStackNavigator();
const MainTabs = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <MainTabs.Navigator initialRouteName="Home">
        <MainTabs.Screen name = "Friends" component = {Self} />
        <Stack.Screen name = "Home" component = {Homepage} />
        <MainTabs.Screen name = "Self" component = {Self} />
      </MainTabs.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
//a more permanent solution for styles is in the docs:
//https://reactnavigation.org/docs/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'lightblue',
  },
});
