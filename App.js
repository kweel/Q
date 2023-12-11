// import { StatusBar } from 'expo-status-bar';
import { app } from './firebaseConfig';
import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


import { StyleSheet, Text, View, StatusBar, Button, Alert } from 'react-native';
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
import MyUsernameDataContext from './src/components/contexts/MyUsernameDataContext';
import Profile from './src/components/screens/Profile';
import RegisterScreen from './src/components/screens/RegisterScreen';
import LoginScreen from './src/components/screens/LoginScreen';
import PostedDataContext from './src/components/contexts/PostedDataContext';
import QuestionDataContext from './src/components/contexts/QuestionDataContext';

export default function App() {
  let auth = getAuth();

  const Stack = createNativeStackNavigator();
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isRegistering, setIsRegistering] = useState(false);
  const [friends,setFriends]=useState([])
  const [requests,setRequests]=useState([])
  const [messages,setMessages]=useState([])
  const [profiles,setProfiles]=useState([])
  const [myUsername,setMyUsername]=useState("Jan")
  const [posted,setPosted]=useState(false)
  const [question,setQuestion]=useState('')
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
  //fetch profile data (for now, hardcoded)
  //use myUsername to fetch my friendslist etc?
  //TODO: make this dependent on profile
  
  useEffect(() => {
    setFriends(['John','Sarah','Ken'])
    setRequests(['Jan','Seraphin','Kenjamin'])
    },[])
  useEffect(() => {
    setProfiles({
      //usernames MUST be unique, profile data will be fetched with username
      //messages might also be done through profiles? I want something centralized where data is scraped from one source
      //must be a database thing???
      'Jan':{'friendDate':1010, 'username':'john1', 'img':'musk.jpg','todayQuote':{title:'bums', body:'ur a bum'},'friendsList':['Ken','Sarah','poster'],'password':'password1'},
      'Ken':{'friendDate':10130, 'username':'kenbergkenson', 'img':'musk.jpg','todayQuote':{title:'Kenji', body:'Kenjutsu'},'friendsList':['Jan','Sarah','poster'],'password':'password1'},
      'poster':{'friendDate':10104, 'username':'img_jpg', 'img':'musk.jpg','todayQuote':{title:'post', body:'best relaxing instrumental erhu music 2019'},'friendsList':['Ken','Sarah','Jan'],'password':'password1'},
      'Sarah':{'friendDate':10810, 'username':'sarah523', 'img':'musk.jpg','todayQuote':{title:'all of you heathens', body:'blahblah my name sarah'},'friendsList':['Ken','Jan','poster'],'password':'password1'},
      'Jan the Second':{ 'friendDate':"Never", 'username':'jan2', 'img':'musk.jpg', 'todayQuote':{title:"If a  tree falls...", body:"who picks up the pieces?"},'friendsList':['Jan','John','Ken'],'password':'password1'},
      'John':{'friendDate':10810, 'username':'jawnjawn', 'img':'musk.jpg','todayQuote':{title:'Doe', body:'As the deer panteth for the water, so my soul longeth for Pocari Sweat'},'friendsList':['Jan','Kenjamin','Ken','Seraphin'],'password':'password1'},
      'Kenjamin':{'friendDate':10810, 'username':'kenjikenjikoko', 'img':'musk.jpg','todayQuote':{title:'Kenjabin Denjakin', body:'Soup is good'},'friendsList':['Jan','John','Ken','Sarah'],'password':'password1'},
      'Seraphin':{'friendDate':10810, 'username':'notseraphimnotanangel', 'img':'musk.jpg','todayQuote':{title:'my name sera', body:'uggoggogg'},'friendsList':['Sarah','Jan the Second','Kenjamin'],'password':'password1'},
    })

},[])
useEffect(() => {
  setQuestion("What color is today's turkey?")
},[])
const getProfile = (username,attribute) => {
  //what if instead of getting information only, put navigate to profile screen?
  //maybe I can do that in another function
  if (attribute!==undefined) {
    console.log(profiles[username])
    return profiles[username][attribute]
  }
  else {
    return profiles[username]
  }
}
function handleLogin(email, password) {
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    setIsLoggedIn(true)

  // TODO: update info for user

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    Alert.alert(error.message)
  });

  // if (profiles[usernameLogin] !== undefined && profiles[usernameLogin].password === passwordLogin) {
  //   Alert.alert('Login successful!')
  //   setIsLoggedIn(true)
  //   setMyUsername(usernameLogin)
  // }
  // else {
  //   Alert.alert('Incorrect username or password!')
  // }
}

function handleSignup(email, usernameLogin, password, cpassword) {
  if (email !== '' || usernameLogin !== '') {
    Alert.alert('Invalid information')
  }
  else if (password !== cpassword) {
    Alert.alert('Passwords not matching!')
  }
  else {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
      setIsLoggedIn(true)
      // TODO: store info in firestore

      setMyUsername(usernameLogin)

    })
    .catch((error) => {
      Alert.alert(error.message)
    });
  }

  // if (password !== cpassword) {
  //   Alert.alert('Passwords not matching!')
  // }
  // //TODO: Make this actually create a profile
  // else {
  //   Alert.alert('Registration successful!')
  //   setIsLoggedIn(true)
  //   if (usernameLogin !== '')
  //   {setMyUsername(usernameLogin)}
  // }
}
if (isLoggedIn) {
  return (
    
    <NavigationContainer style={styles.container}>
      <StatusBar barStyle="light-content" />
      <FriendsDataContext.Provider value={[friends,setFriends]}>
        <RequestsDataContext.Provider value={[requests,setRequests]}>
          <MessagesDataContext.Provider value={[messages,setMessages]}>
            <GetProfileFunctionContext.Provider value={getProfile}>
              <MyUsernameDataContext.Provider value={[myUsername,setMyUsername]}>
                <PostedDataContext.Provider value={[posted,setPosted]}>
                  <QuestionDataContext.Provider value={[question,setQuestion]}>
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
                  </QuestionDataContext.Provider>
                </PostedDataContext.Provider>
              </MyUsernameDataContext.Provider>
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
