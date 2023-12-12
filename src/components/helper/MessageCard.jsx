import { Text, Button } from "react-native";
import HelperCard from "./HelperCard"
import { useContext,useEffect } from "react";
import GetProfileFunctionContext from "../contexts/GetProfileFunctionContext";
import { useNavigation } from "@react-navigation/native";
function MessageCard(props) {
    //fetches data with getProfile and returns it
    const getProfile = useContext(GetProfileFunctionContext)
    const todayQuote = getProfile(props.name,'todayQuote')
    const navigation = useNavigation()
    return <HelperCard style={{ marginTop: 16, padding: 8, marginLeft: 8, marginRight: 8 }}
                onPress={() => navigation.push('Profile',{name:props.name})}>
        <Text style={{fontSize: 28, fontWeight: 600}}>{props.name}</Text>
        <Text style={{fontSize: 20}}>{todayQuote.title}</Text>
        <Text style={{fontSize: 12}}>{todayQuote.body}</Text>
        <Text></Text>
    </HelperCard>
}

export default MessageCard;