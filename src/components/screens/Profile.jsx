import { Text, View, Button, StyleSheet, SafeAreaView, Image, TextInput, Pressable } from "react-native";
import { useLinkProps } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MessageCard from "../helper/MessageCard";
import { useContext, useEffect, useState } from "react";
import GetProfileFunctionContext from "../contexts/GetProfileFunctionContext";
import MyUsernameDataContext from "../contexts/MyUsernameDataContext";
import BioDataContext from "../contexts/BioDataContext";

export default function Profile(props) {
    //isntead of calling context from in here, call context during getProfile and spawn profile while passing prop information in
    //actually I think I should just call context from here
    const getProfile = useContext(GetProfileFunctionContext)
    const [myUsername,setMyUsername] = useContext(MyUsernameDataContext)
    console.log(props.route.params.name)
    console.log(props.name)
    console.log(props)
    const profileInfo = getProfile(props.route.params.name)
    const [tempBio,setTempBio] = useState(profileInfo['bio'])
    const [realBio,setRealBio] = useContext(BioDataContext)
    console.log(profileInfo)
    useEffect(() => console.log(myUsername),[myUsername])
    useEffect(()=>setTempBio(realBio),[realBio])
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
                <Text style={{ fontSize: 28, fontWeight: 600, color: 'white' }}>User: {props.route.params.name}</Text>
                {/* <Text style={{ fontSize: 20, color: 'white' }}>Friends for 10 days</Text> */}
                {/* <Text style={{ fontSize: 12, color: 'white' }}>Today's quote:</Text> */}
                <MessageCard name={props.route.params.name} />
                {myUsername === props.route.params.name ? 
                    <View>
                        <Text style={[styles.textHeader, { fontSize: 14 }]}>Bio</Text>
                        <TextInput 
                            style={[styles.textInput, {color: '#fff', marginBottom: 20}]}
                            onChangeText={setTempBio} 
                            value = {tempBio}
                            placeholderTextColor="#fff"/>
                        <Pressable 
                            style={[styles.button, {height: 35, width: 75,}]}
                            onPress={() => {
                                props.handleUpdateBio(tempBio)
                            }}>
                            <Text style={styles.buttonText}>Save Bio</Text>
                        </Pressable>
                    </View>
                :
                <View>
                    <Text style={[styles.textHeader, { fontSize: 14 }]}>Bio:</Text>
                    <Text style={[styles.textRegular, { fontSize: 14 }]}>{profileInfo['bio']}</Text>
                </View>
                }
            </SafeAreaView>
            : <SafeAreaView style={{ flex: 1, backgroundColor: "#000000" }}>
                <Text style={{ fontSize: 28, fontWeight: 600, color: 'white' }}>Profile not found!</Text>
            </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1D1B20',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textHeader: {
        fontFamily: "Lora-SemiBold",
        color: '#fff'
    },
    textRegular: {
        fontFamily: 'Lora-Regular',
        color: '#fff'
    },
    textInput: {
        backgroundColor: '#1D1B20',
        borderRadius: 5,
        borderColor: '#fff',
        height: 30,
        width: 300,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontFamily: 'Lora-Regular'
    },
    button: {
        backgroundColor: "#fff",
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 5,
        margin: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#1D1B20', 
        fontSize: 14, 
        fontFamily: 'Lora-SemiBold', 
    },
    inputContainer: {
        alignSelf: 'stretch',
        marginLeft: 12,
    },
});