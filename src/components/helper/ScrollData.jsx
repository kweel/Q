import { Text, ScrollView, Button } from "react-native";
//you have to pass data as 'data' in the parent for it to get the variable
export default function ScrollData({ data, Element, elementName }) {
    const textStyle = {color:'white'}
    //assume data is a list
    console.log(data)
    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#000000'}}>
            {
                //data should consist of an array of names
                data.length > 0 ? data.map(name => {
                    console.log('hey')
                    return <Element key = {name} name = {name}/>
                })
                :
                <Text style={{fontSize: 28, fontWeight: 600}}>Congratulations, you have no {elementName}!</Text>
            }
        </ScrollView>
    )
}