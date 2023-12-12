import * as React from 'react';
import { Text, View, Button, ScrollView, TouchableOpacity, Image, SafeAreaView } from "react-native";
import { useLinkProps } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScrollData from "../helper/ScrollData";
import { useContext, useEffect, useState } from "react";
import MessageCard from "../helper/MessageCard";
import MyUsernameDataContext from '../contexts/MyUsernameDataContext';
import { StyleSheet } from 'react-native';
import PostedDataContext from '../contexts/PostedDataContext';
import QuestionDataContext from '../contexts/QuestionDataContext';
import PostModal from '../helper/PostModal';
import UsersDataContext from '../contexts/UsersDataContext';
import { useNavigation } from '@react-navigation/native';
export default function Feed (props) {
  const [users,setUsers] = useContext(UsersDataContext)
  const [myUsername,setMyUsername] = useContext(MyUsernameDataContext)
  const [posted,setPosted] = useContext(PostedDataContext)
  const [question,setQuestion] = useContext(QuestionDataContext)
  const [modalShown,setModalShown]=useState(false)
  const navigation = useNavigation()
  // let newUsername = ''
  React.useLayoutEffect(() => {
    console.log(myUsername)
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => {
          props.handleLogout()
        }} style={{ backgroundColor: 'black' }}>
          <Text style={{ color: 'white' }}>Log Out</Text>
        </TouchableOpacity>
        // </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.push('Me', {name: myUsername})}>
          <Image
            source={require('../../../assets/icons/person.png')} 
            style={{ 
              width:28, 
              height:28,
              borderRadius: 12,
              justifyContent: "center",
              alignItems: "center",
            }}
          />
        </TouchableOpacity>
      ),
    });
  }, [myUsername, navigation])

  // useEffect(() =>
  //   console.log(friends)
  //   ,[friends])

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#000000"}}>
      {!posted ? <View style={styles.blurOverlay}>
        <Text style={{fontSize: 28, fontWeight: 600, color:'white'}}>Today's Q</Text>
        <Text style={{fontSize: 20, fontWeight: 200, color:'white'}}>{question}</Text>
        <Button title="Post" onPress={(() => setModalShown(true))}/>
        <PostModal popSet={[modalShown,setModalShown]} question={question} handlePost={(title, message) => props.handlePost(title, message)}/>
      </View>
      : void(0)}
      <ScrollData data={props.allUsers} Element={MessageCard} name="messages"/>
    </SafeAreaView>
    
  )
}
//from https://medium.com/@edabdallamo/creating-a-background-blur-effect-in-react-native-without-external-packages-96acd0437586
const styles = StyleSheet.create({
  blurOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: 100,

  },
});