import { Alert, Button, StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import { useState } from "react";
function RegisterScreen(props) {
    const [email,setEmail]=useState('')
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const [cpassword,setCPassword]=useState('')       
    return <View style={styles.container}>
        <Text style={{ fontSize: 36 }}>Q</Text>
        <Text style={{ fontSize: 20 }}>Thinking deeply.</Text>
        <Text style={{ fontSize: 30 }}></Text>
        <Text style={{ fontSize: 25 }}>Email</Text>
        <TextInput style = {{
                height: 40,
                margin: 12,
                borderWidth: 1,
                padding: 10,
            }} 
            onChangeText={setEmail} value = {email}/>
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
        <Text style={{ fontSize: 25 }}>Confirm Password</Text>
        <TextInput  style = {{
                height: 40,
                margin: 12,
                borderWidth: 1,
                padding: 10,
            }} 
            secureTextEntry={true} onChangeText={setCPassword} value = {cpassword}/>
        <Button color="crimson" title="Signup" onPress={() => props.handleSignup(email, username, password, cpassword)} />
        <Pressable onPress={() => props.setIsRegistering(false)}><Text color="grey" style={{ fontSize: 18 }}>Already have an account? Log in!</Text></Pressable>
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

export default RegisterScreen;