// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, StatusBar, Button } from 'react-native';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Feed from './src/components/screens/Feed'
import Me from './src/components/screens/Me'
import FriendsTabs from './src/components/navigation/FriendsTabs';
import FriendsDataContext from './src/components/contexts/FriendsDataContext';
import RequestsDataContext from './src/components/contexts/RequestsDataContext';
import MessagesDataContext from './src/components/contexts/MessagesDataContext';
import GetProfileDataContext from './src/components/contexts/GetProfileDataContext';

export default function App() {
  const Stack = createNativeStackNavigator();
  const [friends,setFriends]=useState([])
  const [requests,setRequests]=useState([])
  const [messages,setMessages]=useState([])
  const [profiles,setProfiles]=useState([])
  //set contexts in the beginning. When we have backend, use fetch for this. For now it is hardcoded
  useEffect(() => {
    setFriends([
      {name:'John', img:'img.jpg', username:'john1', id:112},
      {name:'Sarah', img:'img2.jpg', username:'sarah523', id:123},
      {name:'Ken', img:'img3.jpg', username:'kenbergkenson', id:127},
      ])
    },[])
    useEffect(() => {
    setRequests([
      {name:'Jan', img:'img.jpg', username:'john1', id:128},
      {name:'Seraphin', img:'img2.jpg', username:'sarah523', id:1322},
      {name:'Kenjamin', img:'img3.jpg', username:'kenbergkenson', id:177},
      ])
    },[])
    useEffect(() => {
      setMessages([
        {poster:'Jan', title:'glorb', body:'I am a stick', id:1},
        {poster:'Ken', title:'Dargibibi', body:'Bobbibbobbob hey hey hey', id:19},
        {poster:'LacrosseMan', title:'img3.jpg', body:'kenbergkenson', id:12},
        {poster:'poster', title:'title', body:'body', id:13},
        {poster:'poster', title:'title', body:'body', id:14},
        {poster:'poster', title:'title', body:'body', id:16},
        {poster:'poster', title:'title', body:'body', id:15},
        {poster:'poster', title:'title', body:'body', id:17},
        {poster:'poster', title:'title', body:'body', id:18},
        {poster:'poster', title:'title', body:'body', id:19},
        {poster:'poster', title:'title', body:'body', id:10},
        {poster:'poster', title:'title', body:'body', id:155},
        {poster:'poster', title:'title', body:'body', id:132},
        {poster:'poster', title:'title', body:'body', id:113},
        ])

  },[])
  useEffect(() => {
    setProfiles({
      //usernames MUST be unique, profile data will be fetched with username
      //messages might also be done through profiles? I want something centralized where data is scraped from one source
      //must be a database thing???
      Jan:{friendDate:1010,todayQuote:{title:'bums', body:'ur a bum'},friendsList:['Ken','Sarah','LacrosseMan','poster','urmum','anubarak']},
      Ken:{friendDate:10130,todayQuote:{title:'bums', body:'ur a bum'},friendsList:['Sarah','Jan','LacrosseMan','poster','urmum','anubarak']},
      poster:{friendDate:10104,todayQuote:{title:'bums', body:'ur a bum'},friendsList:['Ken','Jan','LacrosseMan','Sarah','urmum','anubarak']},
      Sarah:{friendDate:10810,todayQuote:{title:'bums', body:'ur a bum'},friendsList:['Ken','Jan','LacrosseMan','poster','urmum','anubarak']},
    })

},[])
const getProfile = (username) => {
  return profiles[username]
}
  return (
    
    <NavigationContainer style={styles.container}>
      <StatusBar barStyle="light-content" />
      <FriendsDataContext.Provider value={[friends,setFriends]}>
        <RequestsDataContext.Provider value={[requests,setRequests]}>
          <MessagesDataContext.Provider value={[messages,setMessages]}>
            <GetProfileDataContext.Provider value={getProfile}>
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
            </GetProfileDataContext.Provider>
          </MessagesDataContext.Provider>
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
