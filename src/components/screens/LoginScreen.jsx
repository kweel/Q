import { Alert, Button, StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import { useState, useEffect } from "react";
function LoginScreen(props) {
    //from https://reactnative.dev/docs/textinput
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    return <View style={styles.container}>
        <Text style={{ fontSize: 36 }}>Q</Text>
        <Text style={{ fontSize: 30 }}>Thinking deeply.</Text>
        <Text style={{ fontSize: 25 }}>Username</Text>
        <TextInput style = {{
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
        }} 
  onChangeText={setUsername} value = {username}/>
        <Text style={{ fontSize: 25 }}>Password</Text>
        <TextInput  style = {{
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
        }} 
        secureTextEntry={true} onChangeText={setPassword} value = {password}/>
        <Button color="crimson" title="Login" onPress={() => {
            props.handleLogin(username, password)
        }} />
        <Pressable onPress={() => props.setIsRegistering(true)}><Text color="grey" style={{ fontSize: 18 }}>New here? Sign up!</Text></Pressable>
    </View>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default LoginScreen;