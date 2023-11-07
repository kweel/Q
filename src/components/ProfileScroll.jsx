import { Text, View, Button } from "react-native";
import { useLinkProps } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
export default function ProfileScroll({ navigation }) {
    return (
        <View style = {useLinkProps.style}>
            <Text>This will be a scrollview</Text>
            <Button
                title="Go to Home"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    )
}