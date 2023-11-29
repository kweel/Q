import { Text, Button } from "react-native";
import HelperCard from "./HelperCard"
import { useContext,useEffect } from "react";

export default function FriendCard(props) {

    return <HelperCard style={{ marginTop: 16, padding: 8, marginLeft: 8, marginRight: 8 }}>
        <Text style={{fontSize: 28, fontWeight: 600}}>{props.name}</Text>
        <Text style={{fontSize: 12}}>{props.username}</Text>
        <Text></Text>
    </HelperCard>
}

