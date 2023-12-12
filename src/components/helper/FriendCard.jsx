import { Text, Button, Image } from "react-native";
import HelperCard from "./HelperCard"
import { useContext,useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import GetProfileFunctionContext from "../contexts/GetProfileFunctionContext";
export default function FriendCard(props) {
    const getProfile = useContext(GetProfileFunctionContext)
    const profileUsername = getProfile(props.name,'username')
    const profileImage = getProfile(props.name,'img')
    const navigation = useNavigation()
    return <HelperCard style={{ marginTop: 16, padding: 8, marginLeft: 8, marginRight: 8 }}
            onPress={() => navigation.push('Profile',{name:props.name})}>
        <Text style={{fontSize: 28, fontWeight: 600}}>{props.name}</Text>
        <Text style={{fontSize: 12}}>{profileUsername}</Text>
        <Text></Text>
    </HelperCard>
}

