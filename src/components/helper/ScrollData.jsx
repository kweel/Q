import { Text, ScrollView, Button } from "react-native";
//you have to pass data as 'data' in the parent for it to get the variable
export default function ScrollData({ data, Element }) {
    const textStyle = {color:'white'}
    console.log(data)
    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#000000'}}>
            {
                data.map(attributes => {
                    console.log('hey')
                    return <Element key = {attributes.id} {...attributes}/>
                })
            }
        </ScrollView>
    )
}