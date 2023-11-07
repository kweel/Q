import { Text, View, Button } from "react-native";
import { useLinkProps } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
export default function NotHomepage({ navigation }) {
    return (
        <View style = {useLinkProps.style}>
            <Text>Open up App.js to start working on your app! Garbonzobarbonzo</Text>
            <Button
                title="Go to Home"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    )
}