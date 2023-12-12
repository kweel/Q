import { Alert, Button, StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import { useState } from "react";
function RegisterScreen(props) {
    const [email,setEmail]=useState('')
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const [cpassword,setCPassword]=useState('')       
    return <View style={styles.container}>
        <Text style={[styles.textHeader, { fontSize: 96, marginBottom: 10}]}>Q</Text>
        <Text style={[styles.textHeader, { fontSize: 20, color: '#AAA', marginBottom: 50 }]}>Thinking deeply.</Text>

        <Text style={[styles.textHeader, { fontSize: 14 }]}>Email</Text>
        <TextInput 
            style={[styles.textInput, {color: '#fff', marginBottom: 20}]}
            onChangeText={setEmail} 
            value = {email} 
            placeholder="Enter email" 
            keyboardType="email-address" 
            placeholderTextColor="#fff"/>


        <Text style={[styles.textHeader, { fontSize: 14 }]}>Username</Text>
        <TextInput 
            style={[styles.textInput, {color: '#fff', marginBottom: 20}]}
            onChangeText={setUsername} 
            placeholder="Enter username" 
            value = {username}
        />

        <Text style={[styles.textHeader, { fontSize: 14 }]}>Password</Text>
        <TextInput 
            style={[styles.textInput, {color: '#fff', marginBottom: 20}]}
            secureTextEntry={true} 
            placeholder="Enter password" 
            onChangeText={setPassword} 
            value = {password}/>

        <Text style={[styles.textHeader, { fontSize: 14 }]}>Confirm Password</Text>
        <TextInput 
            style={[styles.textInput, {color: '#fff', marginBottom: 20}]}
            secureTextEntry={true} 
            onChangeText={setCPassword} 
            placeholder="Confirm password" 
            value = {cpassword}/>

        <Pressable
            style={[styles.button, {height: 35, width: 300,}]}
            onPress={() => props.handleSignup(email, username, password, cpassword)}>
             <Text style={styles.buttonText}>Sign Up</Text>
        </Pressable>
        <Pressable 
            onPress={() => props.setIsRegistering(false)}>
                <Text style={[styles.buttonText, {color: '#fff'}]}>Already have an account? Log in!</Text>
        </Pressable>
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

export default RegisterScreen;