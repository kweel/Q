// import { StatusBar } from 'expo-status-bar';
import { app, db } from './firebaseConfig';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { collection, getDoc, setDoc, doc, updateDoc, getDocs, query, where } from "firebase/firestore"; 

import { StyleSheet, Text, View, StatusBar, Button, Alert } from 'react-native';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Feed from './src/components/screens/Feed'
import FriendsTabs from './src/components/screens/FriendsTabs';
import FriendsDataContext from './src/components/contexts/UsersDataContext';
import RequestsDataContext from './src/components/contexts/RequestsDataContext';
import MessagesDataContext from './src/components/contexts/MessagesDataContext';
import GetProfileFunctionContext from './src/components/contexts/GetProfileFunctionContext';
import MyUsernameDataContext from './src/components/contexts/MyUsernameDataContext';
import Profile from './src/components/screens/Profile';
import RegisterScreen from './src/components/screens/RegisterScreen';
import PostModal from './src/components/helper/PostModal';
import LoginScreen from './src/components/screens/LoginScreen';
import PostedDataContext from './src/components/contexts/PostedDataContext';
import QuestionDataContext from './src/components/contexts/QuestionDataContext';
import { isNewBackTitleImplementation } from 'react-native-screens';
import { issuedAtTime } from '@firebase/util';

export default function App() {
  let auth = getAuth();

  const Stack = createNativeStackNavigator();
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isRegistering, setIsRegistering] = useState(false);
  const [friends,setFriends]=useState([])
  const [requests,setRequests]=useState([])
  const [messages,setMessages]=useState([])
  const [profiles,setProfiles]=useState([])
  const [myUsername,setMyUsername]=useState([])
  const [myEmail,setMyEmail]=useState([])
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
  
//   useEffect(() => {
//     setFriends(['John','Sarah','Ken'])
//     setRequests(['Jan','Seraphin','Kenjamin'])
//     },[])

//   useEffect(() => {
//     setProfiles(
//     //   {
//     //   //usernames MUST be unique, profile data will be fetched with username
//     //   //messages might also be done through profiles? I want something centralized where data is scraped from one source
//     //   //must be a database thing???
//     //   'Jan':{'friendDate':1010, 'username':'john1', 'img':'musk.jpg','todayQuote':{title:'bums', body:'ur a bum'},'friendsList':['Ken','Sarah','poster'],'password':'password1'},
//     //   'Ken':{'friendDate':10130, 'username':'kenbergkenson', 'img':'musk.jpg','todayQuote':{title:'Kenji', body:'Kenjutsu'},'friendsList':['Jan','Sarah','poster'],'password':'password1'},
//     //   'poster':{'friendDate':10104, 'username':'img_jpg', 'img':'musk.jpg','todayQuote':{title:'post', body:'best relaxing instrumental erhu music 2019'},'friendsList':['Ken','Sarah','Jan'],'password':'password1'},
//     //   'Sarah':{'friendDate':10810, 'username':'sarah523', 'img':'musk.jpg','todayQuote':{title:'all of you heathens', body:'blahblah my name sarah'},'friendsList':['Ken','Jan','poster'],'password':'password1'},
//     //   'Jan the Second':{ 'friendDate':"Never", 'username':'jan2', 'img':'musk.jpg', 'todayQuote':{title:"If a  tree falls...", body:"who picks up the pieces?"},'friendsList':['Jan','John','Ken'],'password':'password1'},
//     //   'John':{'friendDate':10810, 'username':'jawnjawn', 'img':'musk.jpg','todayQuote':{title:'Doe', body:'As the deer panteth for the water, so my soul longeth for Pocari Sweat'},'friendsList':['Jan','Kenjamin','Ken','Seraphin'],'password':'password1'},
//     //   'Kenjamin':{'friendDate':10810, 'username':'kenjikenjikoko', 'img':'musk.jpg','todayQuote':{title:'Kenjabin Denjakin', body:'Soup is good'},'friendsList':['Jan','John','Ken','Sarah'],'password':'password1'},
//     //   'Seraphin':{'friendDate':10810, 'username':'notseraphimnotanangel', 'img':'musk.jpg','todayQuote':{title:'my name sera', body:'uggoggogg'},'friendsList':['Sarah','Jan the Second','Kenjamin'],'password':'password1'},
//     // }

//     )

// },[])

useEffect( () => {
  const fetchData = async () => {
    if (posted) {
      const q = query(collection(db, "users"));

      const querySnapshot = await getDocs(q);
      const dict = {}
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        const data = doc.data()
        if (data.todayQuote.title !== '' && data.todayQuote.body !== '') {
          dict[data.username] = {'todayQuote':data.todayQuote, 'email':data.email}
        }
      });
      console.log(dict)
      setProfiles(dict)
    }
}
  console.log('fetched data')
  fetchData()
}, [posted]);

useEffect(() => {
  setQuestion("What color is today's turkey?")
},[])/*
useEffect(()=>{
  console.log(profiles)
  console.log(myUsername)
  if (profiles.length > 0 && myUsername.length>0) {
    if ((getProfile(myUsername).todayQuote.title !== '' && getProfile(myUsername).todayQuote.body !== '')&&!posted) {
      console.log('running')
      setPosted(true)
    }

  }
  
},[profiles])*/
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

async function handleLogin(emailLogin, password) {
  signInWithEmailAndPassword(auth, emailLogin, password)
  .then(async (userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    setIsLoggedIn(true)
    console.log('logged in')

    // update info for user
    const docRef = doc(db, "users", emailLogin);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data()
      setMyUsername(data.username)
      setMyEmail(data.email)

    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(error.message)
  });

  // if (profiles[usernameLogin] !== undefined && profiles[usernameLogin].password === passwordLogin) {
  //   alert('Login successful!')
  //   setIsLoggedIn(true)
  //   setMyUsername(usernameLogin)
  // }
  // else {
  //   Alert.alert('Incorrect username or password!')
  // }
}

async function handleSignup(emailLogin, usernameLogin, password, cpassword) {
  if (emailLogin === '' || usernameLogin === '') {
    alert('Invalid information')
  }
  else if (password !== cpassword) {
    alert('Passwords not matching!')
  }
  else {
    createUserWithEmailAndPassword(auth, emailLogin, password)
    .then(async (userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
      setIsLoggedIn(true)      
      // store info in firestore
      await setDoc(doc(db, "users", emailLogin), {
        username: usernameLogin,
        email: emailLogin,
        todayQuote : {title : "", body : ""}
      });

      setMyUsername(usernameLogin)
      setMyEmail(emailLogin)
      setIsLoggedIn(true)

    })
    .catch((error) => {
      alert(error.message)
    });
  }
}

// TODO: connect this to post button
function handlePost(myTitle, message) {
  const docToUpdate = doc(db, "users", myEmail);
  updateDoc(docToUpdate, {
    todayQuote : {title : myTitle, body : message}
  })
    .then(() => {
      console.log("Data updated");
      setPosted(true)
    })
    .catch((err) => {
      console.log(err.message);
    });
}
function handleLogout() {
  setIsLoggedIn(false)
  setPosted(false)
  setProfiles([])
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
                        options={{
                          title: 'Q',
                        }}>
                        {props => <Feed {...props} handlePost = {handlePost} allUsers = {Object.keys(profiles)} handleLogout={handleLogout}/>}
                      </Stack.Screen>
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
