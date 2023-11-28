// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, StatusBar, Button } from 'react-native';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Feed from './src/components/Feed'
import Me from './src/components/Me'
import FriendsTabs from './src/components/navigation/FriendsTabs';
import FriendsDataContext from './src/components/contexts/FriendsDataContext';
import RequestsDataContext from './src/components/contexts/RequestsDataContext';


export default function App() {
  const Stack = createNativeStackNavigator();
  const [friends,setFriends]=useState([])
  const [requests,setRequests]=useState([])
  useEffect(() => {
    setFriends([
      {name:'John', img:'img.jpg', username:'john1'},
      {name:'Sarah', img:'img2.jpg', username:'sarah523'},
      {name:'Ken', img:'img3.jpg', username:'kenbergkenson'},
      ])
    setRequests([
      {name:'Jan', img:'img.jpg', username:'john1'},
      {name:'Seraphin', img:'img2.jpg', username:'sarah523'},
      {name:'Kenjamin', img:'img3.jpg', username:'kenbergkenson'},
      ])

  },[])
  return (
    
    <NavigationContainer style={styles.container}>
      <StatusBar barStyle="light-content" />
      <FriendsDataContext.Provider value={[friends,setFriends]}>
        <RequestsDataContext.Provider value={[requests,setRequests]}>
      <Stack.Navigator 
        initialRouteName="route"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#000000'
          },
          headerTintColor: 'white',
        }}>
        <Stack.Screen 
          name = "Feed" 
          component = {Feed} 
          options={{
            title: 'Q',
          }}
        />
        
        <Stack.Screen 
          name = "Friends" 
          component = {FriendsTabs} 
        />
        
        <Stack.Screen 
          name = "Me" 
          component = {Me} 
        />
      </Stack.Navigator>
      </RequestsDataContext.Provider>
        </FriendsDataContext.Provider>
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
