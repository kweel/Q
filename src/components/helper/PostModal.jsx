import { Modal, Button, Text, TextInput, View, StyleSheet, Pressable } from "react-native";
import { useState, useEffect } from "react";

function PostModal(props) {
    //from lecture: https://snack.expo.dev/@ctnelson1997/findmybadgers-animated-modal
    const [title, setTitle] = useState('')
    const [message, setMessage] = useState('')
    const [popoutShown, setPopoutShown] = props.popSet
    console.log(props.popSet)
    useEffect(() => { popoutShown }, [popoutShown])

    return <Modal
        animationType="slide"
        transparent={false}
        visible={popoutShown}
        presentationStyle={"pageSheet"}
        onDismiss={() => setPopoutShown(false)}
        onRequestClose={() => setPopoutShown(false)}
    >
        <View style={{ flex: 1, backgroundColor: 'black', paddingLeft: 8, paddingRight: 8 }}>
            <Text style={{ fontSize: 20, fontWeight: 300, paddingLeft: 8, paddingRight: 8, color: 'white', marginTop: 20 }}>{props.question}</Text>
            {/* <Text style={{ fontSize: 20, paddingTop: 5, paddingLeft: 8, paddingRight: 8, color: 'white' }}>Title</Text> */}
            <TextInput
                style={[styles.textInput, { color: '#fff', marginTop: 10, marginBottom: 10, height: 38, borderColor: '#555555' }]}
                placeholder="Title"
                placeholderTextColor="#fff" />
            {/* <Text style={{ fontSize: 20, paddingLeft: 8, paddingRight: 8, color: 'white' }}>Message</Text> */}
            <TextInput
                style={[styles.textInput, { color: '#fff', marginTop: 0, marginBottom: 5, height: 38, borderColor: '#555555' }]}
                placeholder="Message"
                placeholderTextColor="#fff" />
            <Pressable
                style={[styles.button, { height: 35, width: 75, }]}
                onPress={() => {
                    props.handlePost(title, message)
                }}>
                <Text style={styles.buttonText}>Post</Text>
            </Pressable>
            <Pressable
                style={[styles.button, { height: 35, width: 75, marginTop:0}]}
                onPress={() => {
                    setPopoutShown(false)
                }}>
                <Text style={styles.buttonText}>Cancel</Text>
            </Pressable>
        </View>
    </Modal>
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

export default PostModal;