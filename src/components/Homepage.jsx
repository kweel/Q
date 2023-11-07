import { Text, View, Button, ScrollView } from "react-native";
import { useLinkProps } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
export default function Homepage({ navigation }) {
    return (
        <View style = {useLinkProps.style}>
            <Text>Open up App.js to start working on your app! Garbonzobarbonzo</Text>
            <Button
                title="Go to Self"
                onPress={() => navigation.navigate('Self')}
            />
            <ScrollView>
              <Text style={{fontSize:14}}>Kevin's Post</Text>
            </ScrollView>
        </View>
        
    )
}