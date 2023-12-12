import { Alert, Button, StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import { useState, useEffect } from "react";
function LoginScreen(props) {
    //from https://reactnative.dev/docs/textinput
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    return <View style={styles.container}>
        <Text style={[styles.textHeader, { fontSize: 30, marginBottom: 0}]}>Q</Text>
        <Text style={[styles.textHeader, { fontSize: 20, color: '#AAA', marginBottom: 20 }]}>Thinking deeply.</Text>

        {/* <Text style={[styles.textHeader, { fontSize: 14 }]}>Email</Text> */}
        <TextInput 
            style={[styles.textInput, {color: '#fff', marginTop:5, marginBottom: 15, height: 38, borderColor: '#555555'}]}
            onChangeText={setEmail} 
            value={email} 
            placeholder="Enter email" 
            keyboardType="email-address" 
            placeholderTextColor="#fff"/>
        {/* <Text style={[styles.textRegular, { fontSize: 14 }]}>Password</Text> */}
        <TextInput 
            style={[styles.textInput, {color: '#fff', marginTop:0, marginBottom: 20, height: 38, borderColor: '#555555'}]}
            secureTextEntry={true} 
            onChangeText={setPassword} 
            value = {password} 
            placeholder= "Enter password" 
            placeholderTextColor="#fff"/>

        <Pressable 
        style={[styles.button, {height: 35, width: 75,}]}
        onPress={() => {
            props.handleLogin(email, password)
        }}>
        <Text style={styles.buttonText}>Login</Text>
        </Pressable>

        {/* <Text style={[styles.textRegular, { fontSize: 10, marginTop: 10 }]}>Working login: Email: asdf@gmail.com Password: asdfgh</Text> */}
        <Pressable onPress={() => props.setIsRegistering(true)}>
            <Text style={[styles.buttonText, {color: '#fff'}]}>New here? Sign up!</Text></Pressable>
    </View>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1D1B20',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textHeader: {
        // fontFamily: "Lora-SemiBold",
        color: '#fff'
    },
    textRegular: {
        // fontFamily: 'Lora-Regular',
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
        // fontFamily: 'Lora-Regular'
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
        // fontFamily: 'Lora-SemiBold', 
    },
    inputContainer: {
        alignSelf: 'stretch',
        marginLeft: 12,
    },
});

export default LoginScreen;