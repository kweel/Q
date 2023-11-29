import { Text, Button } from "react-native";
import HelperCard from "./HelperCard"
import { useContext,useEffect } from "react";

function MessageCard(props) {

    return <MessageCard style={{ marginTop: 16, padding: 8, marginLeft: 8, marginRight: 8 }}>
        <Text style={{fontSize: 28, fontWeight: 600}}>{props.poster}</Text>
        <Text style={{fontSize: 20}}>{props.title}</Text>
        <Text style={{fontSize: 12}}>{props.body}</Text>
        <Text></Text>
    </MessageCard>
}

export default MessageCard;