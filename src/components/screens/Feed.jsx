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
export default function Feed ({ navigation }) {
  const [messages,setMessages] = useContext(MessagesDataContext)
  const [myUsername,setMyUsername] = useContext(MyUsernameDataContext)
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
    /*
      <View style={styles.blurOverlay}>
        <Text style={{color:'white'}}></Text>
      </View>
    */
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#000000"}}>
      <ScrollData data={messages} Element={MessageCard} name="messages"/>
      
    </SafeAreaView>
    
  )
}
//from https://medium.com/@edabdallamo/creating-a-background-blur-effect-in-react-native-without-external-packages-96acd0437586
const styles = StyleSheet.create({
  blurOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 100,

  },
});