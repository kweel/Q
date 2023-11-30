import * as React from 'react';
import { Text, View, Button, ScrollView, TouchableOpacity, Image, SafeAreaView } from "react-native";
import { useLinkProps } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScrollData from "../helper/ScrollData";
import { useContext, useEffect, useState } from "react";
import MessagesDataContext from "../contexts/MessagesDataContext";
import MessageCard from "../helper/MessageCard";
import MyUsernameDataContext from '../contexts/MyUsernameDataContext';
import { StyleSheet } from 'react-native';
import PostedDataContext from '../contexts/PostedDataContext';
import QuestionDataContext from '../contexts/QuestionDataContext';
import PostModal from '../helper/PostModal';
export default function Feed ({ navigation }) {
  const [messages,setMessages] = useContext(MessagesDataContext)
  const [myUsername,setMyUsername] = useContext(MyUsernameDataContext)
  const [posted,setPosted] = useContext(PostedDataContext)
  const [question,setQuestion] = useContext(QuestionDataContext)
  const [modalShown,setModalShown]=useState(false)
  useEffect(() => console.log(myUsername),[myUsername])
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Friends')}>
          <Image
            source={require('../../../assets/icons/people.png')} 
            style={{ 
              width:28, 
              height:28,
              justifyContent: "center",
              alignItems: "center",
            }}
          />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.push('Me',{name:myUsername})}>
          <Image
            source={require('../../../assets/icons/musk.jpg')} 
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
  }, [navigation])

  useEffect(() =>
    console.log(messages)
    ,[messages])

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#000000"}}>
      {!posted ? <View style={styles.blurOverlay}>
        <Text style={{fontSize: 28, fontWeight: 600, color:'white'}}>Today's Q</Text>
        <Text style={{fontSize: 20, fontWeight: 200, color:'white'}}>{question}</Text>
        <Button title="Post" onPress={(() => setModalShown(true))}/>
        <PostModal popSet={[modalShown,setModalShown]} question={question} handlePost={() => {setPosted(true)}}/>
      </View>
      : void(0)}
      <ScrollData data={messages} Element={MessageCard} name="messages"/>
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