import { Text, View, Button } from "react-native";
import FriendCard from "./helper/FriendCard";
//you have to pass data as 'data' in the parent for it to get the variable
export default function ProfileScroll({ data }) {
    const textStyle = {color:'white'}
    console.log(data)
    return (
        <View style={{ flex: 1, backgroundColor: '#000000'}}>
            <Text style={textStyle}>This will be a scrollview</Text>
            {
                data.map(fren => {
                    console.log('hey')
                    return <FriendCard {...fren}/>
                })
            }
        </View>
    )
}