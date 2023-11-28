import { Text, View, Button } from "react-native";
import { useLinkProps } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
export default function ProfileScroll({ navigation }) {
    return (
        <View style={{ flex: 1, backgroundColor: '#000000'}}>
            <Text>This will be a scrollview</Text>
        </View>
    )
}