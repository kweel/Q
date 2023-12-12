import { Text, View, Button, SafeAreaView, Image } from "react-native";
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
    console.log(props.route.params.name)
    console.log(props.name)
    console.log(props)
    const profileInfo = getProfile(props.route.params.name)
    console.log(profileInfo)
    return (
        profileInfo !== undefined ?
            <SafeAreaView style={{ flex: 1, backgroundColor: "#000000" }}>
                {/* <Image
                    source={require('../../../assets/icons/' + profileInfo.img)}
                    style={{
                        width: 28,
                        height: 28,
                        borderRadius: 12,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                /> */}
                <Text style={{ fontSize: 28, fontWeight: 600, color: 'white' }}>Name: {props.route.params.name}</Text>
                {/* <Text style={{ fontSize: 20, color: 'white' }}>Friends since {profileInfo.friendDate}</Text> */}
                <Text style={{ fontSize: 12, color: 'white' }}>Today's quote:</Text>
                <MessageCard name={props.route.params.name} />
            </SafeAreaView>
            : <SafeAreaView style={{ flex: 1, backgroundColor: "#000000" }}>
                <Text style={{ fontSize: 28, fontWeight: 600, color: 'white' }}>Profile not found!</Text>
            </SafeAreaView>
    )
}