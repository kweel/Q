import { Alert, Button, StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import { useState, useEffect } from "react";
function LoginScreen(props) {
    //from https://reactnative.dev/docs/textinput
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    return <View style={styles.container}>
        <Text style={[styles.textHeader, { fontSize: 96, marginBottom: 10}]}>Q</Text>
        <Text style={[styles.textHeader, { fontSize: 20, color: '#AAA', marginBottom: 10 }]}>Thinking deeply.</Text>
        <Text style={[styles.textHeader, { fontSize: 14 }]}>Email</Text>
        <TextInput style={styles.textInput}
  onChangeText={setEmail} value = {email} placeholder="Enter email" keyboardType="email-address" placeholderTextColor="#fff"/>
        <Text style={[styles.textRegular, { fontSize: 14 }]}>Password</Text>
        <TextInput style={styles.textInput}
        secureTextEntry={true} onChangeText={setPassword} value = {password} placeholder= "Enter password" placeholderTextColor="#fff"/>
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
    }
});

export default LoginScreen;