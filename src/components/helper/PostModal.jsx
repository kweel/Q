import { Modal, Button, Text, TextInput, View } from "react-native";
import { useState, useEffect } from "react";

function PostModal(props) {
    //from lecture: https://snack.expo.dev/@ctnelson1997/findmybadgers-animated-modal
    const [title,setTitle] = useState('')
    const [message,setMessage]=useState('')
    const [popoutShown,setPopoutShown]=props.popSet
    console.log(props.popSet)
    useEffect(() => {popoutShown},[popoutShown])

    return  <Modal
    animationType="slide"
    transparent={false}
    visible={popoutShown}
    presentationStyle={"pageSheet"}
    onDismiss={()=>setPopoutShown(false)}
    onRequestClose={()=>setPopoutShown(false)}
    styles={{backgroundColor:'black', color:'black'}}>
    <View styles={{backgroundColor:'black', color:'black'}}>
        <Text style={{ fontSize: 30, fontWeight: 300 }}>{props.question}</Text>
        <Text style={{ fontSize: 20 }}>Title</Text>
            <TextInput style = {{
                height: 40,
                margin: 12,
                borderWidth: 1,
                padding: 10,
            }} 
            onChangeText={setTitle} value = {title}/>
        <Text style={{ fontSize: 20 }}>Message</Text>
            <TextInput  style = {{
                height: 40,
                margin: 12,
                borderWidth: 1,
                padding: 10,
            }} 
            onChangeText={setMessage} value = {message}/>
      <Button title="Post" color="blue" onPress={()=>props.handlePost(title, message)} />
      <Button title="Cancel" color="red" onPress={()=>setPopoutShown(false)} />
    </View>
  </Modal>
}
export default PostModal;