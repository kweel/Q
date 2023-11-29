// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, StatusBar, Button } from 'react-native';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Feed from './src/components/screens/Feed'
import FriendsTabs from './src/components/screens/FriendsTabs';
import FriendsDataContext from './src/components/contexts/FriendsDataContext';
import RequestsDataContext from './src/components/contexts/RequestsDataContext';
import MessagesDataContext from './src/components/contexts/MessagesDataContext';
import GetProfileFunctionContext from './src/components/contexts/GetProfileFunctionContext';
import Profile from './src/components/screens/Profile';
import RegisterScreen from './src/components/screens/RegisterScreen';
import LoginScreen from './src/components/screens/LoginScreen';
export default function App() {
  const Stack = createNativeStackNavigator();
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isRegistering, setIsRegistering] = useState(false);
  const [friends,setFriends]=useState([])
  const [requests,setRequests]=useState([])
  const [messages,setMessages]=useState([])
  const [profiles,setProfiles]=useState([])
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
        {poster:'poster', title:'title', body:'body', id:1933},
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
      'Jan':{friendDate:1010,todayQuote:{title:'bums', body:'ur a bum'},friendsList:['Ken','Sarah','LacrosseMan','poster','urmum','anubarak']},
      'Ken':{friendDate:10130,todayQuote:{title:'Kenji', body:'Kenjutsu'},friendsList:['Sarah','Jan','LacrosseMan','poster','urmum','anubarak']},
      'poster':{friendDate:10104,todayQuote:{title:'post', body:'best relaxing instrumental erhu music 2019'},friendsList:['Ken','Jan','LacrosseMan','Sarah','urmum','anubarak']},
      'Sarah':{friendDate:10810,todayQuote:{title:'all of you heathens', body:'blahblah my name sarah'},friendsList:['Ken','Jan','LacrosseMan','poster','urmum','anubarak']},
      'Jan the Second':{ friendDate:"Never", todayQuote:{title:"If a  tree falls...", body:"who picks up the pieces?"},friendsList:['poster']},
      'John':{friendDate:10810,todayQuote:{title:'Doe', body:'As the deer panteth for the water, so my soul longeth for Pocari Sweat'},friendsList:['Ken','Jan','LacrosseMan','poster','urmum','anubarak']},
      'Kenjamin':{friendDate:10810,todayQuote:{title:'Kenjabin Denjakin', body:'Soup is good'},friendsList:['Ken','Jan','LacrosseMan','poster','urmum','anubarak']},
      'Seraphin':{friendDate:10810,todayQuote:{title:'my name sera', body:'uggoggogg'},friendsList:['Ken','Jan','LacrosseMan','poster','urmum','anubarak']},
    })

},[])
const getProfile = (username) => {
  //what if instead of getting information only, put navigate to profile screen?
  //maybe I can do that in another function
  return profiles[username]
}
function handleLogin(usernameLogin, password) {
  setIsLoggedIn(true)
}
function handleSignup(usernameLogin, password, cpassword) {
  if (password !== cpassword) {
    Alert.alert('Passwords not matching!')
  }
  else {
    setIsLoggedIn(true)
  }
}
if (isLoggedIn) {
  return (
    
    <NavigationContainer style={styles.container}>
      <StatusBar barStyle="light-content" />
      <FriendsDataContext.Provider value={[friends,setFriends]}>
        <RequestsDataContext.Provider value={[requests,setRequests]}>
          <MessagesDataContext.Provider value={[messages,setMessages]}>
            <GetProfileFunctionContext.Provider value={getProfile}>
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
                  name = "Profile" 
                  component = {Profile} 
                />
                <Stack.Screen 
                  name = "Me" 
                  component = {Profile} 
                />
              </Stack.Navigator>
            </GetProfileFunctionContext.Provider>
          </MessagesDataContext.Provider>
        </RequestsDataContext.Provider>
      </FriendsDataContext.Provider>
    </NavigationContainer>
  );
} else if (isRegistering) {
  return <RegisterScreen handleSignup={handleSignup} setIsRegistering={setIsRegistering} />
} else {
  return <LoginScreen handleLogin={handleLogin} setIsRegistering={setIsRegistering} />
}

 
}
