import { Text, View, Button, SafeAreaView } from "react-native";
import { useLinkProps } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from "./Profile";

export default function Me({ navigation }) {
  
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#000000"}}>
      <Profile name='poster'/>
    </SafeAreaView>
  )
}