import { Text, View, Button, SafeAreaView } from "react-native";
import { useLinkProps } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MessageCard from "../helper/MessageCard";
import { useContext } from "react";
import GetProfileFunctionContext from "../contexts/GetProfileFunctionContext";

export default function Profile(props) {
    //isntead of calling context from in here, call context during getProfile and spawn profile while passing prop information in
    //actually I think I should just call context from here
    const getProfile = useContext(GetProfileFunctionContext)
    const profileInfo = getProfile(props.route.params.name)
    console.log(props.route.params.name)
    return (
        profileInfo!==undefined ?
        <SafeAreaView style={{ flex: 1, backgroundColor: "#000000"}}>
            <Text style={{fontSize: 28, fontWeight: 600, color:'white'}}>Name: {props.route.params.name}</Text>
            <Text style={{fontSize: 20, color:'white'}}>Friends since {profileInfo.friendDate}</Text>
            <Text style={{fontSize: 12, color:'white'}}>Today's quote:</Text>
            <MessageCard poster={profileInfo.name} title={profileInfo.todayQuote.title} body={profileInfo.todayQuote.body}/>
        </SafeAreaView>
    : <SafeAreaView style={{ flex: 1, backgroundColor: "#000000"}}>
    <Text style={{fontSize: 28, fontWeight: 600}}>Profile not found!</Text>
</SafeAreaView>
    )
    }