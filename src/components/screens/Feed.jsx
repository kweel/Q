import * as React from 'react';
import { Text, View, Button, ScrollView, TouchableOpacity, Image, SafeAreaView } from "react-native";
import { useLinkProps } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScrollData from "../helper/ScrollData";
import { useContext, useEffect, useState } from "react";
import MessagesDataContext from "../contexts/MessagesDataContext";
import MessageCard from "../helper/MessageCard";
export default function Feed ({ navigation }) {
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
        <TouchableOpacity onPress={() => navigation.push('Me',{name:'Kenjamin'})}>
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
  }, [navigation]);
  const [messages,setMessages] = useContext(MessagesDataContext)
  useEffect(() =>
    console.log(messages)
    ,[messages])
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#000000"}}>
      <ScrollData data={messages} Element={MessageCard}/>
    </SafeAreaView>
  )
}