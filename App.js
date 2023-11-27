// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, StatusBar, Button } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Feed from './src/components/Feed'
import Friends from './src/components/Friends'
import Me from './src/components/Me'

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Stack.Navigator 
        initialRouteName="route"
        screenOptions={{
        }}>
        <Stack.Screen 
          name = "Feed" 
          component = {Feed} 
          options={{
            title: 'Q',
            headerStyle: {
              backgroundColor: '#000000'
            },
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen 
          name = "Friends" 
          component = {Friends} 
          options={{
            headerStyle: {
              backgroundColor: '#000000'
            },
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen 
          name = "Me" 
          component = {Me} 
          options={{
            headerStyle: {
              backgroundColor: '#000000'
            },
            headerTintColor: 'white',
          }}
        />
      </Stack.Navigator>
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
