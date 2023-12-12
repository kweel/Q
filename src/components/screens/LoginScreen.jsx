import { Alert, Button, StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import { useState, useEffect } from "react";
function LoginScreen(props) {
    //from https://reactnative.dev/docs/textinput
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    return <View style={styles.container}>
        <Text style={[styles.textHeader, { fontSize: 36 }]}>Q</Text>
        <Text style={[styles.textHeader, { fontSize: 30, color: '#AAA' }]}>Thinking deeply.</Text>
        <Text style={[styles.textHeader, { fontSize: 25 }]}>Email</Text>
        <TextInput style = {{
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
        }} 
  onChangeText={setEmail} value = {email}/>
        <Text style={{ fontSize: 25 }}>Password</Text>
        <TextInput  style = {{
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
        }} 
        secureTextEntry={true} onChangeText={setPassword} value = {password}/>
        <Button color="crimson" title="Login" onPress={() => {
            props.handleLogin(email, password)
        }} />
        <Text style={{ fontSize: 10 }}>Working login: Email: asdf@gmail.com Password: asdfgh</Text>
        <Pressable onPress={() => props.setIsRegistering(true)}><Text color="grey" style={{ fontSize: 18 }}>New here? Sign up!</Text></Pressable>
    </View>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textHeader: {
        fontFamily: "Lora-Medium",
        color: '#fff'
    },
    textRegular: {
        fontFamily: 'Lora-Regular',
        color: '#fff'
    }
});

export default LoginScreen;